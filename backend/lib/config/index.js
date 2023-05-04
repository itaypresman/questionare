require('dotenv').config();


const env = process.env;

module.exports = {
    port: env.PORT || 3000,

    mysql: {
        host: env.MYSQL_HOST,
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: env.MYSQL_DB,
    }
};
