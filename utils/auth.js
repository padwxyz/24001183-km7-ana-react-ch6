import { jwtDecode } from "jwt-decode";

export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        const { exp } = jwtDecode(token);
        const currTime = Math.floor(Date.now() / 1000);
        return exp < currTime;
    } catch (err) {
        console.error("error decoding token: ", err);
        return true;
    }
}