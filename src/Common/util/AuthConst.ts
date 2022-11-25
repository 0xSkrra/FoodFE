export const AuthConst = {
    authority: process.env.REACT_APP_IDENTITYSERVER_BASEURL || '',
    client_id: "ShefClient",
    redirect_uri: "https://localhost:3000/loggedin",
    scope: "openid profile roles email address",
    response_type: "code",
    // ...
  };

