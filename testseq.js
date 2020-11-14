const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('yuli', 'root', '123456', {
    dialect: 'mysql'
})
//创建user模型
class User extends Model {}

//初始化user
User.init({
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

同步到数据库
sequelize.sync()
    //创建1条记录
    .then(() => User.create({
        username: 'jack',
        birthday: new Date(1999, 2, 28)
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

//查询所有数据
async function run(){
    User.destroy({
        where:{
            id:1
        }
    })
    const users=await User.findAll();
    console.log(JSON.stringify(users));
    sequelize.close();
}
run();

