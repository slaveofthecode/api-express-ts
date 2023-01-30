import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Show all users')
})

router.post('/', (_req, res) => {
  res.send('Was created a new user')
})

export default router
