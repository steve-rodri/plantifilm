import { Flex, Stack, Title } from "@mantine/core"
import { Link } from "react-router-dom"

import { Search } from "./Search"

export const Header = (props: Props) => {
  return (
    <Flex w="full" h="100px" align="center" justify="space-between">
      <HeaderTitle />
      <Search />
    </Flex>
  )
}

const HeaderTitle = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
      <Stack spacing={1} align="center">
        <Title order={2}>WOOKIE</Title>
        <Title order={2}>MOVIES</Title>
      </Stack>
    </Link>
  )
}
