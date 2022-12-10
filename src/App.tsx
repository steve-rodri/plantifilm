import { MantineProvider } from "@mantine/core"
import { Routes, Route } from "react-router-dom"

import { Layout, Home, MovieDetail } from "./components"

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </MantineProvider>
  )
}

export default App
