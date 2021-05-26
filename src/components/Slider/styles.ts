import styled from "styled-components"

export const Item = styled.div`
  background: green;
  flex: 0 0 19.7%;
  text-align: center;
  margin: 0 2px;
  height: 150px;
  transition: transform 300ms ease 100ms;

  &&&:hover {
    transform: scale(1.5);
  }

  &&&:hover ~ * {
    transform: translateX(25%);
  }
`

export const Container = styled.div`
  display: flex;
  padding: 0 55px;
  :hover ${Item} {
    transform: translateX(-25%);
  }
`

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  .button-wrapper {
    position: absolute;
    width: 55px;
    height: 100%;
    top: 0;
    box-sizing: border-box;
  }
  .button {
    display: block;
    background: rgb(0, 0, 0, 0.5);
    border: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;
    :hover {
      opacity: 0.5;
    }
  }
  .back {
    left: 0;
  }
  .forward {
    right: 0;
  }
`
