import { BrowserRouter ,Navigate,Route ,Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import './App.css'
import Allblogs from './pages/Allblogs'
import { RecoilRoot } from 'recoil'
import Publish from './pages/Publish'
import { Suspense } from 'react'



function App() {
  
  function isAuhtenticated(){
    return localStorage.getItem('token')!==null;
  }
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={isAuhtenticated()?<Navigate to='/allblogs'/> :<Navigate to='signin'/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='allblogs' element={<Allblogs/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
            <Route path='/publish' element={<Publish/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RecoilRoot>
  )
}

const Loading = () =>{
  return <div>
    
  </div>
}
export default App
