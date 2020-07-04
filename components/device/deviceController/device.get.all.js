const Device = require('../device.model');

async function getDevicesByUserId(req, res, next) {
    try {

        const devices = await Device.find({ addedBy: req.userData._id });

        return res.status(200).json(devices);

    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getDevicesByUserId;