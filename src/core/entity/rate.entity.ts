import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class Rate extends Model<InferAttributes<Rate>, InferCreationAttributes<Rate>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}
