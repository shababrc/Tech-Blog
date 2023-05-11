const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{
    // additional methods if needed
}
Comment.init(
    {
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
title:{
        type: DataTypes.STRING,
        allowNull: false
},
text:{
    type: DataTypes.STRING,
    allowNull: false
},
fromUser: {
    type: DataTypes.BOOLEAN,
    DEFAULT: false,
},
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'comments',
}

);

module.exports = Comment;