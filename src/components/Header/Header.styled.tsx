import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  padding: 6px 8px;
  color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  border-radius: 6px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;
