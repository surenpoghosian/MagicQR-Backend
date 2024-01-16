# MagicQR-Backend
- Microservice architecture
- node js | express
- mysql
- [qr-engine](https://replicate.com/zylim0702/qr_code_controlnet)

[Postman documentation](https://documenter.getpostman.com/view/20677273/2s9YsNdVrw)


# How to use ?

1. `git clone https://github.com/surenpoghosian/MagicQR-Backend`
2. `cd MagicQR-Backend`
3. `npm i`
4. Then you need to run index.js using on of these "pm2 / node / nodemon".  example - `node index.js`. 
5. Also run all the microservices located in "./src/API Services" folder 

PS. use PM2 for best perfomance


# Make sure to:

1. `create a db in mysql`
2. run the .sql file with command `source /path/to/Db.sql` inside mysql console
3. input your mysql user credentials in ./src/Utils/MysqlConnectionPool.js
