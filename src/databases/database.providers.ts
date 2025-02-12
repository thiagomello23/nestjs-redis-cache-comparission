import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: process.env.DATABASE_DRIVE as any,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: ["dist/databases/migrations/*.js"],
    synchronize: false,
});

export const databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = AppDataSource
      
            return dataSource.initialize();
          },
    }
]