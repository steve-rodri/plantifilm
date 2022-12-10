import { Flex, MediaQuery, Stack, Title } from "@mantine/core"
import { Link } from "react-router-dom"

import { Search } from "./Search"

export const Header = () => {
  return (
    <MediaQuery
      smallerThan="xs"
      styles={{
        flexDirection: "column",
        alignItems: "space-between",
        justify: "center",
        height: "165px"
      }}
    >
      <Flex
        w="full"
        py={20}
        align="center"
        justify="space-between"
        sx={{ borderBottom: "2px solid lightgray" }}
      >
        <HeaderTitle />
        <Search />
      </Flex>
    </MediaQuery>
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
