/**
 * Application entry point
 */

 /**
  * Database Connection
  */
 const massive = require('massive');
 
 class DBConnection {
  
    constructor(){
        this.Connect();
    }    
    async Connect() {
        

                massive({
                    host: 'localhost',
                    port: 5432,
                    database: 'Diaspora',
                    user: 'dev',
                    password: 'dev',
                    ssl: false,
                    poolSize: 10
                }).then(instance => {
                    console.log('connection to Database successfull');
                    this.instance= instance;
                }).catch(err => {
                    console.log('problem during connection to databe'+err.message);
                });

    }
    }

    class Singleton {

        constructor() {
            if(!Singleton.instance)
                Singleton.instance = new DBConnection();
            else
                console.log('already Connected to Data Base');
        }
    
        getInstance() {
            return Singleton.instance;
        }
    }
    
    
    
    
    module.exports = Singleton