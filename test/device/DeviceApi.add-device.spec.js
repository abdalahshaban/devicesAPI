// const chai = require('chai');
// const { expect } = chai;
// require('mocha');
// const request = require('supertest');
// const app = require('../../app');

// const deviceData = {
//     brand: 'sam1',
//     name: 's 20 plus',
//     description: 'description 1',
// };
// //Token was Expired
// let tokenExpired = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAwZjQ2OWNiYzgwOTM3YjBlN2QzMTEiLCJpYXQiOjE1OTM4OTgwOTEsImV4cCI6MTU5MzkwMTY5MX0.zO-LjapA33IpikGIqDE5ifgRettp4Mpj6goIx5ilM40';

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxMDRiMDhmMGUwZDU4ODQxNjdkMzMiLCJpYXQiOjE1OTM5MDIzMDgsImV4cCI6MTU5MzkwNTkwOH0.fVjHm7MfRDc80Cyp1ikQaooxtScMpdbyCU11QNJgVss"

// describe('testing add device', () => {

//     it('add device ok', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .set({ authorization: token })
//             .send(deviceData)
//             .then((response) => {
//                 expect(response.status).to.equal(200);
//                 expect(response.body).to.have.property('message').to.equal('Device add Successfully');
//                 expect(response.body).to.have.property('device');

//             });
//     });
//     it('add device Token was Expired', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .set({ authorization: tokenExpired })
//             .send(deviceData)
//             .then((response) => {
//                 expect(response.status).to.equal(401);
//                 expect(response.body).to.have.property('message').to.equal('Token was Expired. Pleas login again');
//                 expect(response.body).to.have.property('token').to.equal(null);

//             });
//     });

//     it('add device removed token from header Unauthorized request ', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .send(deviceData)
//             .then((response) => {
//                 expect(response.status).to.equal(401);
//                 expect(response.body).to.have.property('message').to.equal('Unauthorized request');

//             });
//     });
//     it('add device brand required ', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .set({ authorization: token })
//             .send({
//                 name: 's 20 plus',
//                 description: 'description 1',
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('brand is required');

//             });
//     });
//     it('add device name required ', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .set({ authorization: token })
//             .send({
//                 brand: 'a',
//                 description: 'description 1',
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('name is required');

//             });
//     });
//     it('add device description required ', () => {
//         return request('localhost:3000/api')
//             .post('/device/add-device')
//             .set({ authorization: token })
//             .send({
//                 brand: 'b',
//                 name: 's 20 plus',
//             })
//             .then((response) => {
//                 expect(response.status).to.equal(400);
//                 expect(response.body).to.have.property('message').to.equal('description is required');

//             });
//     });
// });