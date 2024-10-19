const mysql = require('mysql');
const dbConfig = require('../config/database.config')

class Model {
    constructor() {
        this.connection = mysql.createConnection(dbConfig)
    }

    sendQuery(q) {
        return new Promise((res, rej) => {
            this.connect()
                .then(() => this.connection.query(q, (err, rows) => {
                    if(err) { rej(err); return; }
                    res(rows);
                    this.end();
                    return;
                }))
                .catch((err) => rej(err))
        })
    }

    connect() {
        return new Promise((res, rej) => {
            this.connection.connect((err) => {
                if(err) {
                    rej(err);
                    return;
                }
                res();
                return;
            })
        })
    }

    end() {
        return new Promise((res, rej) => {
            this.connection.end((err) => {
                if(err) {
                    rej(err);
                    return;
                }

                res();
                return;
            })
        })
    }
}

module.exports = Model