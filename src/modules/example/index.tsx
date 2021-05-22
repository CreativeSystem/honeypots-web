/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Header from "@/components/Header"
import Text from "@/components/Text"

import { Container, BodyContainer } from "./styles"

const Example: React.FC = () => {
  const router = useRouter()

  const [id, setId] = useState<string | string[]>("")

  useEffect(() => {
    if (!router.isReady) return

    const { id } = router.query

    setId(id)
  }, [])

  return (
    <Container>
      <Header page="Example" />

      <BodyContainer>
        <Text size="title.lg">{`Parametro: ${id}`}</Text>
      </BodyContainer>
    </Container>
  )
}

export default Example
