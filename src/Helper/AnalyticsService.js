const MysqlPool = require('../Utils/MysqlConnectionPool.js');


function AnalyticsService() {
    this.getAnalytics = async (u_id, q_id) => {
      let pool = await MysqlPool.createPool();
      try {
        const result = await pool.query(`SELECT COUNT(*) AS row_count FROM scan WHERE u_id="${u_id}" AND q_id="${q_id}";`);
        console.log(result);
        return result[0];
      } finally {
        await pool.end();
      }
    }
  
    this.appendScanRecord = async (u_id, q_id) => {
      let pool = await MysqlPool.createPool();
      try {
        const result = await pool.query(`insert into scan(u_id,q_id) values(?,?)`,[u_id,q_id]);
        console.log(result);
        return result[0];
      } finally {
        await pool.end();
      }
    }

  }

  
module.exports = AnalyticsService;
  