import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    db: { 
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST
    },
    port: process.env.PORT
}