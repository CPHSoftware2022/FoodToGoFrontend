import mysql from 'mysql2/promise';

export default async function getItemToFeature(req, res) {

    const dbConnection = await mysql.createConnection({
        host: "localhost",
        database: "FoodToGo",
        user:"root",
        password:"mypassword",
    })

    //const [rows, fields] = await dbConnection.execute("SELECT * from item order by rand() limit 1 join restaurant on item.restaurant_id as restaurant.id on restaurant.id = item.restaurant_id");
    const [rows, fields] = await dbConnection.execute("SELECT restaurant.name as restaurant_name,restaurant.phone,item.name as item_name,item.price from restaurant,item where restaurant.restaurant_id = item.restaurant_id order by rand() limit 1");
    
    res.status(200).json(rows);


  }