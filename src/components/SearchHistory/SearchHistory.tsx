import { Box, Divider, Typography, List, ListItemButton } from '@mui/material';

import HistoryIcon from '@mui/icons-material/History';

export const SearchHistory: React.FC = () => {
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
      <List>
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
      </List>
    </Box>
  );
};
