const mongoose = require('mongoose');
const Device = require('../device.model');
const { User } = require('../../user');

async function deleteDevice(req, res, next) {
    try {
        const { deviceId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(deviceId)) return res.status(400).send({ message: 'Invalid Device' });

        console.log(deviceId, 'deviceId');

        const device = await Device.findOneAndDelete({ _id: deviceId });
        if (!device) return res.status(400).json({ message: 'Invalid Device' });
        console.log(device, 'device after delete');
        await User.updateOne({ _id: req.userData._id }, { $pull: { devices: deviceId } })

        return res.status(200).json({ message: 'Devices Deleted Successfully', device });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
}

module.exports = deleteDevice;