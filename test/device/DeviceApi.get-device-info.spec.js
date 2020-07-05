const chai = require('chai');
const { expect } = chai;
require('mocha');
const request = require('supertest');
const app = require('../../app');

let deviceId = "5f00f48ecbc80937b0e7d313"

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAwZjQ2OWNiYzgwOTM3YjBlN2QzMTEiLCJpYXQiOjE1OTM5MTk0NDgsImV4cCI6MTU5MzkyMzA0OH0.1wPDiYyG5nAqJn5uEn_ZymDa_EoFtJfQasm5V2Z7m6Y"

describe('testing get device info', () => {

    it('get device info ok', () => {
        return request('localhost:3000/api')
            .get(`/device/get-device-info/${deviceId}`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property('message').to.equal('Get Device Info Successfully');
                expect(response.body).to.have.property('device');
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