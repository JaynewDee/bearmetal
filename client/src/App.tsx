import './App.css'
import Header from './components/Header'
import { Posts } from './pages/Posts'
import { Home } from './pages/Home'
import { Route, Routes } from '@solidjs/router'
import { Navigation } from './components/Navigation'

//

function App() {

  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </Routes>
    </div>
  )
}

export default App
