import toast from 'react-hot-toast';

import { createAppAsyncThunk } from '../appAsyncThunk';
import { ActionType } from '../../common/enums/offices/actions';
import { fetchCities, fetchWarehouses } from '../../services/api';
import {
  Office,
  CustomError,
  Warehouse
} from '../../common/enums/offices/types';
import {
  officesListResponseMapper,
  warehousesResponseMapper
} from '../../helpers/serverResponseMapper.helper';

const getOfficesList = createAppAsyncThunk<
  Office[],
  string,
  { rejectValue: CustomError }
>(ActionType.GET_OFFICES_LIST, async (query, { rejectWithValue }) => {
  try {
    const response = await fetchCities(query);

    if (response.data.data.length === 0)
      throw { customMessage: 'Населений пункт не знайдено.' };

    return officesListResponseMapper(response.data.data);
  } catch (error) {
    const message =
      'Під час виконання запиту сталася помилка, будь ласка спробуйте ще.';
    const errorMessage =
      error && typeof error === 'object' && 'customMessage' in error
        ? (error.customMessage as string)
        : message;

    toast.remove();
    toast.error(errorMessage);
    return rejectWithValue({ message: errorMessage });
  }
});

const getWarehousesList = createAppAsyncThunk<
  Warehouse[],
  string,
  { rejectValue: CustomError }
>(ActionType.GET_WAREHOUSES_LIST, async (city: string, { rejectWithValue }) => {
  try {
    const response = await fetchWarehouses(city);
    return warehousesResponseMapper(response.data.data);
  } catch (error) {
    return rejectWithValue({
      message:
        'Під час пошуку відділень сталась помилка, будь ласка спробуйте ще.'
    });
  }
});

export { getOfficesList, getWarehousesList };
