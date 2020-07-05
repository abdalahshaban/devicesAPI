const chai = require('chai');
const { expect } = chai;
require('mocha');
const request = require('supertest');
const app = require('../../app');

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAwZjQ2OWNiYzgwOTM3YjBlN2QzMTEiLCJpYXQiOjE1OTM5MTk0NDgsImV4cCI6MTU5MzkyMzA0OH0.1wPDiYyG5nAqJn5uEn_ZymDa_EoFtJfQasm5V2Z7m6Y"

describe('testing get all devices by user id', () => {

    it('get all devices info ok', () => {
        return request('localhost:3000/api')
            .get(`/device/get-devices-by-user-id`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property('message').to.equal('get All Devices Successfully');
                expect(response.body).to.have.property('devices');
            });
    });
});