
const userUrl = 'http://localhost:3002/api/users/';


export const getUser = () => {
    return fetch(`${userUrl}/profile`)
        .then(user => user.json())
        .catch(error => console.log(error));
};
export const postRegister = (...data) => {
    let user = {...data};
    return fetch(`${userUrl}/register`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    })
        .then(user => user.json())
        .catch(error => console.log(error));
};
export const postLogin = (...data) => {
    let user = {...data};
    return fetch(`${userUrl}/login`, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    })
        .then(user => user.json())
        .catch(error => console.log(error));
};