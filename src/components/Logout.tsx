import { useDispatch } from "react-redux";
import {logout} from "./../redux/userSlice";

export default function Logout() {

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(logout());

        console.log("logout");
    }

    return (
        <button className="bg-red-500 w-full text-center uppercase mt-1 text-white" onClick={handleLogout}>Logout</button>
    )
}