export default function Portfolio(){
    return (
        <section id="portfolio">

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Portfolio</h5>
   			<h1>Check Out Some of My Works.</h1>

   			<p className="lead">These are some projects that I am working </p>

   		</div>   		
   	</div>

   	<div className="row portfolio-content">

   		<div className="col-twelve">
	         <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
				<WorkModal img="images/portfolio/zerobitcode_final.png" modalNum="01" title="Zerobitcode" alt="zerobitcode" desc="Web And App Development Company" />
				<WorkModal img="images/portfolio/wwh_s.svg" modalNum="02" title="whywhathow" alt="whywhathow" desc="Blog" />
				<WorkModal img="images/portfolio/clouds.jpg" modalNum="03" title="Fiction" alt="Clouds" desc="Blog" />
				<WorkModal img="images/portfolio/ruleout_p.png" modalNum="05" title="Rule Out" alt="Beetle" desc="Clothing" />
				<WorkModal img="images/portfolio/n.png" modalNum="04" title="Existential to-do List" alt="Lighthouse" desc="Web Dev + Philosophy" />
				<Modals  img="images/portfolio/modals/zerobitcode_final_1.png" modalNum="01" title="Zerobitcode" alt="zerobitcode" category="Web And App Development Company" desc="We at ZeroBitCode provide the Best Quality websites and apps at affordable prices. Our goal is to digitalize bussniesses around the world." />
				<Modals  img="images/portfolio/wwh_s.svg" modalNum="02" alt="whywhathow" title="whywhathow" category="Blog" desc="Why What How is a food stall for curious people to feed their curiosity. This is my Blog where I write interesting Stuff!"  />
				<Modals  img="images/portfolio/modals/m-clouds.jpg" modalNum="03" title="Fiction" alt="Clouds" category="Blog" desc= "Here I express my love for art that reflects like a mirror into reality and much more" />
				<Modals  img="images/portfolio/ruleout_p.png" modalNum="05" title="Rule Out" alt="Beetle" category="Clothing" desc="Here we design clothing that are unique to it's design and make you stand out!" />
				<Modals  img="images/portfolio/n2.jpg"  modalNum="04" title="Existential to-do List" alt="Lighthouse" category="Web Dev + Philosophy" desc="This is an site where you priotize your work by asking yourself Existential questions!" />
	         </div>
   		</div>
   	</div>
		
	</section>
    );
}

function WorkModal(props){
	return (
		<div className="bgrid folio-item">
		<div className="item-wrap">
			<img src={props.img} alt={props.alt} />
		   <a href={`#modal-` + props.modalNum} className="overlay">	                  	           
			  <div className="folio-item-table">
				  <div className="folio-item-cell">
							 <h3 className="folio-title">{props.title}</h3>	     					    
							   <span className="folio-types">
								  {props.desc}
							 </span>
						 </div>	                      	
			  </div>                 
		   </a>
		</div>	               
		 </div>
	);
}

function Modals(props){
	return (
		<div id={`modal-` + props.modalNum} className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src={props.img} alt={props.alt} />
				     	</div>      	

					   <div className="description-box">
					      <h4>{props.title}</h4>		      
					      <p>{props.desc}</p>

					      <div className="categories">{props.category}</div>			               
					   </div>

			         <div className="link-box">
			            <a href={props.link}>Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div>
	);
}