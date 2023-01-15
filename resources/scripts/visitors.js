var fs = require('fs');
const dotenv = require('dotenv');

let instance = null;
dotenv.config();

let logsPath = require('path').resolve(__dirname, "../logs/requests.log");

class Visitors {
    static getVisitorsInstance() {
        return instance ? instance : new Visitors();
    }

    accesLogStream = fs.createWriteStream(logsPath, {flags: 'a'})
}

module.exports = Visitors;