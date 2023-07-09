import express from 'express'
import  {updateUser, deleteUser, getSingleUser, getAllUser} from '../controllers/userController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();


// updateUser
router.put('/:id',verifyUser, updateUser);

//delete user
router.delete('/:id',verifyUser,deleteUser);

//get single user
router.get('/:id',verifyUser ,getSingleUser);

//get all user
router.get('/',verifyAdmin, getAllUser);


export default router;