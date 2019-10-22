const homeConnString = 'postgres://db_access:freedom@192.168.2.211/appt-booking-app'
const localConnString = 'postgres://db_access:freedom@localhost/appt-booking-app'
let connectionString = process.platform === `win32' ? ${homeConnString} : 'postgres://localhost/appt-booking-app`
  
  module.exports = {
    development: {
        client: 'pg',
        connection: connectionString,
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
  