import { ChangeEvent, SyntheticEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";

export default function Login() {

    const dispatch = useDispatch();
    const [user, setUser] = useState<string>("");

    const handleUser = (e: SyntheticEvent) => {
        e.preventDefault();

        dispatch(changeUser(user));
        console.log(user);
    };

    return (
        <div className="bg-zinc-300 p-4 rounded-md max-w-[400px] w-full">
            <div>
                <h1 className="text-2xl uppercase">Login</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Usuário" onChange={(e: ChangeEvent<HTMLInputElement>) => setUser(e.target.value)} 
                            className="w-full p-1 outline-blue-500"    
                        />
                    </div>
                    <div>
                        <button className="bg-blue-500 w-full text-center uppercase mt-1 text-white" onClick={handleUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}