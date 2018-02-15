import mysql from 'mysql-model';

const Connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
});

export default Connection;


// const DB = {
//   mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
//   port: process.env.PORT || 8000,
// };

// export default DB;