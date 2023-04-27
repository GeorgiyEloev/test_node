import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class Passenger extends Model<InferAttributes<Passenger>, InferCreationAttributes<Passenger>> {
  declare id: CreationOptional<number>;

  declare fullName: string;

  declare document: string;

  declare codeDocument: string;

  declare dateBirth: Date;

  declare medEmployee: boolean;

  declare notes: CreationOptional<string>;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Passenger.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    document: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    codeDocument: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    dateBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    medEmployee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: '',
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'passengers',
    sequelize,
  },
);

export default Passenger;
