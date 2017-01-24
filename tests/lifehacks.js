"use strict";


const expect = require('chai')
    .expect;
const lifehacks = require('../routes/lifehacks');
const knex = require('../db/knex');


beforeEach(done => {
    Promise.all([
            knex('lifehacks')
            .insert({
                id: 1,
                category_id: 1,
                user_id: 1,
                name: 'jon',
                description: 'description',
                url: 'url'
            }),
        ])
        .then(() => done());
});

afterEach(done => {
    knex('lifehacks')
        .del()
        .then(() => done());
});

describe('GET /lifehacks', () => {
    it('responds with JSON', done => {
        request(lifehacks)
            .get('/lifehacks')
            .expect('Content-Type', /json/)
            .expect(200, done);
        done();
    });
    it('returns an array of all lifehacks', done => {
        request(lifehacks)
            .get('/lifehacks')
            .end((err, res) => {
                expect(res.body)
                    .to.deep.equal([{
                        id: 1,
                        category_id: 1,
                        user_id: 1,
                        name: 'jon',
                        description: 'description',
                        url: 'url'
                    }]);

            });
        done();
    });

});
