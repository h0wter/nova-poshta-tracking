import { Office, Warehouse } from '../../common/enums/offices/types';
import { RootState } from '../store';

export const selectIsOfficeLoading = (state: RootState): boolean =>
  state.offices.isOfficesLoading;
export const selectIsWarehousesLoading = (state: RootState): boolean =>
  state.offices.isWarehousesLoading;
export const selectOfficesList = (state: RootState): Office[] | [] =>
  state.offices.officesList;
export const selectWarehouses = (state: RootState): Warehouse[] | [] =>
  state.offices.warehouses;
