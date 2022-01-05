const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

<<<<<<< HEAD
=======
    await seedComments();
    console.log('--------------');

    await seedVotes();
    console.log('--------------');

>>>>>>> fae6202b2be8dd4c44395f6cf5964a95d5b88f70
    process.exit(0);
};

seedAll();