import { Application } from 'express-serve-static-core';

import orderCreatePayload from '../../schemas/schemas';
import ApiPath from '../../common/enums/api/api';
import { HttpCode } from '../../common/enums/http/http-code.enum';
import validateSchema from '../../middlewares/middlewares';

const initOrdersRouter = (server: Application) => {
  server.post(
    ApiPath.CONTACTS,
    validateSchema(orderCreatePayload),
    (_req, res) => {
      return res.status(HttpCode.CREATED).json(HttpCode.CREATED);
    },
  );
};

export default initOrdersRouter;
