const chai = require('chai');
const { expect } = chai;
require('mocha');
const request = require('supertest');
const app = require('../../app');

let deviceId = "5f00f48ecbc80937b0e7d313"

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxMDRiMDhmMGUwZDU4ODQxNjdkMzMiLCJpYXQiOjE1OTM5MDIzMDgsImV4cCI6MTU5MzkwNTkwOH0.fVjHm7MfRDc80Cyp1ikQaooxtScMpdbyCU11QNJgVss"

describe('testing get device info', () => {

    it('get device info ok', () => {
        return request('localhost:3000/api')
            .get(`/device/get-device-info/${deviceId}`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('object')
                expect(response.body).to.have.property('_id').length.greaterThan(0)
                expect(response.body).to.have.property('name').length.greaterThan(0)
                expect(response.body).to.have.property('brand').length.greaterThan(0)
                expect(response.body).to.have.property('description').length.greaterThan(0)
            });
    });

    it('get device info Invalid Device Id mongoose.Types.ObjectId.isValid', () => {
        return request('localhost:3000/api')
            .get(`/device/get-device-info/124354465565`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body).to.have.property('message').to.equal('Invalid Device');
            });
    });

    it('get device info Invalid Device not found', () => {
        return request('localhost:3000/api')
            .get(`/device/get-device-info/5f00f489cbc80937b0e7d318`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(400);
                expect(response.body).to.have.property('message').to.equal('Invalid Device');
            });
    });
});