import axios from 'axios'

const handler = axios.create({
    headers: { 'Content-Type': 'multipart/form-data' },
});
handler.interceptors.request.use(
    config => {
        if (/api\/v/g.test(config.baseURL) && !config.headers.Authorization) {
            console.log("API CALL: " + config.baseURL);
            const token = localStorage.getItem("jwt");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        //console.dir(config.data);
        let form = new FormData();
        let namespace = null;
        let formData;
        for (const property in config.data) {
            // if form is passed in through recursion assign otherwise create new
            formData = form || new FormData();
            let formKey;
            if (Object.prototype.hasOwnProperty.call(config.data, property)) {
                if (namespace) {
                    formKey = namespace + '[' + property + ']';
                } else {
                    formKey = property;
                }
                // if the property is an object, but not a File, use recursion.
                if (typeof config.data[property] === 'object' && !(config.data[property] instanceof File)) {
                    //objectToFormData(config.data[property], formData, property);
                } else {
                    // if it's a string or a File
                    formData.append(formKey, config.data[property]);
                }
            }
        }
        config.data = formData;
        return config;
    },
    error => Promise.reject(error)
);

export default handler;