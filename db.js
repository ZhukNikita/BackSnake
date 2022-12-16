const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ZhukNikita',
    password:'fQ2jKAnkGR8U',
    host: 'ep-falling-wildflower-364555.eu-central-1.aws.neon.tech',
    port: '5432',
    database:'neondb'
})


module.exports = pool