const conn = require('_conn');

const User = conn.define('user',{
    firstname:conn.Sequelize.STRING,
    lastname:conn.Sequelize.STRING,
    email:conn.Sequelize.STRING,
    latitude:conn.Sequelize.STRING,
    longtitude:conn.Sequelize.STRING
},{
    classMethod:{
        countbyfirstname:function(){
            return this.findAll()
            .then(users=>{
                var map = user.reduce((memo,user)=>{
                    var first = user.slice(0,1);
                    memo[first]=typeof memo[first]!=='undefined'?memo[first]:0;
                    memo[first]++;
                    return memo;
                },{})
                return map;
            })

        }
    }
});

module.exports = User;