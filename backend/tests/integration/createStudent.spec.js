const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('Create a Student', () => {

   beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should return error when send reportCard invalid', async () => {
        const response = await request(app)
            .post('/student')
            .send({
                name: "teste",
                grade: 1,
                reportCard: ""
            }).expect(400);
        expect(response.body.message).toEqual(expect.any(String));
    });


    it('should create students with their grade', async () => {
        console.time("tempo");
        const responseReport = await request(app)
            .post('/reportCard')
            .send({
                matter: "Matematica",
                className: "5a"
            }).expect(200);

        let reportCard = responseReport.body.code;
        expect(responseReport.body).toEqual(expect.any(Object));
        expect(responseReport.body.code).toEqual(expect.any(String));
        expect(responseReport.body.code).toHaveLength(6);

        const responseStudent1 = await request(app)
            .post('/student')
            .send({
                name: "ana",
                grade: 10,
                reportCard: reportCard
            }).expect(200);

        expect(responseStudent1.body).toEqual(expect.any(Object));
        expect(responseStudent1.body.id).toEqual(expect.any(Number));
        expect(responseStudent1.body.id).toBeGreaterThan(0);
        const responseStudent2 = await request(app)
            .post('/student')
            .send({
                name: "joão",
                grade: 2,
                reportCard: reportCard
            }).expect(200);

        expect(responseStudent2.body).toEqual(expect.any(Object));
        expect(responseStudent2.body.id).toEqual(expect.any(Number));
        expect(responseStudent2.body.id).toBeGreaterThan(0);

    });

});