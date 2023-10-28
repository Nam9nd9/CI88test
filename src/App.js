import React , {Context, createContext, useContext} from 'react'
import './App.css'
import { Route, Routes , Link } from 'react-router-dom'
import All from './pages/All'
import Active from './pages/Active'
import Complate from './pages/Complate'
import { Approvider } from './pages/context'

const Header = () => {
	return (
		<div className='header'>
			<span>
				<Link to="/">ALL</Link>
			</span>
			<span>
				<Link to="/active">active</Link>
			</span>
			<span>
				<Link to="/complate">complate</Link>
			</span>
		</div>
	)
}

const App = () => {
  
  return (
   <div>
      <Header />
     <Routes>
      <Route path='/' element={<All />}/>
      <Route path='/active' element={<Active />}/>
      <Route path='/complate' element={<Complate />}/>
    </Routes>
   </div>
  )
}

export default App