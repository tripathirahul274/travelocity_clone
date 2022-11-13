export const getData = (key) => {
    let data = localStorage.getItem(key);
    // console.log("data " ,data);
    if (data === null) return false;
    return data;
}

export const setData = (key, value) => {
    localStorage.setItem(key, value);
}
