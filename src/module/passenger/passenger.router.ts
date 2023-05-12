import { Router } from 'express';

import validate from '../../core/utils/validate.middleware';
import { PassengerController } from './passenger.controller';
import { notesValidation } from './validations/updateNotes.validation';
import { protectRouter } from '../../core/utils/auth.middleware';

const router: Router = Router();

const passengerController = new PassengerController();

router.get('/passenger/all', [protectRouter], passengerController.getAllController);
router.get('/passenger/:id', [protectRouter], passengerController.getOneController);
router.put('/passenger/:id', [validate(notesValidation)], passengerController.updateController);

export default router;
