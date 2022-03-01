import {NavBar} from './Components/NavBar';
import {Assets} from './Containers/Assets';
import AllStocks from './Containers/AllStocks';
import {Account} from './Containers/Account'
import {SideBar} from './Components/SideBar';
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import {useAuth0}  from '@auth0/auth0-react';
function App() {
  
  const [heading , setHeading] = useState(window.location.pathname.split('/'))
  const {isAuthenticated} = useAuth0()


  const handleChange = (value) => {
    setHeading(value)
  }

  return (
    <div>
    <NavBar heading={heading}/>
    <SideBar/>
    <main className="relative ml-8 text-center top-16 md:left-64 md:ml-2 mt-4 w-10/12 ">
    <Routes>
        <Route path="/Assets" element={<Assets  changeHeadding={handleChange}/>}/>
        <Route path="/AllStocks" element={<AllStocks  changeHeadding={handleChange}/>}/>
    </Routes>
    </main>
    </div>
  );
}

export default App;
