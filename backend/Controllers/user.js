const userModel = require('../Models/user');
exports.register = async (req, res) => {
    try {
        const { name, email, photoUrl } = req.body;

        let user = await userModel.findOne({ email });

        if (!user) {
            user = new userModel({
                name,
                email,
                photoUrl
            });

            await user.save();
        } else {
            user.name = name;
            user.photoUrl = photoUrl; // Update profile image every login
            await user.save();
        }

        return res.status(200).json({
            message: "Login Successful",
            user
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "Server error",
            message: err.message
        });
    }
};

/*
exports.register = async (req, res) => {
    try {
        const { name, email, photoUrl } = req.body;

        console.log("BODY:", req.body);

        const userExist = await userModel.findOne({ email });

        if (!userExist) {
            let newUser = new userModel({
                name,
                email,
                photoUrl
            });

            await newUser.save();

            return res.status(200).json({
                message: "User registered successfully",
                user: newUser
            });
        }

        return res.status(200).json({
            message: "Welcome Back",
            user: userExist
        });

    } catch (err) {
        console.log("REGISTER ERROR:");
        console.log(err);

        return res.status(500).json({
            error: "Server error",
            message: err.message
        });
    }
};*/