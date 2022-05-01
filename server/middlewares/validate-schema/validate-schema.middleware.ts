import { Request, Response, NextFunction } from 'express';

import { AnySchema } from 'joi';
import { HttpCode } from '../../common/enums/http/http-code.enum';

interface Error {
  message: string;
}

const validateSchema =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    try {
      await schema.validateAsync(body, {
        abortEarly: false,
        convert: false,
      });
    } catch (err) {
      const { details } = err;

      return res.status(HttpCode.BAD_REQUEST).send({
        messages: details.map((err: Error) => err.message),
      });
    }

    return next();
  };

export default validateSchema;
