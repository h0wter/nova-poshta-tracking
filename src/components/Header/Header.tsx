import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { Box, Toolbar } from '@mui/material';
import { LogoNavLink, StyledLink } from './Header.styled';

type Page = {
  title: string;
  path: string;
};

const pages: Page[] = [
  { title: 'Tracking', path: '/' },
  { title: 'Offices', path: '/offices' }
];

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShareLocationIcon fontSize="large" sx={{ mr: 1, color: 'white' }} />
          <LogoNavLink to="/">
            <Typography
              variant="h5"
              noWrap
              color="white"
              sx={{
                fontFamily: 'roboto',
                fontWeight: 600,
                letterSpacing: '.03rem'
              }}
            >
              Nova Track
            </Typography>
          </LogoNavLink>
          <Box component="ul" gap={2} sx={{ display: 'flex', ml: 'auto' }}>
            {pages.map(({ title, path }) => (
              <li key={title}>
                <StyledLink to={path}>{title}</StyledLink>
              </li>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
