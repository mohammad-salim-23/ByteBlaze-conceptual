import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Mainlayout = () => {
    return (
        <div>
            <div className="h-20">
           <Nav></Nav>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;