export const oidcConfig = {
    authority: "https://revolusjoidentity.azurewebsites.net",
    client_id: "ShefClient",
    redirect_uri: "https://localhost:3000/loggedin",
    scope: "openid profile roles",
    response_type: "code",
    // ...
  };