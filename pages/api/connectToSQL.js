import mysql from 'mysql2/promise';

export default async function getItemToFeature(req, res) {

    const dbConnection = await mysql.createConnection({
        host: "localhost",
        database: "FoodToGo",
        user:"root",
        password:"mypassword",
    })

    const [rows, fields] = await dbConnection.execute("SELECT * from item order by rand() limit 1");
    res.status(200).json(rows);


  }