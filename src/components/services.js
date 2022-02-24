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

			<IndiServices icon="icon-earth" title="Back-end Development" desc="Hosting and creating a website logic and inner working using Django and Node.js like Frameworks with APIs like REST and GraphQL."/>
			<IndiServices icon="icon-window" title="Front-end Development" desc="Creating a front-end portion of a website using HTML, CSS, Javascript with front-end libraries like React.js and Vue.jsCreating a front-end portion of a website using HTML, CSS, Javascript with front-end libraries like React.js and Vue.js"/>
			<IndiServices icon="icon-paint-brush" title="Creative-Work" desc="Any Creative Idea that you need help with, I am up for it."/>
			<IndiServices />
	      </div>
   	</div>
		
	</section> 
    );
}

function IndiServices(props){
	return (
		<div className="service">	

		<span className="icon"><i className={props.icon}></i></span>            

	  <div className="service-content">	

		   <h3>{props.title}</h3>

		  <p className="desc">{props.desc}</p>
		   
	   </div> 	         	 

	  </div>
	);
}