const pool = require('./mysql_pool');
const fs = require('fs/promises');


async function init(){
    let conn = await pool.promise().getConnection();

    try{
        await conn.beginTransaction();        

        // Create database
        let stmt = await fs.readFile('./database/sqls/database.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create User
        stmt = await fs.readFile('./database/sqls/table_user.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create Format
        stmt = await fs.readFile('./database/sqls/table_format.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create Category
        stmt = await fs.readFile('./database/sqls/table_category.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create Post
        stmt = await fs.readFile('./database/sqls/table_post.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create Basket
        stmt = await fs.readFile('./database/sqls/table_basket.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create Logs
        stmt = await fs.readFile('./database/sqls/table_user_log.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Create XPost
        stmt = await fs.readFile('./database/sqls/view_xpost.sql', {encoding: 'utf-8'});
        await conn.query(stmt);
        // Setup default
        stmt = await fs.readFile('./database/sqls/setup_default.sql', {encoding: 'utf-8'});
        await conn.query(stmt);

        await conn.commit();
        console.log("Success");
    } catch(err){
        await conn.rollback();
        console.error("Can not initialze database");
        console.error(err);
    } finally{
        conn.release();
    }
};

init();
exports = init;