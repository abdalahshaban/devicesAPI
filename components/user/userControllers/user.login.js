const { login: loginValidationSchema } = require('../user.validation');
const User = require('../user.model');

async function login(req, res, next) {

    try {
        const { error, value } = loginValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.message.replace(/"/g, '') });

        const user = await User.findOne({ email: value.email });
        if (!user) return res.status(400).json({ message: 'Invalid username or password' });


        const isPasswordValid = await user.isPasswordValid(value.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid username or password' });

        const token = user.signJWT();

        return res.status(200).json(
            {
                token,
                userData: {
                    _id: user._id,
                    email: user.email,
                    devices: user.devices
                }
            });

    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = login;