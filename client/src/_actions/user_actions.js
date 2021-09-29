import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    ON_SUCCESS_BUY,
    GET_CART_LIST
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/api/user/signin`, dataToSubmit,{withCredentials: true})
        .then(response => response.data.result);
    console.log("request",request)
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth() {
    const request = axios.get(`${USER_SERVER}/api/user/auth`,{withCredentials: true})
        .then(response => response.data);
    
    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}




// export function getCartItems(cartItems, userCart) {

//     const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
//         .then(response => {
//             // CartItem들에 해당하는 정보들을  
//             // Product Collection에서 가져온후에 
//             // Quantity 정보를 넣어 준다.
//             userCart.forEach(cartItem => {
//                 response.data.forEach((productDetail, index) => {
//                     if (cartItem.id === productDetail._id) {
//                         response.data[index].quantity = cartItem.quantity
//                     }
//                 })
//             })
//             return response.data;
//         });

//     return {
//         type: GET_CART_ITEMS,
//         payload: request
//     }
// }









export function onSuccessBuy(data) {

    const request = axios.post(`/api/users/successBuy`, data)
        .then(response => response.data);

    return {
        type: ON_SUCCESS_BUY,
        payload: request
    }
}












