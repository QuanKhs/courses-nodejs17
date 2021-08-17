// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize('nodejs17_movies', 'root', '123456', {
//     host: 'localhost',
//     port: 3306,
//     dialect: 'mysql',
// });

// const User = sequelize.define('User', {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     age: {
//         type: DataTypes.INTEGER,
//     }
// });

// const syncModel = async () => {
//     try {
//         await User.sync({ alter: true });
//         console.log('sync success');
//     } catch (error) {
//         console.log('sync error');
//     }
// };

// syncModel();

// const createUser = async () => {
//     try {
//         const user = await User.create({
//             name: 'Jackson Pham',
//             age: 18
//         });
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// };

// createUser();

// const initSequelize = async () => {
//     // sequelize.authenticate().then(() => {
//     //     console.log('Connection has been established successfully.');
//     // }
//     // ).catch(err => {
//     //     console.log('Unable to connect to the database:', err);
//     // }
//     // );
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (err) {
//         console.log('Unable to connect to the database:', err);
//     }

// };

// initSequelize();

