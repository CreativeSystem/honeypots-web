import { useState } from "react"

import { ArrowRight, ArrowLeft } from "@material-ui/icons"

import { Wrapper, Container, Item } from "./styles"

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = 10

  return (
    <Wrapper>
      <Container>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Container>
      {currentPage > 0 && (
        <div className="button-wrapper back">
          <button className="button back">
            <ArrowLeft />
          </button>
        </div>
      )}
      {currentPage !== totalPages && (
        <div className="button-wrapper forward">
          <button className="button forward">
            <ArrowRight />
          </button>
        </div>
      )}
    </Wrapper>
  )
}

export default Slider
