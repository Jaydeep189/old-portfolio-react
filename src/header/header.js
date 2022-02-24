export default function Headers(){
    return (
        <header>   	
        <div className="row">
         <div className="top-bar">
         <h4 className="nav-head">Portfolio</h4>
                <a className="menu-toggle" href="/#"><span>Menu</span></a>   
                <nav id="main-nav-wrap">
                     <ul className="main-navigation">
                         <li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
                         <li><a className="smoothscroll"  href="#about" title="">About</a></li>
                         <li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
                         <li><a className="smoothscroll"  href="#services" title="">Services</a></li>					
                         <li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>			
                     </ul>
                 </nav>    		
            </div>
        </div>		
    </header>
    );
}