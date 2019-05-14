import {
    SIGN_IN,
    SIGN_OUT
} from './types';

export const signIn = (auth) => {
    return {
        type: SIGN_IN,
        payload: auth
    };
};



export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};