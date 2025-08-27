import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()


export const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: Number(process.env.PGPORT),
})



pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );
`).catch(err => console.error('Erro ao criar tabela users:', err))

