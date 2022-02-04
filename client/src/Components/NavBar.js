

export const NavBar = (props) => {

    return(
        <header className="flex text-s text-gray-400 font-bold border-b-2 bg-white justify-around p-2 ">
            <nav>
                <ul className="flex gap-8">
                    <li>About</li>
                    <li>Docs</li>
                </ul>

            </nav>

            <nav>
                <ul className="flex gap-2">
                    <li>
                        Linkedin
                    </li>
                    <li>
                        Discord
                    </li>
                    <li>
                        GitHub
                    </li>
                </ul>
            </nav>
        
        </header>
    );
}
