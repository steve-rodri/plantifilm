import { Flex, Stack, Title } from "@mantine/core"

import { Search } from "./Search"

export const Header = () => {
  return (
    <Flex w="full" h="100px" align="center" justify="space-between">
      <HeaderTitle />
      <Search />
    </Flex>
  )
}

const HeaderTitle = () => {
  return (
    <Stack spacing={1} align="center">
      <Title order={2}>WOOKIE</Title>
      <Title order={2}>MOVIES</Title>
    </Stack>
  )
}
