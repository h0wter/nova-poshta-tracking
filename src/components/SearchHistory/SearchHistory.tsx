import { Box, Divider, Typography, List, ListItemButton } from '@mui/material';

import HistoryIcon from '@mui/icons-material/History';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectHistory } from '../../store/trackings/selectors';

export const SearchHistory: React.FC = () => {
  const history = useAppSelector(selectHistory);
  return (
    <Box color="white">
      <Box
        sx={{
          display: 'flex',
          paddingY: 2,
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
      </Box>
      {history.length > 0 && (
        <List>
          <Divider />
          {history.map(item => (
            <ListItemButton
              divider
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
              key={item.trackingNumber}
            >
              <Typography>{item.trackingNumber}</Typography>
              <Typography>{item.date}</Typography>
            </ListItemButton>
          ))}
        </List>
      )}
      {/* <List>
        <Divider />
        <ListItemButton
          divider
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography>123456789</Typography>
          <Typography>24.05.2023</Typography>
        </ListItemButton>
      </List> */}
    </Box>
  );
};
