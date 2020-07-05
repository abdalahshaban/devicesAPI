// const chai = require('chai');
// const { expect } = chai;
// require('mocha');
// const request = require('supertest');
// const app = require('../../app');

// let deviceId = "5f0105565ef0d76bd070dccc"

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxMDRiMDhmMGUwZDU4ODQxNjdkMzMiLCJpYXQiOjE1OTM5MDIzMDgsImV4cCI6MTU5MzkwNTkwOH0.fVjHm7MfRDc80Cyp1ikQaooxtScMpdbyCU11QNJgVss"

// describe('testing delete device', () => {

//     it('delete device ok', () => {
//         return request('localhost:3000/api')
//             .delete(`/device/delete-device/${deviceId}`)
//             .set({ authorization: token })
//             .then((response) => {
//                 expect(response.status).to.equal(200);
//                 expect(response.body).to.have.property('message').to.equal('Devices Deleted Successfully');
//             });
//     });

//     it('delete device Invalid Device Id mongoose.Types.ObjectId.isValid', () => {
//         return request('localhost:3000/api')
//             .delete(`/device/delete-device/124354465565`)
//             .set({ authorization: token })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('Invalid Device');
//             });
//     });

//     it('delete device Invalid Device not found', () => {
//         return request('localhost:3000/api')
//             .delete(`/device/delete-device/5f00f489cbc80937b0e7d318`)
//             .set({ authorization: token })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('Invalid Device');
//             });
//     });

//     //required validation like add device
// });