import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { Box, Toolbar } from "@mui/material";
import { StyledLink } from "./Header.styled";

type Page = {
  title: string;
  path: string;
};

const pages: Page[] = [
  { title: "Tracking", path: "/" },
  { title: "Offices", path: "/offices" },
];

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShareLocationIcon
            fontSize="large"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "roboto",
              fontWeight: 600,
              letterSpacing: ".03rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Nova Track
          </Typography>
          <Box component="ul" gap={2} sx={{ display: "flex", ml: "auto" }}>
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
