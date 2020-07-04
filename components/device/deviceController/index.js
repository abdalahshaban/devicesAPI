const addDevice = require('./device.add');
const editDevice = require('./device.edit');
const deleteDevice = require('./device.delete');
const getDevicesByUserId = require('./device.get.all');
const getDeviceInfo = require('./device.get.info');


module.exports = {
    addDevice,
    editDevice,
    deleteDevice,
    getDevicesByUserId,
    getDeviceInfo
};