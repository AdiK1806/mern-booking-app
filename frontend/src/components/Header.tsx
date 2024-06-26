import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header=()=>{
    const{isLoggedIn}=useAppContext();
    return (
        <div className="bg-blue-800 pt-4 px-16 pb-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-5xl text-white font-bold tracking-tight underline">
                    <Link to="/">StayEase.com</Link>
                </span>


                <span className="flex space-x-2">
                    {isLoggedIn ? <>
                        <Link to="/my-bookings" className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded">My Bookings</Link>
                        <Link to="/my-hotels" className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded">My Hotels</Link>

                        <SignOutButton/>

                    </> : <Link to="/sign-in" className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded">Sign In</Link>}

                </span>

            </div>
        </div>
    );
};
export default Header;
