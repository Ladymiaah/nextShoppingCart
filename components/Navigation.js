import Link from "next/link";
import Image from "next/image"

const Navigation = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="column">
                <Image src="/logo.jpg" width={150} height={80}/>
            <p>The Zamt Empire is your go-to store for your most affordable<br/> yet quality items.</p>
<p>zamtempire@gmail.com<br/>
+234 (814) 163-7044</p>
                </div>
                <div className="column">
            <ul className="vertical-link">
         <li> <Link href="/">Home</Link> </li> 
         <li> <Link href="about">About</Link> </li>
          <li><Link href="Store">Shop</Link> </li>
          <li><Link href="Contact">Contact</Link></li> 
            </ul>
            </div>
            <div className="column">
            <ul className="vertical-link">
                <li> <Link href="FAQ">FAQ</Link>  </li>
                <li> <Link href="OrderTracking">Order Tracking</Link> </li>
                <li> <Link href="TermsandCondition">Terms and Condition</Link> </li>
                <li> <Link href="PrivacyandPolicy">Privacy and Policy</Link> </li>
            </ul>
            </div>
            <div className="column">
            <p><b>Join our list</b> </p>
<p>Signup to be the first to hear about exclusive deals, special offers <br/>and upcoming collections</p>
            </div>
            </div>
        </footer>
     );
}
 
export default Navigation;