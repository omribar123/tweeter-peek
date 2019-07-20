const ajaxCaller = (url, options) => fetch(url, options)
    .then((response) => {
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        return response.json();
    });

export default ajaxCaller;
