"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('pictures', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
      title: {
        type: DataTypes.STRING
      },
      base64: {
        type: DataTypes.TEXT
      },
      type: {
        type: DataTypes.STRING
      }
    });
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('pictures');
    done();
  }
};
