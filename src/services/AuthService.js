import axios from 'axios';
import config from '../config';
import { reactLocalStorage } from 'reactjs-localstorage';
export default {
    login: function (data) {
        var url = config.API_URL + 'user/login'
        return axios.post(url, data);
    },
    setData: function (token, user) {
        reactLocalStorage.set('accessToken', token);
        reactLocalStorage.setObject('user', user);
        return;
    },
    logout: function () {
        reactLocalStorage.remove('accessToken');
        reactLocalStorage.remove('user');
        return;
    },
    isAuthenticated: function () {
        var token = reactLocalStorage.get('accessToken');
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}