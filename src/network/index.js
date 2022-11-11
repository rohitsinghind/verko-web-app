import Env from '../env.json';
import axios from "axios";

function querystring(query = {}) {
    const qs = Object.entries(query)
        .filter((pair) => pair[1] !== undefined)
        .map((pair) =>
            pair
                .filter((i) => i !== null)
                .map(encodeURIComponent)
                .join('=')
        )
        .join('&');

    return qs && `?${qs}`;
}

export default class Fetch {
    fetchRequest = async (method, url, params = {}, image = null) => {
        url = Env.BASE_URL + url;
        const headers = this.authHeader(url);
        const requestOptions = {
            method,
            headers
        };
        if (method === 'GET') {
            url = `${url}${querystring(params)}`;
        } else {
            if (image) {
                requestOptions.headers = 'multipart/form-data';
            }
            const body = image
                ? this.generateFormData(image, params)
                : JSON.stringify(params);
            requestOptions.body = body;
        }
        const response = await fetch(url, requestOptions);
        return response.json();
    };

    axiosFormDataRequest = async (method, url, params = {}, image = null) => {
        url = Env.BASE_URL + url;
        const headers = this.authHeader(url);
        headers['Content-Type'] = 'multipart/form-data';
        const data = new FormData();
        for (let i = 0; i < image.length; i++) {
            data.append("file", image[i]);
        }
        Object.keys(params).forEach(key => {
            data.append(key, params[key]);
        });

        const response = await axios({
            method,
            url,
            data,
            headers
        });
        return response.data;
    };

    generateFormData = (files, body) => {
        const data = new FormData()
        if (Array.isArray(files)) {
            files.forEach((element, i) => {
                data.append('files', element);
            });
        } else if (typeof files !== 'string') {
            data.append('file', files);
        }
        Object.keys(body).forEach(key => {
            console.log(body);
            data.append(key, body[key]);
        });
        return data;
    };

    authHeader = () => {
        const Header = { 'Content-Type': 'application/json' };
        try {
            const admin = localStorage.getItem('USER_DETAILS');
            if (admin) {
                const unstringfyData = JSON.parse(admin);
                const { token } = unstringfyData;
                if (token) {
                    Header.token = token;
                }
                return Header;
            }
            return Header;
        } catch (error) {
            return Header;
        }
    };
}
