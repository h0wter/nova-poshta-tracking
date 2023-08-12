interface Office {
  AreaDescription: string;
  Description: string;
  label: string;
  CityID?: string;
  Ref?: string;
}

interface OriginalOfficeResponse extends Office {
  data: {
    data: Office[];
  };
  [key: string]: unknown;
}

interface Schedule {
  Friday: string;
  Monday: string;
  Saturday: string;
  Sunday: string;
  Thursday: string;
  Tuesday: string;
  Wednesday: string;
}

interface Warehouse {
  Number: string;
  ShortAddress: string;
  Schedule: Schedule;
  PlaceMaxWeightAllowed: string;
}

interface OriginalWarehouseResponse extends Warehouse {
  data: {
    data: Warehouse[];
    info: {
      totalCount: number;
    };
  };
  [key: string]: unknown;
}

interface CustomError {
  message: string;
}

export type {
  OriginalOfficeResponse,
  Office,
  CustomError,
  OriginalWarehouseResponse,
  Warehouse,
  Schedule
};
