import AppleLogin from "react-apple-login";

const clientId = process.env.APPLE_CLIENT_ID;

function AppleLoginButton() {
  //https://www.npmjs.com/package/react-apple-login
  return (
    <AppleLogin
      clientId={clientId}
      redirectURI="https://redirectUrl.com"
    ></AppleLogin>
  );
}

export default AppleLoginButton;
