import { LogoutButton } from "./LogoutButton";
import {LoginButton}  from "./LoginButton";
export const NavBar = (props) => {

    return(
        <header className="flex w-full py-4 text-black font-bold border-b-2 bg-white justify-around p-2 ">
            <h1 className="text-xl font-semibold">Assets</h1>
            <LoginButton/>
        </header>
    );
}
