var orm = require("model");
var Seq = orm.Seq();

//Creating our module
module.exports = {
    model:{
        id: Seq.INTEGER,
        name: Seq.STRING,
        password: Seq.STRING,
        party: Seq.STRING
    }
};
