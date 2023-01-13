import useLanguage from "./hooks/App/useLanguage";
import AppRoutes from "./routes/Routes";

function App() {
  useLanguage();

  return <AppRoutes />;
}

export default App;
