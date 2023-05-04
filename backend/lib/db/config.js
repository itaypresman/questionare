const Config = require('@questionare-be/config');


module.exports = {
    production: {
        dialect: 'mysql',
        ...Config.mysql,
        define: {
            timestamps: false,
        },
    },
    development: {
        dialect: 'mysql',
        ...Config.mysql,
        define: {
            timestamps: false,
        },
    },
    local: {
        dialect: 'mysql',
        ...Config.mysql,
        define: {
            timestamps: false,
        },
    },
};
