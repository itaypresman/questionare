const { Sequelize } = require('sequelize');
const Config = require('@questionare-be/config');


const sequelize = new Sequelize(Config.mysql.database, Config.mysql.username, Config.mysql.password, {
    host: Config.mysql.host,
    dialect: 'mysql',
});

const connect = () => {
    sequelize.authenticate().then(() => console.log('Database connected successful'));
};

module.exports = {
    connect
};

