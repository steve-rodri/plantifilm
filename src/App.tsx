import { MantineProvider } from "@mantine/core"
import { Routes, Route } from "react-router-dom"

import { Layout } from "./components"
import { Home, MovieDetail } from "./pages"

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
