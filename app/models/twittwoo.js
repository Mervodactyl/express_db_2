Example model


module.exports = function (sequelize, DataTypes) {

  var TwitTwoo = sequelize.define('TwitTwoo', {
    TwitTwoo: DataTypes.TEXT,
    url: DataTypes.STRING,
  });

  return TwitTwoo;
};

