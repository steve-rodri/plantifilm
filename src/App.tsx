import { Routes, Route } from "react-router-dom"

import { Layout } from "./components"
import { Home, MovieDetail } from "./pages"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
