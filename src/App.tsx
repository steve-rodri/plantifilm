import { MantineProvider } from "@mantine/core"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Layout } from "./components"
import { Home, MovieDetail } from "./pages"

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
