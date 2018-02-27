const { Migration } = require('../../app/tools/Migration');

// Table Name
const TABLE_NAME = 'users';

/**
 * Migration Up
 * @param {Migration} db
 */
exports.up = async (db) => {
  await db.schema.hasTable(TABLE_NAME)
    .createTable(TABLE_NAME, (table) => {
      table.increments('id').primary().unique();
      table.string('facebook_id', 255).unique();
      table.string('email', 255).unique().notNullable();
      table.string('password', 255);
      table.string('name', 255).unique().notNullable();
      table.string('firstname', 255).notNullable();
      table.string('lastname', 255).notNullable();
      table.string('gender', 255);
      table.string('remember_token', 255);
      table.text('avatar', 'longtext');
      table.timestamps(false, true);
    });
};

/**
 * Migration Down
 * @param {Migration} db
 */
exports.down = async (db) => {
  await db.schema.hasTable(TABLE_NAME).dropTableIfExists(TABLE_NAME);
};
