import { Box, Divider, Typography, List, ListItemButton } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/useStoreHooks';
import { selectHistory } from '../../store/trackings/selectors';
import { useCallback } from 'react';
import {
  getTrackingDetails,
  resetTrackingHistory
} from '../../store/trackings/actions';
import HistoryIcon from '@mui/icons-material/History';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const SearchHistory: React.FC = () => {
  const history = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();

  const handleHistoryItemClick = useCallback(
    (trackingNumber: string) => dispatch(getTrackingDetails(trackingNumber)),
    [dispatch]
  );

  const handleResetHistoryButtonClick = useCallback(
    () => dispatch(resetTrackingHistory()),
    [dispatch]
  );

  return (
    <Box color="white">
      <Box
        sx={{
          display: 'flex',
          paddingTop: 2.5,
          paddingBottom: 2.5,
          alignItems: 'center'
        }}
      >
        <HistoryIcon />
        <Typography
          variant="h6"
          component="h2"
          sx={{
            ml: 1,
            textTransform: 'uppercase',
            alignContent: 'center'
          }}
        >
          Search history
        </Typography>
        {history.length > 0 && (
          <HighlightOffIcon
            onClick={handleResetHistoryButtonClick}
            sx={{ marginLeft: 'auto', cursor: 'pointer' }}
          />
        )}
      </Box>
      {history.length > 0 && (
        <List sx={{ paddingTop: 0 }}>
          <Divider />
          {history.map(item => (
            <ListItemButton
              divider
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
              key={item.trackingNumber}
              onClick={() => handleHistoryItemClick(item.trackingNumber)}
            >
              <Typography>{item.trackingNumber}</Typography>
              <Typography>{item.date}</Typography>
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
};
