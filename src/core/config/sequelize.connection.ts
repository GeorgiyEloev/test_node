import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import config from '../../../config/config';

dotenv.config();

const sequelize = new Sequelize(config[`${process.env.BUILD_TYPE}`]);

export default sequelize;
