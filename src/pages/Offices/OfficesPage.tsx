import { useCallback, useEffect, useState } from 'react';
import { Autocomplete, Box, Container, Grid, Paper } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks';
import { getOfficesList, getWarehousesList } from '../../store/offices/actions';
import {
  selectIsWarehousesLoading,
  selectOfficesList,
  selectWarehouses
} from '../../store/offices/selectors';
import { StyledInput } from '../../components/common/StyledInput/StyledInput';
import { Office } from '../../common/enums/offices/types';
import { convertToOfficeLabel } from '../../helpers/officeList.helper';
import { Loader } from '../../components/Loader/Loader';
import { Item } from '../../components/SearchTracking/SearchTracking.styled';
import { MouseOverPopover } from '../../components/common/MouseOverPopover/MouseOverPopover';

// If the query will pass regex, then the value was selected from
// the list and there is no need to make a request for a new list
const labelRegex = /^м\.\s.*\sобл\.$/;

const OfficesPage: React.FC = () => {
  const officesList = useAppSelector(selectOfficesList);
  const warehouseList = useAppSelector(selectWarehouses);
  const isWarehousesLoading = useAppSelector(selectIsWarehousesLoading);
  const [query, setQuery] = useState<string | null>('');
  const [listToShow, setListToShow] = useState(CONVERTED_MAIN_OFFICES);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query && query.trim() !== '' && !labelRegex.test(query)) {
        dispatch(getOfficesList(query));
      } else if (open) {
        setListToShow(CONVERTED_MAIN_OFFICES);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [dispatch, open, query]);

  useEffect(() => {
    if (officesList.length === 0) return;
    setListToShow(convertToOfficeLabel(officesList));
  }, [officesList]);

  const handleOptionSelect = useCallback(
    (city: string) => {
      dispatch(getWarehousesList(city));
    },
    [dispatch]
  );

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', py: 2, flexGrow: 1 }}
    >
      <Autocomplete
        id="city-list"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={listToShow}
        getOptionLabel={option => option.label}
        isOptionEqualToValue={(option, value) =>
          option.Description === value.Description
        }
        onChange={(_, newValue: Office | null) => {
          if (newValue) {
            handleOptionSelect(newValue.Description);
          }
        }}
        onInputChange={(_, newInputValue) => setQuery(newInputValue)}
        renderInput={params => (
          <StyledInput {...params} label="Оберіть населенний пункт" />
        )}
      />

      {isWarehousesLoading && <Loader />}

      {warehouseList.length > 0 && (
        <Box mt={2}>
          <Paper>
            <Grid container>
              <Grid item xs={2}>
                <Item sx={{ textAlign: 'center' }}>№ Відділення</Item>
              </Grid>
              <Grid item xs={6.5}>
                <Item sx={{ textAlign: 'center' }}>Адреса</Item>
              </Grid>
              <Grid item xs={2}>
                <Item sx={{ textAlign: 'center' }}>Графік роботи</Item>
              </Grid>
              <Grid item xs={1.5}>
                <Item sx={{ textAlign: 'center' }}>Вага до</Item>
              </Grid>
            </Grid>

            {warehouseList.map(item => (
              <Grid container key={item.Number}>
                <Grid item xs={2} sx={{ height: '100%' }}>
                  <Item sx={{ textAlign: 'center' }}>{item.Number}</Item>
                </Grid>
                <Grid item xs={6.5}>
                  <Item
                    title={item.ShortAddress}
                    sx={{
                      textAlign: 'center',
                      overflow: 'hidden',
                      textOverflow: 'elipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.ShortAddress}
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item
                    sx={{
                      p: 0,
                      height: '100%'
                    }}
                  >
                    <MouseOverPopover schedule={item.Schedule} />
                  </Item>
                </Grid>
                <Grid item xs={1.5}>
                  <Item sx={{ textAlign: 'center' }}>
                    {item.PlaceMaxWeightAllowed}
                  </Item>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Box>
      )}
    </Container>
  );
};

const MAIN_OFFICES: Office[] = [
  {
    Description: 'Київ',
    AreaDescription: 'Київська',
    label: ''
  },
  {
    Description: 'Дніпро',
    AreaDescription: 'Дніпропетровська',
    label: ''
  },
  {
    Description: 'Харків',
    AreaDescription: 'Харківська',
    label: ''
  },
  {
    Description: 'Запоріжжя',
    AreaDescription: 'Запорізька',
    label: ''
  },
  {
    Description: 'Одеса',
    AreaDescription: 'Одеська',
    label: ''
  },
  {
    Description: 'Кривий Ріг',
    AreaDescription: 'Дніпропетровська',
    label: ''
  },
  {
    Description: 'Львів',
    AreaDescription: 'Львівська',
    label: ''
  },
  {
    Description: 'Вінниця',
    AreaDescription: 'Вінницька',
    label: ''
  },
  {
    Description: 'Миколаїв',
    AreaDescription: 'Миколаївська',
    label: ''
  },
  {
    Description: 'Полтава',
    AreaDescription: 'Полтавська',
    label: ''
  }
];

const CONVERTED_MAIN_OFFICES = convertToOfficeLabel(MAIN_OFFICES);

export default OfficesPage;
