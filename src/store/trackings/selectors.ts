import { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.tracking.isLoading;
export const selectTrackingDetails = (state: RootState) =>
  state.tracking.tracking;
export const selectHistory = (state: RootState) =>
  state.tracking.trackingsHistory;
