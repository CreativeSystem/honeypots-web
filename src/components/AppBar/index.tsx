import React, { useState } from "react";

import {
  Container,
  StyledAppBar,
  StyledToolBar,
  AppBarOption,
  OptionsContainer,
  AppBarIcon,
  Divider,
  SearchInput,
  Search,
  SearchIconContainer,
  StyledMenu,
  StyledMenuItem,
  MenuIcon,
  MenuDivider,
} from "./styles";
import HoneyPotsLogo from "../../assets/svg/HoneyPotsLogo";
import {
  Create,
  Notifications,
  AccountCircle,
  Search as SearchIcon,
  MenuBook,
  Favorite,
  Brightness4,
  Brightness5,
  AccountBox,
  Help,
  ExitToApp,
} from "@material-ui/icons";
import useToggleTheme from "../../hooks/useToggleTheme";

type options = "inicio" | "salgados" | "doces" | "bebidas";
interface props {
  hasOptions?: boolean;
  currentOption?: options;
  hasSearch?: boolean;
}

const AppBar: React.FC<props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { changeTheme, theme } = useToggleTheme();

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  function handleChangeTheme() {
    changeTheme();
    handleAvatarClose();
  }

  return (
    <Container>
      <StyledAppBar position="relative">
        <StyledToolBar>
          <HoneyPotsLogo color={theme.palette.text.main} />
          {props.hasOptions ? (
            <OptionsContainer>
              <AppBarOption isActive={props.currentOption === "inicio"}>
                Inicio
              </AppBarOption>
              <AppBarOption isActive={props.currentOption === "salgados"}>
                Salgados
              </AppBarOption>
              <AppBarOption isActive={props.currentOption === "doces"}>
                Doces
              </AppBarOption>
              <AppBarOption isActive={props.currentOption === "bebidas"}>
                Bebidas
              </AppBarOption>
            </OptionsContainer>
          ) : (
            <></>
          )}
          <Divider />
          {props.hasSearch ? (
            <Search>
              <SearchIconContainer>
                <SearchIcon fontSize="large" />
              </SearchIconContainer>
              <SearchInput
                placeholder="Receitas e Ingredientes"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          ) : (
            <></>
          )}
          <AppBarIcon>
            <Create fontSize="large" />
          </AppBarIcon>
          <AppBarIcon>
            <Notifications fontSize="large" />
          </AppBarIcon>
          <AppBarIcon onClick={handleAvatarClick}>
            <AccountCircle fontSize="large" />
          </AppBarIcon>
          <StyledMenu
            id="appbar-menu"
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleAvatarClose}
          >
            <StyledMenuItem onClick={handleAvatarClose}>
              <MenuIcon>
                <MenuBook />
              </MenuIcon>
              Minhas Receitas
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAvatarClose}>
              <MenuIcon>
                <Favorite />
              </MenuIcon>
              Receitas Curtidas
            </StyledMenuItem>
            <StyledMenuItem onClick={handleChangeTheme}>
              <MenuIcon>
                {theme.name === "lightTheme" ? (
                  <Brightness5 />
                ) : (
                  <Brightness4 />
                )}
              </MenuIcon>
              Tema
            </StyledMenuItem>
            <MenuDivider />
            <StyledMenuItem onClick={handleAvatarClose}>
              <MenuIcon>
                <AccountBox />
              </MenuIcon>
              Configurações
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAvatarClose}>
              <MenuIcon>
                <Help />
              </MenuIcon>
              Ajuda
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAvatarClose}>
              <MenuIcon>
                <ExitToApp />
              </MenuIcon>
              Logout
            </StyledMenuItem>
          </StyledMenu>
        </StyledToolBar>
      </StyledAppBar>
    </Container>
  );
};

export default AppBar;
