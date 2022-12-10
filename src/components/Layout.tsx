import { SimpleGrid, Box } from "@mantine/core"
import { Outlet } from "react-router-dom"

import { Header } from "./Header"

export const Layout = () => {
  return (
    <Box mih="100vh" miw="100vw">
      <SimpleGrid
        w="full"
        maw="1080px"
        mx="auto"
        sx={{ alignItems: "center" }}
        px={10}
      >
        <Header />
        <Outlet />
      </SimpleGrid>
    </Box>
  )
}
