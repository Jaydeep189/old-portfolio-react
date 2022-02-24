export default function Intro(){
    return (
        <section id="intro">   

        <div className="intro-overlay"></div>	
 
        <div className="intro-content">
            <div className="row">
 
                <div className="col-twelve">
 
                    <h5>Hello, World.</h5>
                    <h1>I'm Jaydeep Sharma.</h1>
 
                    <p className="intro-position">
                        <span>Full Stack Developer</span>
                        <span>Creative Writer</span> 
                    </p>
 
                    <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
 
                </div>  
                
            </div>   		 		
        </div>
 
        <ul className="intro-social">    
             <li><a href="mailto:sjaydeep@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o"></i></a></li>   
          <li><a href="https://www.instagram.com/jaydeep.189/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/Jaydeep_189" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jaydeep-sharma-6a862b1bb/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="https://www.reddit.com/user/jaydeep-io" target="_blank" rel="noopener noreferrer"><i className="fa fa-reddit"></i></a></li>
       </ul>      	
    </section>
    );
}