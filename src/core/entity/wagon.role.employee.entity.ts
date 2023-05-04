import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';

class WagonRoleEmployee extends Model<InferAttributes<WagonRoleEmployee>, InferCreationAttributes<WagonRoleEmployee>> {
  declare id: CreationOptional<number>;

  declare wagonId: number;

  declare roleEmployeeId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

WagonRoleEmployee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    wagonId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'wagons',
        key: 'id',
      },
    },
    roleEmployeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: 'role_employees',
        key: 'id',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'wagon_role_employee',
    sequelize,
  },
);

export default WagonRoleEmployee;
