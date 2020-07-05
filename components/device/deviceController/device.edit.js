const mongoose = require('mongoose');
const Device = require('../device.model');
const { deviceSchema: deviceValidationSchema } = require('../device.validation');

async function editDevice(req, res, next) {

    try {
        const { deviceId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(deviceId)) return res.status(400).send({ message: 'Invalid Device' });

        const { error, value } = deviceValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.message.replace(/"/g, '') });

        const device = await Device.findOne({ _id: deviceId });
        if (!device) return res.status(400).json({ message: 'Invalid Device' });

        value.addedBy = req.userData._id;

        let editedDevice = await Device.findOneAndUpdate({ _id: deviceId }, value, { new: true });
        return res.status(200).json({ message: 'Device edited successfully', editedDevice });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = editDevice;