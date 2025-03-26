import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Page from './pages/Page'
import Error from './pages/Error'
import PagesLayout from './layout/pagesLayout'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route to='/' element={<PagesLayout />}>
            <Route index element={<About />}/>
            <Route path='services' element={<Services />} />
            <Route path='caseStudies' element={<CaseStudies />} />
            <Route path='blog' element={<Blog />} />
            <Route path='page' element={<Page />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App