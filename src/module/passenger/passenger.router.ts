import { Router } from 'express';

import { PassengerController } from './passenger.controller';

const router: Router = Router();

const passengerController = new PassengerController();

router.get('/passenger/:id', passengerController.getOneController);
router.get('/passenger/all', passengerController.getAllController);
router.put('/passenger/:id', passengerController.updateController);

export default router;
