import { Router } from 'express';

import { createController, deleteController, readController, updateController } from './user.controller';

const router: Router = Router();

router.post('/user/', createController);
router.get('/user/:id', readController);
router.put('/user/:id', updateController);
router.delete('/user/:id', deleteController);

export default router;
