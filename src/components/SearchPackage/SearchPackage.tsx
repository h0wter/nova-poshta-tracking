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
import { getTrackingDetails } from '../../services/api';
import { Tracking } from '../../common/types/trackingResponse.types';
import { trackingResponseMapper } from '../../helpers/serverResponseMapper';
import { Item } from './SearchPackage.styled';

const SEARCH_QUERY_VALIDATION_REGEX = /^(59|20)\d{12}$/;
const SEARCH_QUERY_TEXT_ERROR =
  'Невірний номер накладної, повинен бути в форматі "20 1234 5678 9012" або "59 1234 5678 9012".';

export const SearchPackage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchQueryError, setIsSearchQueryError] = useState(false);
  const [trackingDetails, setTrackingDetails] = useState<Tracking | null>(null);

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
      const response = await getTrackingDetails(searchQuery);
      const mappedResponse = trackingResponseMapper(response.data.data[0]);
      setTrackingDetails(mappedResponse);
      console.log(response);
    },
    [searchQuery]
  );

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
          <Stack color="white" spacing={2}>
            <Item elevation={12}>
              <Typography variant="button">
                Статус: {trackingDetails.Status}.
              </Typography>
            </Item>
            <Item elevation={12}>
              <Typography variant="button">
                Місто відправник: {trackingDetails.CitySender}.
              </Typography>
            </Item>
            <Item elevation={12}>
              <Typography variant="button">
                Місто отримувач: {trackingDetails.CityRecipient}.
              </Typography>
            </Item>
            {trackingDetails.WarehouseRecipient && (
              <Item elevation={12}>
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
