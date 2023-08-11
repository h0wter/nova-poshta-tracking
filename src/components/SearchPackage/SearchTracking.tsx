import { useCallback, useEffect, useState } from 'react';
import {
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInput } from '../common/StyledInput/StyledInput';
import { Item } from './SearchTracking.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { getTrackingDetails } from '../../store/trackings/actions';
import {
  selectIsLoading,
  selectTrackingDetails
} from '../../store/trackings/selectors';
import { Loader } from '../Loader/Loader';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PlaceSharpIcon from '@mui/icons-material/PlaceSharp';

const SEARCH_QUERY_VALIDATION_REGEX = /^(59|20)\d{12}$/;
const SEARCH_QUERY_TEXT_ERROR =
  'Невірний номер накладної, повинен бути в форматі "20 1234 5678 9012" або "59 1234 5678 9012".';

export const SearchPackage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchQueryError, setIsSearchQueryError] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const trackingDetails = useAppSelector(selectTrackingDetails);

  useEffect(() => {
    setSearchQuery(trackingDetails?.Number || '');
  }, [trackingDetails]);

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!searchQuery) return;

      const trimmedQuery = searchQuery.replace(/\s/g, '');

      if (!SEARCH_QUERY_VALIDATION_REGEX.test(trimmedQuery)) {
        setIsSearchQueryError(true);
        return;
      }
      setIsSearchQueryError(false);
      dispatch(getTrackingDetails(searchQuery));
    },
    [dispatch, searchQuery]
  );

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <StyledInput
          label="Номер накладної"
          name="Search input"
          value={searchQuery}
          fullWidth
          error={isSearchQueryError}
          helperText={isSearchQueryError && SEARCH_QUERY_TEXT_ERROR}
          onChange={e => setSearchQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleFormSubmit} edge="end">
                  <SearchIcon color={isSearchQueryError ? 'error' : 'info'} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
      {isLoading && <Loader />}
      {trackingDetails && (
        <Paper elevation={16} sx={{ padding: 2, marginTop: 2 }}>
          <Stack spacing={2}>
            <Item elevation={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <DateRangeIcon sx={{ mr: 1 }} />
              <Typography variant="button">
                Створено: {trackingDetails.DateCreated}.
              </Typography>
            </Item>
            <Item elevation={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalShippingSharpIcon sx={{ mr: 1 }} />
              <Typography variant="button">
                Статус: {trackingDetails.Status}.
              </Typography>
            </Item>
            <Item elevation={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationCityIcon sx={{ mr: 1 }} />
              <Typography variant="button">
                Місто відправник: {trackingDetails.CitySender}.
              </Typography>
            </Item>
            <Item elevation={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationCityIcon sx={{ mr: 1 }} />
              <Typography variant="button">
                Місто отримувач: {trackingDetails.CityRecipient}.
              </Typography>
            </Item>
            {trackingDetails.WarehouseRecipient && (
              <Item
                elevation={6}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <PlaceSharpIcon sx={{ mr: 1 }} />
                <Typography variant="button">
                  Відділення: {trackingDetails.WarehouseRecipient}.
                </Typography>
              </Item>
            )}
          </Stack>
        </Paper>
      )}
    </>
  );
};
