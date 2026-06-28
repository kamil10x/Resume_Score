const resumeModel = require("../Models/resume");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
    try {
        const { job_desc, user } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF file."
            });
        }

        // Parse PDF directly from memory
        const pdfData = await pdfParse(req.file.buffer);

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

        const scoreMatch = result.match(/Match Score:\s*(\d+)/i);
        const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;

        const feedbackMatch = result.match(/Feedback:\s*([\s\S]*)/i);
        const feedback = feedbackMatch ? feedbackMatch[1].trim() : "";

        const newResume = new resumeModel({
            user,
            resume_name: req.file.originalname,
            job_desc,
            score,
            feedback,
        });

        await newResume.save();

        return res.status(200).json({
            success: true,
            message: "Your analysis is ready",
            data: newResume,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            error: "Server error",
            message: err.message,
        });
    }
};