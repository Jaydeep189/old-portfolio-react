export default function Contact(){
    return (
        <section id="contact">

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Contact</h5>
   			<h1>I'd Love To Hear From You.</h1>

   			<p className="lead">If you have any new idea that you want to develop or any enquiry feel free to contact me</p>

   		</div> 
   	</div>
   	<div className="row contact-form">

   		<div className="col-twelve">
            <form name="contactForm" id="contactForm" method="post" data-netlify="true">
      			<fieldset>

                  <div className="form-field">
 						   <input name="contactName" type="text" id="contactName" placeholder="Name" minLength="2" required="" />
                  </div>
                  <div className="form-field">
	      			   <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" required="" />
	               </div>
                  <div className="form-field">
	     				   <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" />
	               </div>                       
                  <div className="form-field">
	                 	<textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
	               </div>                      
                 <div className="form-field">
                     <button className="submitform">Submit</button>
                  </div>

      			</fieldset>
      		</form>
            <div id="message-warning">            	
            </div>            
      		<div id="message-success">
               <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
      		</div>

         </div>
   	</div>

   	<div className="row contact-info">

   		<div className="col-four tab-full">

   			<div className="icon">
   				<i className="icon-pin"></i>
   			</div>

   			<h5>Where to find me</h5>

   			<p>
            Gujrat, India
            </p>

   		</div>

   		<div className="col-four tab-full collapse">

   			<div className="icon">
   				<i className="icon-mail"></i>
   			</div>

   			<h5>Email Me At</h5>

   			<p>sjaydeep@gmail.com			     
			   </p>

   		</div>

   		<div className="col-four tab-full">

   			<div className="icon">
   				<i className="icon-phone"></i>
   			</div>

   			<h5>Call Me At</h5>

   			<p>Phone: +91 9512817XXX<br/>
			   </p>

   		</div>
   		
   	</div>
		
	</section>
    );
}