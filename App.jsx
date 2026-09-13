import "./App.css";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Footer from "./components/footer";
import ProfileCard from "./ProfileCard";


function App(){
  return ( 
  <>
    <h1>Hello React</h1>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>

    <ProfileCard/>

   <Header />

      <div className="content">
        <Sidebar />
        <Main />
      </div>

      <Footer />

  </>
  )

}

export default App

