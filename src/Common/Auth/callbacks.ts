export const signinCallback = () => {
  window.history.replaceState({},
    window.document.title,
    window.location.origin);
  
}