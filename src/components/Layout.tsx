import { Box } from "@mantine/core"
import { Outlet } from "react-router-dom"

import { Header } from "./Header"

export const Layout = () => {
  return (
    <Box mih="100vh" miw="100vw">
      <Header />
      <Outlet />
    </Box>
  )
}
