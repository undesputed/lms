export interface DatabaseConfig {
  HOST: string | undefined;
  USER: string | undefined;
  PASSWORD: string | undefined;
  DB: string | undefined;
  PORT: number | string | undefined;
}

export const databaseConfig: DatabaseConfig = {
  HOST: process.env.DB_HOST ? process.env.DB_HOST : 'ec2-13-229-122-211.ap-southeast-1.compute.amazonaws.com',
  USER: process.env.DB_USERNAME ? process.env.DB_USERNAME : 'root',
  PASSWORD: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '',
  DB: process.env.DB_NAME ? process.env.DB_NAME : 'ec_care',
  PORT: process.env.DB_PORT ? process.env.DB_PORT : 3306,
};
