
exports.up = function (knex) {
    return knex.schema.createTable('students', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
        table.integer('grade').notNullable();
        table.integer('reportCard').unsigned().notNullable();
        
        table.foreign('reportCard').references('id').inTable('reportCards');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('students');
};
