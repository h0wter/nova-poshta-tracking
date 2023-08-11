import { useCallback, useState } from 'react';
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

const SEARCH_QUERY_VALIDATION_REGEX = /^(59|20)\d{12}$/;
const SEARCH_QUERY_TEXT_ERROR =
  'Невірний номер накладної, повинен бути в форматі "20 1234 5678 9012" або "59 1234 5678 9012".';

export const SearchPackage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchQueryError, setIsSearchQueryError] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const trackingDetails = useAppSelector(selectTrackingDetails);

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

  if (isLoading) return <Loader />;

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <StyledInput
          label="Номер накладної"
          name="Search input"
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
      {trackingDetails && (
        <Paper elevation={16} sx={{ padding: 2, marginTop: 2 }}>
          <Stack spacing={2}>
            <Item elevation={12}>
              <Typography variant="button" color="white">
                Створено: {trackingDetails.DateCreated}.
              </Typography>
            </Item>
            <Item elevation={12}>
              <Typography variant="button" color="white">
                Статус: {trackingDetails.Status}.
              </Typography>
            </Item>
            <Item elevation={12}>
              <Typography variant="button" color="white">
                Місто відправник: {trackingDetails.CitySender}.
              </Typography>
            </Item>
            <Item elevation={12}>
              <Typography variant="button" color="white">
                Місто отримувач: {trackingDetails.CityRecipient}.
              </Typography>
            </Item>
            {trackingDetails.WarehouseRecipient && (
              <Item elevation={12}>
                <Typography variant="button" color="white">
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
