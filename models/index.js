//Getting our singleton
var orm = require("model");

exports.hello = function (request, response){
    //Getting the Hello model from the orm.
    var User = orm.model("User");
    //Doing complex stuff like getting entries from a many-to-many relationship...
    User.find(1).success(function (user){
        user.getWorlds().success(function (worlds) {
            response.send(worlds)
        });
    });
}
