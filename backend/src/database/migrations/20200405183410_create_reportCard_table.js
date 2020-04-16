
exports.up = function (knex) {
    return knex.schema.createTable('reportCards', function (table) {
        table.increments().primary();
        table.string('code').notNullable();
        table.string('matter').notNullable();
        table.string('className').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('reportCards');
};
