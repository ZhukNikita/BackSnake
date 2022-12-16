const db = require('../db')
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion(req,res) {
    try{
        const result = await sql`select * from player`;
    }catch (e) {
        console.log(e);
    }
}

class PlayerController{
    async Create(req, res){
        const {name , score} = req.body
        const newPlayer = await sql`insert into player 
            (name, score) 
            values (${name},${score}) 
            returning *`
        res.json(newPlayer)
    }

    async Get (req, res){
        const users = await sql`select * from player`
        res.json(users)
    }
    async Delete (req, res){
        const id = req.params.id
        const users = await sql`delete from player where id = ${id}`
        res.json(users)
    }
}
module.exports = new PlayerController()
