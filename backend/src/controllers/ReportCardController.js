const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async create(req, res) {
        const { matter, className, students } = req.body;
        const code = generateUniqueId();

        let [id] = await connection('reportCards')
            .insert({
                code,
                matter,
                className
            });

        if (students && students.length > 0) {
            for (let index = 0; index < students.length; index++) {
                const element = students[index];
                await connection('students')
                    .insert({
                        name: element.name,
                        grade: element.grade,
                        reportCard: id
                    })
            }
        }

        return res.json({ code });
    },

    async getAll(req, res) {
        const reportCards = await connection('reportCards').select('*');
        return res.json(reportCards);
    },

    async get(req, res) {
        const { code } = req.params;
        const [reportCard] = await connection('reportCards')
            .where('code', code.toString())
            .select('*');

        reportCard.students = await connection('students')
            .where('reportCard', reportCard.id)
            .select('*');

        return res.json(reportCard);
    }
}