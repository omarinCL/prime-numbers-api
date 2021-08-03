import { Request, Response } from 'express';
import responseManager from '../../common/responseManager';
import { getPrimeNumbersService } from '../services/primeNumbersService';

export const getPrimeNumbers = async (req: Request, res: Response) => {
  try {
    const inputNumber = Number(req.params.inputNumber);
    responseManager(res, getPrimeNumbersService(inputNumber));
  } catch (error) {
    responseManager(res, {
      error: error.message,
    }, 500);
  }
};
