'use strict';
module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('Result', {
    status: {
      type: DataTypes.ENUM,
      values: [
        'queued',
        'progress',
        'success',
        'failure'
      ],
      defaultValue: 'queued'
    },
    findings: {
      type: DataTypes.JSONB,
      allowNull: {
        args: false,
        msg: 'findings are empty'
      }
    },
    repositoryName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'repository name is empty'
      }
    },
    queuedAt: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'queuedAt is empty'
      }
    },
    scanningAt: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'scanningAt is empty'
      }
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: {
        args: false,
        msg: 'finishedAt is empty'
      }
    }
  }, {});

  Result.associate = function(models) {
  };

  return Result;
};
