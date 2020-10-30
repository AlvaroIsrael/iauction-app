import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', tableBuilder => {
      tableBuilder.increments('id').primary();
      tableBuilder.string('name').notNullable();
      tableBuilder.decimal('value').notNullable();
    },
  );
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
