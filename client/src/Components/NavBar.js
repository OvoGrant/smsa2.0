import  LogoutButton  from "./LogoutButton";
import LoginButton  from "./LoginButton";
import {useAuth0}  from '@auth0/auth0-react';

export const NavBar = (props) => {

    const {isAuthenticated} = useAuth0()

    return(
        <header className="flex fixed z-10 bg-white top-0 h-16 border-b-2 border-gray-100 w-full">
            <nav className="ml-52 flex justify-between h-full w-10/12">
            <h1 className="font-semibold font-48 mx-2 self-center  ">{props.heading}</h1>

            <ul className="flex gap-6 self-center">
                <li className="border-2 bg-green-500 text-black font-semibold border-black rounded p-2">Buy/Sell</li>
                <li>{isAuthenticated ? <LogoutButton/> : <LoginButton/>}</li>
            </ul>
            </nav>
        </header>
    );
}
