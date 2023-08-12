import toast from 'react-hot-toast';

import { createAppAsyncThunk } from '../appAsyncThunk';
import { ActionType } from '../../common/enums/trackings/actions';
import { Tracking, CustomError } from '../../common/enums/trackings/types';
import { trackingResponseMapper } from '../../helpers/serverResponseMapper.helper';
import { fetchTrackingDetails } from '../../services/api';

const getTrackingDetails = createAppAsyncThunk<
  Tracking,
  string,
  { rejectValue: CustomError }
>(ActionType.GET_TRACKING_DETAILS, async (ttn, { rejectWithValue }) => {
  try {
    const response = await fetchTrackingDetails(ttn);

    if (response.data.data[0].StatusCode === '3')
      throw { customMessage: 'Номер не знайдено.' };

    return trackingResponseMapper(response.data.data[0]);
  } catch (error) {
    const message =
      'Під час виконання запиту сталася помилка, будь ласка спробуйте ще.';
    const errorMessage =
      error && typeof error === 'object' && 'customMessage' in error
        ? (error.customMessage as string)
        : message;

    toast.error(errorMessage);
    return rejectWithValue({ message: errorMessage });
  }
});

const resetTrackingHistory = createAppAsyncThunk(
  ActionType.RESET_HISTORY,
  () => {}
);

export { getTrackingDetails, resetTrackingHistory };
