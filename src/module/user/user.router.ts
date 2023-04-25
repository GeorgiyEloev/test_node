import { Router } from 'express';

import { UserController } from './user.controller';

const router: Router = Router();

const userController = new UserController();

router.post('/user/', userController.createController);
router.get('/user/:id', userController.readController);
router.put('/user/:id', userController.updateController);
router.delete('/user/:id', userController.deleteController);

export default router;
