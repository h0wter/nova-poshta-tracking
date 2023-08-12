const { VITE_API_KEY } = import.meta.env;

const getTrackingRequestOptions = (ttn: string, phone?: string) => ({
  apiKey: VITE_API_KEY,
  modelName: 'TrackingDocument',
  calledMethod: 'getStatusDocuments',
  methodProperties: {
    'Documents': [{ 'DocumentNumber': ttn, 'Phone': phone }]
  }
});

const getCitiesRequestOptions = (query: string) => ({
  apiKey: VITE_API_KEY,
  modelName: 'Address',
  calledMethod: 'getCities',
  methodProperties: {
    Page: 1,
    FindByString: query,
    Limit: 20
  }
});

const getWarehousesRequestOptions = (city: string) => ({
  apiKey: VITE_API_KEY,
  modelName: 'Address',
  calledMethod: 'getWarehouses',
  methodProperties: {
    CityName: city,
    Page: 1,
    Limit: 50,
    Language: 'UA'
  }
});

export {
  getTrackingRequestOptions,
  getCitiesRequestOptions,
  getWarehousesRequestOptions
};
