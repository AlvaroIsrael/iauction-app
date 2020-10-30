import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('auctions', tableBuilder => {
      tableBuilder.increments('id').primary();
      tableBuilder.string('bid').notNullable();
      tableBuilder.integer('bidderId')
        .notNullable()
        .references('id')
        .inTable('bidders');
      tableBuilder.integer('auctionItemId')
        .notNullable()
        .references('id')
        .inTable('auctions');
    },
  );
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('auctions');
}
