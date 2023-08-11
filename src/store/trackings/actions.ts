import { ActionType } from '../../common/enums/trackings/actions';
import { Tracking, CustomError } from '../../common/enums/trackings/types';
import { trackingResponseMapper } from '../../helpers/serverResponseMapper';
import { fetchTrackingDetails } from '../../services/api';
import { createAppAsyncThunk } from '../appAsyncThunk';

const getTrackingDetails = createAppAsyncThunk<
  Tracking,
  string,
  { rejectValue: CustomError }
>(ActionType.GET_TRACKING_DETAILS, async (ttn, { rejectWithValue }) => {
  try {
    const response = await fetchTrackingDetails(ttn);
    return trackingResponseMapper(response.data.data[0]);
  } catch {
    const message =
      'An error was received during the request, please try again.';
    return rejectWithValue({ message });
  }
});

export { getTrackingDetails };
