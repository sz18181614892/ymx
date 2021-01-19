import "./home.css"
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import Body from "./module/Body/Body";
import About from "./module/About/About";
import FooterCom from "../../components/FooterCom/FooterCom";

function Home() {
    return (
        <div className="App">
            <HeaderCom/>
            <Body/>
            <About/>
            <FooterCom/>
        </div>
    );
}

export default Home;
