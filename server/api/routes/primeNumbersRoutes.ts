import { Router } from 'express';
import { getPrimeNumbers } from '../controllers/primeNumbersController';

const router = Router();

router.get('/prime-numbers/:inputNumber', getPrimeNumbers);

export default router;
