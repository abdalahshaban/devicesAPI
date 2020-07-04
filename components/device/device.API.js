const express = require('express');
const { addDevice, editDevice, deleteDevice, getDeviceInfo, getDevicesByUserId } = require('./deviceController');

const router = express.Router();

router.post('/device/add-device', addDevice);
router.put('/device/edit-device/:deviceId', editDevice);
router.delete('/device/delete-device/:deviceId', deleteDevice);
router.get('/device/get-device-info/:deviceId', getDeviceInfo);
router.get('/device/get-devices-by-user-id', getDevicesByUserId);


module.exports = router;