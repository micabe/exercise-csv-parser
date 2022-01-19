import express from 'express'
import upload from './upload'

const router = express.Router()

router.post('/uploads', upload)

export default router
