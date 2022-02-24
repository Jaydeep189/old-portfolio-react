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

	         	<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/zerobitcode_final.png" alt="zerobitcode" />
	                  <a href="#modal-01" className="overlay">	                  	           
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
		     					       <h3 className="folio-title">Zerobitcode</h3>	     					    
		     					    	 <span className="folio-types">
		     					       	  Web And App Development Company 
		     					       </span>
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>	               
	        		</div>

	        		<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/wwh_s.svg" alt="whywhathow" />
	               	<a href="#modal-02" className="overlay">              		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">WhyWhatHow</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Blog
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> 
	            <div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/clouds.jpg"alt="Clouds" />
	                  <a href="#modal-03" className="overlay">             		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Fiction</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Blog
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div>

	            <div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/ruleout_p.png" alt="Beetle" />
	                  <a href="#modal-04" className="overlay">                  	                 
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Rule Out</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Clothing
		     					      </span>		     		
		     					   </div>  	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div>    

	        		<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/n.png" alt="Lighthouse" />
	                  <a href="#modal-05" className="overlay">             		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Existential to-do List</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Web Dev + Philosophy
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div>
	            <div id="modal-01" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/zerobitcode_final_1.png" alt="Zerobitcode" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Zerobitcode</h4>		      
					      <p>We at ZeroBitCode provide the Best Quality websites and apps at affordable prices. Our goal is to digitalize bussniesses around the world.</p>

					      <div className="categories">Web Development</div>			               
					   </div>

			         <div className="link-box">
			            <a href="http://zerobitcode.com">Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div>

				   <div id="modal-02" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/wwh_s.svg" alt="whywhathow" />
				     	</div>      	

					   <div className="description-box">
					      <h4>WhyWhatHow</h4>		      
					      <p>Why What How is a food stall for curious people to feed their curiosity. This is my Blog where I write interesting Stuff!</p>

					      <div className="categories">Blog</div>			               
					   </div>

			         <div className="link-box">
			            <a href="http://whywhathow.info">Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div>

				   <div id="modal-03" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-clouds.jpg" alt="Clouds?" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Fiction</h4>		      
					      <p>Here I express my love for art that reflects like a mirror into reality and much more</p>

					      <div className="categories">Blog</div>			               
					   </div>

			         <div className="link-box">
			            <a href="http://fiction.whywhathow.info">Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div>

				   <div id="modal-04" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/ruleout_p.png" alt="Ruleout" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Rule Out</h4>		      
					      <p>Here we design clothing that are unique to it's design and make you stand out!</p>

					      <div className="categories">Clothing</div>			               
					   </div>

			         <div className="link-box">
			            <a href="http://ruleout.in">Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div>

				   <div id="modal-05" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/n2.jpg" alt="Existential" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Existential to-do List</h4>		      
					      <p>This is an site where you priotize your work by asking yourself Existential questions!</p>

					      <div className="categories">Web Development + Philosophy</div>			               
					   </div>

			         <div className="link-box">
			            <a href="http://existentialtodolist.tk">Visit</a>
					      <a href="/#" className="popup-modal-dismiss">Close</a>
			         </div>		      

				   </div> 
	         </div>
   		</div>
   	</div>
		
	</section>
    );
}