import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {Login as LoginAction} from "../state/User"

const Login = ({}) => {
    const {register,handleSubmit} = useForm({
        defaultValues: {
            login: "",
            password: "",
        }
    });

    const dispatch = useDispatch();

    const login = async ({login, password}: any) => {

        //TODO: integrate
        console.log(`log ${login} with ${password}`);
        
        dispatch(LoginAction({ login, avatar: "", preferences: []}))
    }

    return <div>
        Login page
        <form onSubmit={handleSubmit(login)}>
            <input {...register("login")} /><br />
            <input {...register("password")} /><br />
            <button type="submit">Log in</button>
        </form>
    </div>
}

export default Login;