import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class Rate extends Model<InferAttributes<Rate>, InferCreationAttributes<Rate>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Rate.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'rates',
    sequelize,
  },
);

export default Rate;
