const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs17_movies', 'root', '123456', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

const initSequelize = async () => {
    // sequelize.authenticate().then(() => {
    //     console.log('Connection has been established successfully.');
    // }
    // ).catch(err => {
    //     console.log('Unable to connect to the database:', err);
    // }
    // );
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log('Unable to connect to the database:', err);
    }

};

initSequelize();