const resumeModel = require('../Models/resume');
const pdfParse = require("pdf-parse");
const fs = require("fs");
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;
        const pdfBuffer = req.file.buffer || null;
        const pdfPath = req.file.path;
        
        const dataBuffer = fs.readFileSync(pdfPath);
        const pdfData = await pdfParse(dataBuffer);

        const prompt = `
        Analyze the resume against the job description.

        Return in the format:

        Match Score: (0-100)

        Feedback:
        short feedback in 50-80 words

        Resume:
        ${pdfData.text}

        Job Description:
        ${job_desc}
        `;

        const response = await cohere.chat({
            model: "command-a-03-2025",
            message: prompt,
        });

        const result = response.text;

        //console.log(result);

        const scoreMatch = result.match(/Match Score:\s*(\d+)/i);
        const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;

        const feedbackMatch = result.match(/Feedback:\s*([\s\S]*)/i);
        const feedback = feedbackMatch ? feedbackMatch[1].trim() : "";

        const newResume = new resumeModel({
            user,
            resume_name: req.file.originalname,
            job_desc,
            score,
            feedback
        });

        await newResume.save();

        fs.unlinkSync(pdfPath);

        return res.status(200).json({
            success: true,
            message: "Your analysis is ready",
            data: newResume
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Server error",
            message: err.message,
        });
    }
};

exports.getAllResumesForUser = async (req, res) => {
    try{
        const { user } = req.params;
        let resumes = await resumeModel.find({ user: user }).sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Your Previous History",
            resumes: resumes
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Server error",
            message: err.message,
        });
    }
}

/*
exports.getResumeForAdmin = async(req, res) =>{
    try{
        //const { user } = req.params;
        let resumes = await resumeModel.find({ }).sort({ createdAt: -1 }).populate('user');
        return res.status(200).json({
            message: "Entire History",
            resumes: resumes
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Server error",
            message: err.message,
        });
    }
}
*/
exports.getResumeForAdmin = async(req, res) =>{
    try{
        let resumes = await resumeModel
            .find({})
            .sort({ createdAt: -1 })
            .populate("user");

        return res.status(200).json({
            message: "Entire History",
            resumes
        });

    } catch (err) {
        console.log("ADMIN ERROR:");
        console.log(err);

        return res.status(500).json({
            error: "Server error",
            message: err.message,
        });
    }
}