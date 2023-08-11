interface Tracking {
  DateCreated: string;
  Status: string;
  StatusCode: string;
  Number: string;

  CityRecipient?: string;
  CitySender?: string;
  WarehouseRecipient?: string;
  ScheduledDeliveryDate?: string;
  RecipientDateTime?: string;
  FactualWeight?: string;
  RecipientFullName?: string;
  SeatsAmount?: string;
  ExpressWaybillPaymentStatus?: string;
  PhoneSender?: string;
  SenderFullNameEW?: string;
  SenderAddress?: string;
}

interface OriginalTrackingResponse extends Tracking {
  [key: string]: unknown;
}

interface CustomError {
  message: string;
}

export type { OriginalTrackingResponse, Tracking, CustomError };
