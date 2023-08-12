import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { getOfficesList, getWarehousesList } from './actions';
import { Office, Warehouse } from '../../common/enums/offices/types';

interface State {
  isOfficesLoading: boolean;
  isWarehousesLoading: boolean;
  officesList: Office[];
  warehouses: Warehouse[];
}

const initialState: State = {
  isOfficesLoading: false,
  isWarehousesLoading: false,
  officesList: [],
  warehouses: []
};

const reducer = createReducer(initialState, builder => {
  builder
    .addCase(getOfficesList.fulfilled, (state, action) => {
      state.officesList = action.payload;
    })
    .addCase(getWarehousesList.fulfilled, (state, action) => {
      state.warehouses = action.payload;
    })
    .addCase(getOfficesList.pending, state => {
      state.isOfficesLoading = true;
    })
    .addCase(getWarehousesList.pending, state => {
      state.isWarehousesLoading = true;
    })
    .addMatcher(
      isAnyOf(getOfficesList.rejected, getOfficesList.fulfilled),
      state => {
        state.isOfficesLoading = false;
      }
    )
    .addMatcher(
      isAnyOf(getWarehousesList.rejected, getWarehousesList.fulfilled),
      state => {
        state.isWarehousesLoading = false;
      }
    );
});

export default reducer;
