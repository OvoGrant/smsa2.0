import {NavBar} from './Components/NavBar';
import {DashBoard} from './Containers/DashBoard';
import {SideBar} from './Containers/SideBar';
function App() {
 
  return (
    <div>
      <div style={{backgroundColor: "#F2F2F2"}} className="flex ">
        <SideBar/>
        <div className='w-full flex-col'>
        <NavBar/>
        <DashBoard/>
        </div>
        </div> 
      </div>
  );
}

export default App;
