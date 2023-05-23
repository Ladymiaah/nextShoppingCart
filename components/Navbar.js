import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={120} height={50}/>
            </div>
          <Link href="/">Home</Link> 
          <Link href="about">About</Link> 
          <Link href="Store">Shop
          <ul className="dropdown">
            <li> <Link href="Store/Bags"> Bags </Link></li>
            <li><Link href="Store/Lingerie">Lingerie</Link></li>
            <li><Link href="Store/Boxers">Boxers</Link></li>
          </ul>
          </Link>
          <Link href="Contact">Contact</Link> 
        </nav>
    );
}
 
export default Navbar;