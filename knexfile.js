const homeConnString = {
  host: '192.168.2.211',
  user: 'db_access',
  password: 'freedom',
  database: 'appt-booking-app',
  port: 5432

}
const localConnString = 'postgres://db_access:freedom@localhost/appt-booking-app'
let connectionString = process.platform === 'win32' ? 'postgres://db_access:freedom@localhost/appt-booking-app': 'postgres://localhost/appt-booking-app'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: homeConnString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  
  //'postgres://db_access:freedom@192.168.2.211/appt-booking-app'