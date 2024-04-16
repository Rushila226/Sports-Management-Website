import express from 'express'
import {venue} from '../Controllers/venueController.js'
const router=express.Router()
router.post('/bookingform',venue)

export default router;