const Device = require('../device.model');
const { deviceSchema: deviceValidationSchema } = require('../device.validation');
const { User } = require('../../user');

async function addDevice(req, res, next) {
    try {
        const { error, value } = deviceValidationSchema.validate(req.body);
        if (error) return res.status(400).json({ message: error.message.replace(/"/g, '') });

        value.addedBy = req.userData._id;

        device = await Device.create(value);
        await User.updateOne({ _id: req.userData._id }, { $push: { devices: device._id } });
        return res.status(200).json({
            message: 'Device add Successfully',
            device
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = addDevice;