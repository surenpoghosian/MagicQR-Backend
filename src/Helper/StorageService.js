const MysqlPool = require('../Utils/MysqlConnectionPool.js');

function StorageService(){
    this.getQrList = async (u_id) => {
        let pool = await MysqlPool.createPool();
        try {
            console.log("u_id",u_id)
        //   const result = await pool.query(`SELECT * from qr_codes WHERE u_id="${u_id}";`);
        const result = await pool.query(`SELECT qr.q_id, qr.img_url, COUNT(scan.q_id) AS scan_count FROM qr_codes AS qr LEFT JOIN scan ON qr.q_id = scan.q_id AND qr.u_id = scan.u_id WHERE qr.u_id = "${u_id}" GROUP BY qr.q_id, qr.img_url;`);
        console.log(result);
          return result;
        } finally {
          await pool.end();
        }
    }

    this.newQr = async (u_id, q_id, url, destination) => {
        let pool = await MysqlPool.createPool();
        try {
          const result = await pool.query(`insert into qr_codes(u_id, q_id, img_url, destination_url) values(?,?,?,?);`,[u_id, q_id, url, destination]);
          console.log(result);
          return result[0];
        } catch(error){
            console.log(error)
        }finally {
          await pool.end();
        }
    }
} 

module.exports = StorageService