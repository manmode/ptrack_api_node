var db = require('./db-connection');
var express = require('express');
async function main () {
    const CONNECTION = await db.setupConnection();
    // const allTypes = await db.getCardTypes(CONNECTION);
    // console.log(allTypes);


    const APP = express();

    APP.get('/getCardTypes', async (request, response) => {
        const result = await db.getCardTypes(CONNECTION);
        response.send(handleResponse(result));
    });

    APP.get('/getBillStatus', async (request, response) => {
        response.send(await db.getBillStatus(CONNECTION));
    });

    APP.listen(3001);
}

function handleResponse ( rows) {
    return `
    <div>
        <table>
            <thead>
                <th>Id</th>
                <th>Code</th>
                <th>Name</th>
            </thead>
            <tbody>
                ${rows.map((item) => {
                    return '<tr> <td>' + item.id + '</td> <td>' + item.code + '</td> <td>' + item.name + '</td> </tr>';
                })}
            </tbody>
        </table>
    </div`;
}

main();
