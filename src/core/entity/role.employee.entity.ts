import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.connection';
import { RoleEnum } from '../enum/role.enum';
import Employee from './employee.entity';

class RoleEmployee extends Model<InferAttributes<RoleEmployee>, InferCreationAttributes<RoleEmployee>> {
  declare id: CreationOptional<number>;

  declare role: RoleEnum;

  declare employeeId: number;

  declare createdAt: CreationOptional<Date>;

  declare updatedAt: CreationOptional<Date>;
}

RoleEmployee.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: [RoleEnum.CONDUCTOR, RoleEnum.LMT],
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Employee,
        key: 'id',
      },
      onDelete: 'CASCADE',
      unique: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'role_employees',
    sequelize,
  },
);

export default RoleEmployee;
