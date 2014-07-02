module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    party: DataTypes.STRING
  }
  // , {
    // classMethods: {
    //   associate: function(models) {
    //     User.hasMany(models.Task)
    //   }
    // }
  })

  return User
}


// var User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   password: Sequelize.STRING,
//   party: Sequelize.STRING
// }), {
//   tableName: 'user_table',
//   timestamps: true
// })
