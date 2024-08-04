import { useSelector } from "react-redux"
import { TypeReducer } from "../redux/store";

export default function User() {

    const user = useSelector((state: TypeReducer) => state.user.user);

    return (
        <>
            <span>Usuário: {user}</span>
        </>
    )
}