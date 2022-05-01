import { toast } from 'react-toastify';
import request, { AxiosError } from 'axios';
import { HttpCode } from '../utils/const';

export const handleError = (error: AxiosError): void => {
  if (!request.isAxiosError(error)) {
    throw new Error(`${error}`);
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info('400');
        break;
      case HttpCode.Unauthorized:
        toast.info('401');
        break;
      case HttpCode.NotFound:
        toast.error('404');
        break;
      default:
        toast.error(
          'Ошибка сервера или неизвестная ошибка. Попробуйте ещё раз!',
        );
    }
  }
};
