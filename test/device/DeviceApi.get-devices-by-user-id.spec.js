const chai = require('chai');
const { expect } = chai;
require('mocha');
const request = require('supertest');
const app = require('../../app');

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxMDRiMDhmMGUwZDU4ODQxNjdkMzMiLCJpYXQiOjE1OTM5MDIzMDgsImV4cCI6MTU5MzkwNTkwOH0.fVjHm7MfRDc80Cyp1ikQaooxtScMpdbyCU11QNJgVss"

describe('testing get all devices by user id', () => {

    it('get all devices info ok', () => {
        return request('localhost:3000/api')
            .get(`/device/get-devices-by-user-id`)
            .set({ authorization: token })
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.be.an('array')
            });
    });
});