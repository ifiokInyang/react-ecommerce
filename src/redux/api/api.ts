import { publicRequest } from "../../utils/api/requestMethod";
import { ILogin } from "../../utils/interfaces/interface.dto";
import { loginFailure, loginStart, loginSuccess } from "../userRedux"

export const login = async (dispatch: any, user: ILogin) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post("/api/auth/login", user)
        console.log(response.data)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}