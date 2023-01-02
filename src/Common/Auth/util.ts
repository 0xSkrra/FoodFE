import { User } from "oidc-client-ts";
import { AuthConst } from "./consts";

export function getUser() {
    const oidcStorage = sessionStorage.getItem(`oidc.user:${AuthConst.authority}:${AuthConst.client_id}`)
    if (!oidcStorage) {
        return null;
    }

    return User.fromStorageString(oidcStorage);
}