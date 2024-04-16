import express from "express"
import {getuser,getAlluser} from "../Controllers/userController.js"
const router=express.Router();
router.get(('/:id,getuser'))
router.get(('/,getAlluser'))



export default router
