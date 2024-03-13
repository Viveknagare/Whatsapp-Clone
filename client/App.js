import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messanger from "./components/Messanger";
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId='676375018108-djl4u2rg9g67t1c58lqorob5p99sirq5.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
