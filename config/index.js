const config = {};
const JWTsecret = 'devices';
config.JWTsecret = process.env.SECRET || JWTsecret;
config.TokenDurationInHours = 1;

config.dbURI = "mongodb://localhost:27017/devices",



    module.exports = config;