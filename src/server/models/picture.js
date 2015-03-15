'use strict';

export default (sequelize, DataTypes) => sequelize.define('Picture', {
  title: DataTypes.STRING,
  type: DataTypes.STRING,
  base64: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
});
