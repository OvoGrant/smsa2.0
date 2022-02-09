import {NavBar} from './Components/NavBar';
import {Assets} from './Containers/Assets';
import {Trade} from './Containers/Trade';
import {AllStocks} from './Containers/AllStocks';
import {Account} from './Containers/Account'
import {SideBar} from './Components/SideBar';
import {Routes,Route} from 'react-router-dom'
function App() {
 
  return (
    <div className='w-max h-max'>
    <NavBar/>
    <SideBar/>
    <Routes>
        <Route path="/Account" element={Account}/>
        <Route path="/Trade" element={Trade}/>
        <Route path="/Assets" element={Assets}/>
        <Route path="/AllStocks" element={AllStocks}/>
    </Routes>
    </div>
  );
}

export default App;
