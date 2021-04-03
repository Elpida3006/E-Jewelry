
const userUrl = 'http://localhost:3002/api/users';


export const getUser = () => {
    return fetch(`${userUrl}/profile`)
        .then(user => user.json())
        .catch(error => console.log(error));
};
export const postRegister = (email, fullname, password, rePassword) => {
    // let {email, username, password, rePassword} = data;
    let sendData =  {email, fullname, password, rePassword};
    console.log(`its a fetch data ${sendData}`);
    return fetch('http://localhost:3002/api/users/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify( sendData)
    })
        .then(user => {
            console.log('you are created');    
        })
        .catch(error => console.log(error));
};
export const postLogin = ( email, password) => {
    let user = {email, password};
    console.log(`its a fetch data ${user}`);
    return fetch('http://localhost:3002/api/users/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(user)
    })
      .then(user => {
          console.log(user);
        //   authCookieName: 'auth_cookie',
        //   authHeaderName: 'auth',
        const token =  user.headers.get('authCookieHeader');
        //get token from api
    document.cookie = `auth_cookie=${token}`;
    //save token in cookie in browser
    console.log('you are logged'); 
     return user.json();
    })
       .then(user => {
          console.log(user.email);
          console.log(user.fullname);
     
    console.log('your data is json'); 
    return user;
    })
        .catch(error => console.log(error));
};