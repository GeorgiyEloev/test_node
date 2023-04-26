import { Router } from 'express';

import { PassengerController } from './passenger.controller';
import { notesValidation } from './validations/updateNotes.validatoin';

const router: Router = Router();

const passengerController = new PassengerController();

router.get('/passenger/all', passengerController.getAllController);
router.get('/passenger/:id', passengerController.getOneController);
router.put('/passenger/:id', [notesValidation], passengerController.updateController);

export default router;
