const config = {};
const JWTsecret = 'devices';
config.JWTsecret = process.env.SECRET || JWTsecret;
config.TokenDurationInHours = 1;

// config.dbURI = "mongodb://localhost:27017/devices",
config.dbURI = "mongodb+srv://Device:Device1234@devicecluster.qnsaq.mongodb.net/Devices?retryWrites=true&w=majority",



    module.exports = config;