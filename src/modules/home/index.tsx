import Link from "next/link"

import Header from "@/components/Header"
import Slider from "@/components/Slider"
import Text from "@/components/Text"
import { Button } from "@material-ui/core"
import { AcUnit } from "@material-ui/icons"

import { Container, BodyContainer } from "./styles"

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <BodyContainer>
        <Text size="title.lg">Hello Demo</Text>
        <Link href={"/example/teste_param"}>
          <Button size="large" color="secondary">
            <AcUnit />
            AcUnit
          </Button>
        </Link>
        <Slider />
      </BodyContainer>
    </Container>
  )
}

export default Home
