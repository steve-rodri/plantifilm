import { Flex, SimpleGrid, Stack, Title } from "@mantine/core"

import { Search } from "./Search"

export const Header = () => {
  return (
    <SimpleGrid w="full" maw="1080px" mx="auto" sx={{ alignItems: "center" }}>
      <Flex w="full" h="100px" align="center" justify="space-between" px="10px">
        <HeaderTitle />
        <Search />
      </Flex>
    </SimpleGrid>
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
