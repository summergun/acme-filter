const conn = require('./conn');
const User = require('./User');
const faker = require('faker');

let users = [];

const generateFakeUsers = (){
    for (var i=0;i<100;i++){
        let user ={};
        user.firstname = faker.name.firstName();
        user.lastname = faker.name.lastName();
        user.email = `${user.fname}.${user.lname}@example.com`;
        user.latitude = faker.address.latitude();
        user.longtitude = faker.address.longitude();
        users.push(user);
    }
}

const sync = ()=>{
    return conn.sync({force:true});
}

const seed=()=>{
    generateFakeUsers();
    return sync()
    .then(()=>Promise.all([
        user.map(user=>User.create(user))
    ]))
    .catch(e=>console.log(e))
}

module.exports={
    models:{
        User
    },
    seed
}