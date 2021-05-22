import styled from "styled-components"

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 0 2rem;
  height: 58px;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  position: fixed;
`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`
