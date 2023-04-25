import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'test',
  username: 'test',
  password: 'test',
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
