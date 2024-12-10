import { jwtDecode } from "jwt-decode";

export const getDecodedToken = (token) => {

    if (token) {
        try {
            const decoded = jwtDecode(token);
            return decoded;
        } catch (error) {
            console.error("Token decode failed:", error);
            return null;
        }
    }

    return null;
};