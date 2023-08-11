import {
  OriginalTrackingResponse,
  Tracking
} from '../common/enums/trackings/types';

export const trackingResponseMapper = (
  data: OriginalTrackingResponse
): Tracking => ({
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
