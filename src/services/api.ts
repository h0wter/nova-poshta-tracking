import axios from 'axios';

import {
  getCitiesRequestOptions,
  getTrackingRequestOptions,
  getWarehousesRequestOptions
} from '../helpers/apiRequestOptions.helper';

const { VITE_API_URL } = import.meta.env;

axios.defaults.baseURL = VITE_API_URL;

const makeRequest = (options: unknown) => axios.post('', options);

const fetchTrackingDetails = (ttn: string, phone?: string) => {
  return makeRequest(getTrackingRequestOptions(ttn, phone));
};

const fetchCities = (query: string) => {
  return makeRequest(getCitiesRequestOptions(query));
};

const fetchWarehouses = (city: string) => {
  return makeRequest(getWarehousesRequestOptions(city));
};

export { fetchTrackingDetails, fetchCities, fetchWarehouses };
