import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';
import Country from './country.entity';

class Station extends Model<InferAttributes<Station>, InferCreationAttributes<Station>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare timeZone: string;

  declare address: string;

  declare countryId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

Station.init(
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
    timeZone: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Country,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'stations',
    sequelize,
  },
);

export default Station;
