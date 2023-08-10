import { Box, Container } from '@mui/material';
import { SearchHistory } from '../../components/SearchHistory/SearchHistory';
import { SearchPackage } from '../../components/SearchPackage/SearchPackage';

const MainPage = () => {
  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        flexGrow: 1,
        display: 'grid',
        gridTemplateColumns: '300px 1fr'
      }}
    >
      <Box
        component="aside"
        sx={{
          flex: '0 0 300px'
        }}
      >
        <SearchHistory />
      </Box>
      <Box
        component="section"
        padding={2}
        sx={{
          flex: '1'
        }}
      >
        <SearchPackage />
      </Box>
    </Container>
  );
};

export default MainPage;
