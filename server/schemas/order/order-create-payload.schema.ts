import Joi from 'joi';
import { OrderKey } from '../../common/enums/order/order-key.enum';
import { OrderValidationRule } from '../../common/enums/order/order-validation-rule.enum';

const orderCreatePayload = Joi.object({
  [OrderKey.NAME]: Joi.string().required(),
  [OrderKey.PEOPLE_COUNT]: Joi.number().positive().required(),
  [OrderKey.PHONE]: Joi.string()
    .length(OrderValidationRule.PHONE_MAX_LENGTH)
    .pattern(/^[0-9]+$/)
    .required(),
  [OrderKey.IS_LEGAL]: Joi.bool().required(),
});

export default orderCreatePayload;
