import Header from "./components/Header/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
