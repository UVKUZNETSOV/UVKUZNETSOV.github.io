import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Skills } from './components/Skills'
import { ProjectWrapper } from './components/ProjectWrapper'
import { About } from './components/About'
import { Header } from './components/Header'
import { Homepage } from './components/Homepage'
import { useSpring, animated } from '@react-spring/web'

function App() {

  const [props] = useSpring(
    () => ({
      from: { opacity: 0, x: -100},
      to: { opacity: 1, x: 0},
    }),
    []
  )

  return (
    <>
      <BrowserRouter>
          <header className=' absolute left-0 right-0 z-10 h-10'>
            <Header />
          </header>   
        <animated.div style={props}>
          <Routes>
            <Route exact path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<ProjectWrapper />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </animated.div>
      </BrowserRouter>
    </>
  )
}

export default App
