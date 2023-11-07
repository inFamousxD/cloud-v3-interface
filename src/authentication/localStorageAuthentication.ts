import {JWTDecodeAuth, LocalStorageAuthToken, PostAuthExtractedData} from "../types/authTypes";
import jwtDecode from "jwt-decode";

export const fetchAndDecodeLocalStorageAuthToken = (): LocalStorageAuthToken => {
    let authTest: LocalStorageAuthToken = {
        error: undefined,
        browserToken: undefined,
        authenticated: false,
        postAuthExtractedData: undefined
    };

    try {
        const storedToken = localStorage.getItem("authToken");

        if (storedToken) {
            authTest.browserToken = storedToken;
            authTest.postAuthExtractedData = decodeLocalStorageAuthToken(authTest.browserToken);
            authTest.authenticated = authTest.postAuthExtractedData.isSuccess;
        }
    } catch (e: any) {
        authTest.error = e;
        return authTest;
    }

    return authTest;
}

export const decodeLocalStorageAuthToken = (token: string): PostAuthExtractedData => {
    const postAuthExtractedData: PostAuthExtractedData = {
        email: "",
        userName: "",
        isSuccess: false,
        exp: -1,
        iat: -1
    };

    const extraction = jwtDecode<JWTDecodeAuth>(token);
    if (extraction) {
        postAuthExtractedData.isSuccess = true;
        postAuthExtractedData.email = extraction.email;
        postAuthExtractedData.userName = extraction.userName;
        postAuthExtractedData.exp = extraction.exp;
        postAuthExtractedData.iat = extraction.iat;
    }

    return postAuthExtractedData;
}