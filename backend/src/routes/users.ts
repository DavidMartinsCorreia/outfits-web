import express from 'express'
import { pool } from '../db'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/signup', async (req, res) => {
  const { name, password } = req.body

  if (!name || !password) {
    return res.status(400).json({ error: 'Nome e senha obrigatórios' })
  }

  if (password.length < 5) {
    return res.status(400).json({ error: 'Senha deve ter no mínimo 5 caracteres' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
      'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING id',
      [name, hashedPassword]
    )

    return res.status(201).json({ id: result.rows[0].id, name })
  } catch (err) {
    if ((err as any).code === '23505') {
      return res.status(409).json({ error: 'Esse nome já está registado' })
    }

    return res.status(500).json({ error: 'Erro interno no servidor' })
  }
})

export default router
