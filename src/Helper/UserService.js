const MysqlPool = require('../Utils/MysqlConnectionPool.js');

function UserService(){
    this.createUser = async (u_id) =>{
      // console.log('creating user')
        let pool = await MysqlPool.createPool();
        try {
          const result = await pool.query(`insert into user(u_id) values(?);`,[u_id]);
          console.log(result);
          return result[0];
        } catch(error) {
          console.log(error)
        } finally {
          await pool.end();
        }
    }
} 

module.exports = UserService