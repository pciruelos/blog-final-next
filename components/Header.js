import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-pink-300 text-black shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-dont font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src='/images/logonegro.png' width={40} height={40} alt='logo'/>
            <span className="ml-3 text-xl">CiruBlog</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center mx-auto text-base md:ml-auto md:justify-end">
            <Link href="/"><a className="mx-3 cursor-pointer uppercase hover:text-indigo-300" >Home</a></Link>
            <Link href="/about"><a className="mx-3 cursor-pointer uppercase hover:text-indigo-300" >About</a></Link>
            <Link href="/blog"><a className="mx-3 cursor-pointer uppercase hover:text-indigo-300" >Blog</a></Link>
            <Link href="/contact"><a className="mx-3 cursor-pointer uppercase hover:text-indigo-300" >Contact</a></Link>
        
        
        </nav>
      </div>
    </header>
  );
};

export default Header;
