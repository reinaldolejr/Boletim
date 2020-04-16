const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    let [report] = await connection('reportCards')
      .where('code', req.body.reportCard)
      .select('*');
    if (!report) {
      return res.status(400)
        .json({ message: 'No Report Cards found with this Id' })
    }

    const { name, grade, reportCard } = req.body;
    let [id] = await connection('students')
      .insert({
        name,
        grade,
        reportCard: report.id
      })

    return res.json({ id });
  },

  async getAll(req, res) {
    const student = await connection('students')
      .select('*');
    return res.json(student);
  }
}