const mongoose = require('mongoose');
const Device = require('../device.model');


async function getDevieInfo(req, res, next) {
    try {
        const { deviceId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(deviceId)) return res.status(400).send({ message: 'Invalid Device' });

        const device = await Device.findOne({ _id: deviceId }).lean();
        if (!device) return res.status(400).send({ message: 'Invalid Device' });

        return res.status(200).json({ message: "Get Device Info Successfully", device });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getDevieInfo;