export default function Stats(){
    return (
        <section id="stats" className="count-up">

		<div className="row">
			<div className="col-twelve">

				<div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">				
					<Stat icon="icon-pencil-ruler" count="3" title="Projects Completed"/>
					<Stat icon="icon-user" count="10" title="Team Members"/>
					<Stat icon="icon-light-bulb" count="100000" title="Crazy Ideas"/>
					<Stat icon="icon-cup" count="1500" title="Coffee Cups"/>
					<Stat icon="icon-clock" count="5000" title="Hours"/>
					<Stat icon="icon-badge" count="2" title="Start-Ups"/>
				</div>
			</div>
		</div> 
	</section>
    );
}

function Stat(props){
	return(
		<div className="bgrid stat">

						<div className="icon-part">
							<i className={props.icon}></i>
						</div>

						<h3 className="stat-count">
							{props.count}
						</h3>

						<h5 className="stat-title">
							{props.title}
						</h5>

					</div>
	);
}