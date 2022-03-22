import Express from 'express';
import { UserPostController } from '../controllers/UserPostController';
import { UserGetAllController } from '../controllers/UserGetAllController';

const router = Express.Router();
const userPostController = new UserPostController();

router.post('/', userPostController.run);
router.get('/', UserGetAllController.run);

export default router;
