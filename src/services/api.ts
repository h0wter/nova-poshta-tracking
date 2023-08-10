import axios from 'axios';

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

axios.defaults.baseURL = VITE_API_URL;

const getTrackingRequestOptions = (ttn: string, phone?: string) => ({
  apiKey: VITE_API_KEY,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    'Documents': [{ 'DocumentNumber': ttn, 'Phone': phone }]
  }
});

const getTrackingDetails = (ttn: string, phone?: string) => {
  const options = getTrackingRequestOptions(ttn, phone);
  return axios.post('', options);
};

export { getTrackingDetails };
