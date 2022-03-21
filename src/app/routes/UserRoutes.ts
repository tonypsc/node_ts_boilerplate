import Express from 'express';
import { UserPostController } from '../controllers/UserPostController';

const router = Express.Router();
const userPostController = new UserPostController();

router.post('/add', userPostController.run);

export default router;
