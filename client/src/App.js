import {NavBar} from './Components/NavBar';
import {DashBoard} from './Containers/DashBoard';
import {SideBar} from './Containers/SideBar';
function App() {
 
  return (
    <div>
      <NavBar/>
      <div className="flex">
        <SideBar/>
        <DashBoard/>
        </div> 
      </div>
  );
}

export default App;
