import { Office } from '../common/enums/offices/types';

export const convertToOfficeLabel = (data: Office[]): Office[] => {
  return data.map(office => ({
    ...office,
    label: `м. ${office.Description}, ${office.AreaDescription} обл.`
  }));
};
