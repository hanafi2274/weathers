const schedule = require('node-schedule');
const axios = require('axios');
const fs = require('fs');
const moment = require('moment');

async function createfile(){
    try {
        var logs = fs.readFileSync('./assets/logs.txt', 'utf8');
        let res = await axios({method: 'get',url: 'http://localhost:3344/generatebmkgjs/',headers: { }});
        if (res.status == 200) {
            return fs.writeFileSync("./assets/logs.txt",logs +"\n"+ moment() + ' : successfully generated')
        }
        if (res.status != 200) {
            return createfile();
        }
    } catch (e) {
        fs.writeFileSync("./assets/logs.txt",logs +"\n"+ moment() +" : "+ e.message)
        createfile();
    }
}

schedule.scheduleJob('1 */30 * * * *', function(fireDate){
    createfile();
});