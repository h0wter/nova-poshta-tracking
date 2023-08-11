import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { Tracking } from '../../common/enums/trackings/types';
import { getTrackingDetails, resetTrackingHistory } from './actions';
import { getTodayDate } from '../../helpers/dateHelpers';

export interface History {
  date: string;
  trackingNumber: string;
}

interface State {
  isLoading: boolean;
  tracking: Tracking | null;
  trackingsHistory: History[];
}

const initialState: State = {
  isLoading: false,
  tracking: null,
  trackingsHistory: []
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(getTrackingDetails.pending, state => {
      state.isLoading = true;
    })
    .addCase(getTrackingDetails.fulfilled, (state, action) => {
      const payload = action.payload;
      state.tracking = payload;
      const isDuplicate = state.trackingsHistory.findIndex(
        item => item.trackingNumber === payload.Number
      );
      if (isDuplicate === -1) {
        state.trackingsHistory.unshift({
          trackingNumber: payload.Number,
          date: getTodayDate()
        });
      } else {
        state.trackingsHistory.forEach(item => {
          if (item.trackingNumber === payload.Number) {
            item.date = getTodayDate();
          }
        });
      }
    })
    .addCase(getTrackingDetails.rejected, state => {
      state.tracking = null;
    })
    .addCase(resetTrackingHistory.fulfilled, state => {
      state.trackingsHistory = initialState.trackingsHistory;
    })
    .addMatcher(
      isAnyOf(getTrackingDetails.fulfilled, getTrackingDetails.rejected),
      state => {
        state.isLoading = false;
      }
    );
});

export default reducer;
