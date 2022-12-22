const schedule = require('node-schedule');
const moment = require('moment');

async function createfile(){
    try {
        let res = await fetch(`http://localhost:3000/weather/create/${moment().format('DD-MM-YYYY')}`,{
            method: 'GET',
            redirect: 'follow',
            headers:{}
        });
        // console.log(await res.json());
        // fs.writeFileSync('../assets/data/'+moment().format('DD-MM-YYYY')+'.json', new Buffer(await res.json()));
        fs.writeFileSync("./assets/data/foo.txt", "bar");
        if (res.status != 200) {
            return createfile();
        }
    } catch (e) {
        console.log(e.message);
        createfile();
    }
}
//10 minutes
// schedule.scheduleJob('* * * * * *', function(fireDate){
//     createfile();
// });