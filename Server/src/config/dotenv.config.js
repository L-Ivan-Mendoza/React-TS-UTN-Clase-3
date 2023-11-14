import dotenv from "dotenv"

dotenv.config()

export const settingsDotEnvDb = () => {
    return {
        port: process.env.PORT,
        db: {
            localhost: process.env.DB_LOCALHOST,
        }
    }
}