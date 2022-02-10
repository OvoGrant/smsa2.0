import {NavBar} from './Components/NavBar';
import {Assets} from './Containers/Assets';
import {Trade} from './Containers/Trade';
import AllStocks from './Containers/AllStocks';
import {Account} from './Containers/Account'
import {SideBar} from './Components/SideBar';
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
function App() {
  
  const [heading , setHeading] = useState(window.location.pathname.split('/'))

  const handleChange = (value) => {
    setHeading(value)
  }

  return (
    <div>
    <NavBar heading={heading}/>
    <SideBar/>
    <main className="relative top-16 left-64 ml-2 mt-4 w-10/12 ">
    <Routes>
        <Route path="/Account" element={<Account changeHeadding={handleChange}/>}/>
        <Route path="/Trade" element={<Trade  changeHeadding={handleChange}/>}/>
        <Route path="/Assets" element={<Assets  changeHeadding={handleChange}/>}/>
        <Route path="/AllStocks" element={<AllStocks  changeHeadding={handleChange}/>}/>
    </Routes>
    </main>
    </div>
  );
}

export default App;
