import "./App.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />

      <div className="content">
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;