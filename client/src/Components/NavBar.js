import { LogoutButton } from "./LogoutButton";
import {LoginButton}  from "./LoginButton";
export const NavBar = (props) => {

    return(
        <header className="fixed w-full h-1/2">
            <h1>Assets</h1>
            <LoginButton/>
        </header>
    );
}
