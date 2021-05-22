import Logo from "../Logo"
import { Container, Spacer } from "./styles"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Container>
      <Logo size="title.lg" redirectPath="/" />

      <Spacer />
    </Container>
  )
}

export default Header
