const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('create a report card', () => {

    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();

    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should create a report card without students', async () => {
        const response = await request(app)
            .post('/reportCard')
            .send({
                matter: "Matematica",
                className: "501"
            }).expect(200);

        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.code).toEqual(expect.any(String));
        expect(response.body.code).toHaveLength(6);
    });

    it('should create a report card with students', async () => {
        const response = await request(app).post('/reportCard')
            .send({
                matter: "Português",
                className: "601",
                students: [
                    {
                        name: "ana",
                        grade: 6
                    },
                    {
                        name: "joao",
                        grade: 7
                    },
                    {
                        name: "andre",
                        grade: 8
                    },
                ]
            }).expect(200);

        expect(response.body).toEqual(expect.any(Object));
        expect(response.body.code).toEqual(expect.any(String));
        expect(response.body.code).toHaveLength(6);
        const responseReport = await request(app)
            .get(`/reportCard/${response.body.code}`)
            .expect(200);

        expect(responseReport.body).toEqual(expect.any(Object));
        expect(responseReport.body.id).toBeGreaterThan(0);
        expect(responseReport.body.students.length).toEqual(3);
    });

    it('should return all reports', async () => {
        const response1 = await request(app)
            .post('/reportCard')
            .send({
                matter: "Matematica",
                className: "501"
            }).expect(200);

        const response2 = await request(app)
            .post('/reportCard')
            .send({
                matter: "Portugues",
                className: "501"
            }).expect(200);

        const responsereportCard = await request(app)
            .get('/reportCard')
            .expect(200);

        expect(responsereportCard.body).toEqual(expect.any(Array));

        const arrayExpect = [{
            matter: "Matematica",
            className: "501"
        },
        {
            matter: "Portugues",
            className: "501"
        }];
        
        expect(responsereportCard.body).toMatchObject(arrayExpect);
        expect(responsereportCard.body.some(x => x.code)).toEqual(false);
        expect(responsereportCard.body.length).toEqual(2);

    });
})