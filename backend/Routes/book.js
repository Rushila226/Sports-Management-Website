import express from 'express'
import {book} from '../Controllers/bookController.js'
const router=express.Router()
router.post('/bookvenue',book)

export default router;