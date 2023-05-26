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
text:{
    type: DataTypes.STRING,
    allowNull: false
},

},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName:'comments',
}

);

module.exports = Comment;