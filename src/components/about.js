
export default function About(){
    return (
        <section id="about">  

        <div className="row section-intro">
            <div className="col-twelve">
 
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
 
                <div className="intro-info">
 
                    <img src="images/portfolio/me.jpg" alt="Jaydeep"/>
 
                    <p className="lead">Hey there, I am Jaydeep. 
 I love solving problems and detecting patterns. 
 More than that I love philosophy and science.
 I like working on meaningful projects that could create a net positive impact on society.
 So if you have one I would be happy to join</p>
                </div>   			
 
            </div>   		
        </div>
 
        <div className="row about-content">
 
            <div className="col-six tab-full">
 
                <h3>Profile</h3>
                <p>Ideas drive me to do work, something meaningful that comes out of it that makes the process enjoyable and worthwhile.
  I am working on several meaningful projects, you can look at them by clicking <a href="#portfolio">here</a>.</p>
 
                <ul className="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Jaydeep Vasant Sharma</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>September 18, 2002</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>Full Stack Developer, Creative Writer</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                     <span>www.zerobitcode.com</span> 
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>jaydeep@zerobitcode.com</span>
                    </li>
 
                </ul>
 
            </div>
 
           <Skills />
 
        </div>
 
        <div className="row button-section">
            <div className="col-twelve">
                <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
            </div>   		
        </div>
 
    </section>
    );
}

function Skills(){
    return (
        <div className="col-six tab-full">
 
        <h3>Skills</h3>
        <p>I am a Full Stack Web Developer, which means I can work with any aspect of web development let it be front-end, back-end, or API-related work.
I am also a creative writer and running two blogs which you can find here.</p>

         <ul className="skill-bars">
            <SkillProp name="Graphql" percent="75" />
            <SkillProp name="React.js" percent="85" />
            <SkillProp name="Creative Writing" percent="90" />
            <SkillProp name="Javascript" percent="85" />
            <SkillProp name="CSS3" percent="90" />
            <SkillProp name="HTML5" percent="100" />
            <SkillProp name="Vue.js" percent="90" />
            <SkillProp name="Bootstrap" percent="95" />
            <SkillProp name="Django" percent="70" />
            <SkillProp name="Wordpress" percent="95" />
         </ul>

    </div>
    );
}

function SkillProp(props){
    return (
        <li>
            <div className={`progress percent` + props.percent}><span>{props.percent}%</span></div>
            <strong>{props.name}</strong>
        </li>
    );
}