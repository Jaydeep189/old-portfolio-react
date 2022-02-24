export default function Services(){
    return (
        <section id="services">

		<div className="overlay"></div>

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Services</h5>
   			<h1>What Can I Do For You?</h1>

   			<p className="lead">I am up for any developmental or creative ideas you have, So if you are interested in doing one, get in touch with me via mail or any social media platform </p>

   		</div>   		
   	</div>

   	<div className="row services-content">
   		<div id="owl-slider" className="owl-carousel services-list">

	      	<div className="service">	

	      		<span className="icon"><i className="icon-earth"></i></span>            

	            <div className="service-content">	

	            	 <h3>Back-end Development</h3>

		            <p className="desc">Hosting and creating a website logic and inner working using Django and Node.js like Frameworks with APIs like REST and GraphQL.</p>
	         		
	         	</div> 	         	 

				</div>

				<div className="service">	

					<span className="icon"><i className="icon-window"></i></span>                          

	            <div className="service-content">	

	            	<h3>Front-end Development</h3>

		            <p className="desc">Creating a front-end portion of a website using HTML, CSS, Javascript with front-end libraries like React.js and Vue.jsCreating a front-end portion of a website using HTML, CSS, Javascript with front-end libraries like React.js and Vue.js
	         		</p>

	            </div>	                          

			   </div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-paint-brush"></i></span>		            

	            <div className="service-content">

	            	<h3>Creative-Work</h3>

		            <p className="desc">Any Creative Idea that you need help with, I am up for it.
	        			</p> 
	            </div> 	            	               
			   </div> 
				<div className="service">	              

			   </div>
	      </div>
   	</div>
		
	</section> 
    );
}