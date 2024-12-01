import "./App.css";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./components/RegisterPage";
import CreateEnvelopePage from "./components/CreateEnvelope";

function App() {
  return (
    <>
      <RegisterPage>
        <LoginPage>
          <CreateEnvelopePage />
        </LoginPage>
      </RegisterPage>
    </>
  );
}

export default App;
