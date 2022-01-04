const { Post } = require('../models');

const postdata = [
    {
        name: 'Steve',
        event: 'Bareback',
        user_id: 10
    },
    {
        name: 'David',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 8
    },
    {
        name: 'Clint',
        event: 'Bareback',
        user_id: 1
    },
    {
        name: 'Angus',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 4
    },
    {
        name: 'Ralph',
        event: 'Bareback',
        user_id: 7
    },
    {
        name: 'Rachel',
        event: 'Bullriding',
        user_id: 4
    },
    {
        name: 'Alex',
        event: 'Bareback',
        user_id: 1
    },
    {
        name: 'Ronald',
        event: 'Bullriding',
        user_id: 1
    },
    {
        name: 'Alyssa',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 9
    },
    {
        name: 'Clark',
        event: 'Bareback',
        user_id: 5
    },
    {
        name: 'Jake',
        event: 'Bullriding',
        user_id: 3
    },
    {
        name: 'Aaron',
        event: 'Bareback',
        user_id: 10
    },
    {
        name: 'Michael',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 8
    },
    {
        name: 'John',
        event: 'Bareback',
        user_id: 3
    },
    {
        name: 'Greg',
        event: 'Bullriding',
        user_id: 3
    },
    {
        name:'Walt',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 7
    },
    {
        name: 'Jerry',
        event: 'Bareback',
        user_id: 6
    },
    {
        name: 'Rick',
<<<<<<< Updated upstream
        event: 'Saddlebronc',
=======
        event: 'SaddleBronc',
>>>>>>> Stashed changes
        user_id: 4
    },
    {
        name: 'Pam',
        event: 'Bareback',
        user_id: 6
    },
    {
        name: 'Marty',
        event: 'Bareback',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
