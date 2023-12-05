var mysql = require('mysql2/promise');
async function setupConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'welcome',
        database: 'ptrack_schema'
    });
    return connection;
}

async function getCardTypes(connection) {
    const [rows, fields] = await connection.execute('select * from card_types_lov');
    return rows;
}
async function getBillStatus(connection) {
    const [rows, fields] = await connection.execute('select * from bill_status_lov');
    return rows;
}


module.exports = {
    setupConnection,
    getCardTypes,
    getBillStatus
}