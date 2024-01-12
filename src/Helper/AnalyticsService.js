const MysqlPool = require('../Utils/MysqlConnectionPool.js');


function AnalyticsService() {
    this.getAnalytics = async (u_id, q_id) => {
      let pool = await MysqlPool.createPool();
      try {
        const result = await pool.query(`SELECT COUNT(*) AS row_count FROM scan WHERE u_id="${u_id}" AND q_id="${q_id}";`);
        // const result = await pool.query(`
        // SELECT qr.q_id, qr.url,
        // COUNT(scan.q_id) AS scan_count       
        // FROM qr_codes AS qr
        // LEFT JOIN scan ON qr.q_id = scan.q_id AND qr.u_id = scan.u_id
        // WHERE qr.u_id = "${u_id}" 
        // GROUP BY qr.q_id
        // `
        // );
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
  