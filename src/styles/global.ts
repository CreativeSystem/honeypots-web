import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif
  }

  body {
    background-color: ${({ theme }) => theme.colors.magnolia};
    color:  ${({ theme }) => theme.colors.smokyBlack};
    font-size: 16px;
  }

  ::selection {
  color:${({ theme }) => theme.colors.magnolia};
  background: ${({ theme }) => theme.colors.deepSpaceSparkle};
}

  #__next{
    a {
      text-decoration: none;
    }

  }

`
