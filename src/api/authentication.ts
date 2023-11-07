import axios from "axios";
import {LoginPOSTReturnType} from "../types/authTypes";
import {serverURL} from "../env_temp/env";

export const auth_login = async (payload: any): Promise<LoginPOSTReturnType> => {
    let response: LoginPOSTReturnType = {
        status: 400,
        authToken: "",
        email: "",
        userName: ""
    }
    await axios
        .post(serverURL + "/login", payload)
        .then(data => {
            if (data.status === 200) {
                response = data.data;
            }
        })
        .catch(err => {
            throw new Error(err);
        });

    return response;
}