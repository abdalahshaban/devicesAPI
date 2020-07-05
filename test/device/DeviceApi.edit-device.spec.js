// const chai = require('chai');
// const { expect } = chai;
// require('mocha');
// const request = require('supertest');
// const app = require('../../app');

// let deviceId = '5f00f489cbc80937b0e7d312'

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxMDRiMDhmMGUwZDU4ODQxNjdkMzMiLCJpYXQiOjE1OTM5MDIzMDgsImV4cCI6MTU5MzkwNTkwOH0.fVjHm7MfRDc80Cyp1ikQaooxtScMpdbyCU11QNJgVss"

// describe('testing edit device', () => {

//     it('edit device ok', () => {
//         return request('localhost:3000/api')
//             .put(`/device/edit-device/${deviceId}`)
//             .set({ authorization: token })
//             .send({
//                 brand: 'brand1',
//                 name: 'device1',
//                 description: 'des1'
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(200);
//                 expect(response.body).to.have.property('message').to.equal('Device edited successfully');
//                 expect(response.body).to.have.property('editedDevice');

//             });
//     });

//     it('edit device Invalid Device Id mongoose.Types.ObjectId.isValid', () => {
//         return request('localhost:3000/api')
//             .put(`/device/edit-device/124354465565`)
//             .set({ authorization: token })
//             .send({
//                 brand: 'brand1',
//                 name: 'device1',
//                 description: 'des1'
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('Invalid Device');
//             });
//     });

//     it('edit device Invalid Device not found', () => {
//         return request('localhost:3000/api')
//             .put(`/device/edit-device/5f00f489cbc80937b0e7d318`)
//             .set({ authorization: token })
//             .send({
//                 brand: 'brand1',
//                 name: 'device1',
//                 description: 'des1'
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('Invalid Device');
//             });
//     });

//     //required validation like add device
// });