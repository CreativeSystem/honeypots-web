import styled from "styled-components";

import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  InputBase,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

export const Container = styled.div`
  position: relative;
  flex-grow: 1;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
  z-index: 3;
  background-color: ${(props) => props.theme.palette.background.main};
  height: 100vh;
`;

export const StyledMenu = styled(Menu)`
  margin-top: 4px;
  .MuiMenu-paper {
    background-color: ${(props) => fade(props.theme.palette.primary.main, 0.9)};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text.main};
  text-align: center;
`;

export const MenuIcon = styled.div`
  height: fit-content;
  width: fit-content;
  margin-right: 10px;
  color: ${(props) => props.theme.palette.text.main};
`;

export const MenuDivider = styled.div`
  height: 2px;
  background-color: ${(props) => props.theme.palette.text.main};
`;

export const OptionsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 20px;
`;

export const Search = styled.div`
  display: flex;
  position: relative;
  border-radius: 5px;
  color: #333333;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.palette.text.main};
  background-color: ${(props) =>
    fade(
      props.theme.palette.background.main,
      props.theme.name === "lightTheme" ? 0.15 : 1
    )};
  margin-left: 0;
  &:hover {
    background-color: ${(props) =>
      fade(
        props.theme.palette.background.main,
        props.theme.name === "lightTheme" ? 0.25 : 0.5
      )};
  }
`;

export const SearchIconContainer = styled.div`
  color: ${(props) => props.theme.palette.text.main};
  padding: 0px 2px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled(InputBase)`
  color: ${(props) => props.theme.palette.text.main};
  padding-top: 4px;
  padding-left: 40px;
  width: 100%;
`;

interface optionProps {
  isActive?: boolean;
}
export const AppBarOption = styled(Link)<optionProps>`
  font-size: 16px;
  margin-right: 10px;
  font-weight: ${(props) => (props.isActive ? 700 : 400)};
  color: ${(props) => props.theme.palette.text.main};
  &:hover {
    color: ${(props) =>
      props.isActive
        ? props.theme.palette.text.main
        : props.theme.palette.text.accent};
    text-decoration: none;
    cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  }
`;

export const StyledAppBar = styled(AppBar)`
  background-color: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0px 0px 0px;
`;

export const StyledToolBar = styled(Toolbar)`
  background-color: inherit;
`;

export const Divider = styled.div`
  flex-grow: 1;
`;

export const AppBarIcon = styled(IconButton)`
  color: ${(props) => props.theme.palette.text.main};
  font-weight: bold;
  margin-left: 5px;
`;
