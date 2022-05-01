import api from './api/api';
import http from './http/http';
import order from './order/order';

const enums = {
  ...api,
  ...http,
  ...order,
};

export default enums;
