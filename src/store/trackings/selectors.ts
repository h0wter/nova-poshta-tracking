import { Tracking } from '../../common/enums/trackings/types';
import { RootState } from '../store';
import { History } from './reducer';

export const selectIsLoading = (state: RootState): boolean =>
  state.tracking.isLoading;
export const selectTrackingDetails = (state: RootState): Tracking | null =>
  state.tracking.tracking;
export const selectHistory = (state: RootState): History[] =>
  state.tracking.trackingsHistory;
