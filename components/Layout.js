import Disclaimer from "./Disclaimer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navigation from "./Navigation";


const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar/>
            <Disclaimer/>
            { children }
            <Navigation/>
            <Footer/>
        </div>
      );
}
 
export default Layout;