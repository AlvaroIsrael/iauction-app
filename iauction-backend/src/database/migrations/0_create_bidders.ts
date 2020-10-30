import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('bidders', tableBuilder => {
      tableBuilder.increments('id').primary();
      tableBuilder.string('name').notNullable();
      tableBuilder.decimal('age').notNullable();
    },
  );
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('bidders');
}
