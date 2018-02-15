import knex from 'knex';

export default knex({
  client: process.env.DB_CONNECTION,
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
  },
});
