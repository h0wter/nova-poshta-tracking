import { Office, Warehouse } from '../common/enums/offices/types';
import {
  OriginalTrackingResponse,
  Tracking
} from '../common/enums/trackings/types';

const trackingResponseMapper = (data: OriginalTrackingResponse): Tracking => ({
  Number: data.Number,
  CityRecipient: data.CityRecipient,
  CitySender: data.CitySender,
  StatusCode: data.StatusCode,
  Status: data.Status,
  DateCreated: data.DateCreated,
  ScheduledDeliveryDate: data.ScheduledDeliveryDate,
  RecipientDateTime: data.RecipientDateTime,
  RecipientFullName: data.RecipientFullName,
  FactualWeight: data.FactualWeight,
  SeatsAmount: data.SeatsAmount,
  ExpressWaybillPaymentStatus: data.ExpressWaybillPaymentStatus,
  PhoneSender: data.PhoneSender,
  SenderFullNameEW: data.SenderFullNameEW,
  SenderAddress: data.SenderAddress,
  WarehouseRecipient: data.WarehouseRecipient
});

const officesListResponseMapper = (data: Office[]): Office[] => {
  return data.map(item => ({
    AreaDescription: item.AreaDescription,
    CityID: item.CityID,
    Description: item.Description,
    Ref: item.Ref,
    label: ''
  }));
};

const warehousesResponseMapper = (data: Warehouse[]): Warehouse[] => {
  return data.map(item => ({
    Number: item.Number,
    ShortAddress: item.ShortAddress,
    Schedule: item.Schedule,
    PlaceMaxWeightAllowed: item.PlaceMaxWeightAllowed
  }));
};

export {
  trackingResponseMapper,
  officesListResponseMapper,
  warehousesResponseMapper
};
