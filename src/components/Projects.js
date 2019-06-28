import React from 'react';

const EachProject = (props) => {
	let Descript;
	let dateStr;
	let descripArr = props.project.description;

	if(descripArr) {
		Descript = descripArr.split('.').map( a => <p>{a}.</p>);
		dateStr = new Date(props.project.create_on).toDateString();
	}
	return (
		<div className="contents" style={{ backgroundColor:props.backgr }}>
			<div className="each-project">
				<div className="project-img">
					<img src={props.project.img_url} alt="" />
				</div>
				<div className="project-info">
					<h1><span>{props.project.name}</span><span className="dates">{dateStr}</span></h1>
					<div className="text-btn">
						<div className="text">{ Descript }</div>
						<div className="btn-container">
							<div className="buttons">
								<a target="_blank" rel="noopener noreferrer" href={props.project.code_url}>Code</a>
								<a target="_blank" rel="noopener noreferrer" href={props.project.demo_url}>Demo</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const Projects = (props) => {
	return (
		<div id='projects'>
			<header>
				<div className='contacts'>
					<a target="_blank" rel="noopener noreferrer" href="#" className="icons">
						<i className="fa fa-envelope-square"></i>
						<span>Email</span>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="#" className="icons">
						<i className="fa fa-github"></i>
						<span>Github</span>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sammychrise" className="icons">
						<i className="fa fa-twitter"></i>
						<span>Twitter</span>
					</a>
					<a target="_blank" rel="noopener noreferrer" href="#" className="icons">
						<i className="fa fa-linkedin"></i>
						<span>LinkedIn</span>
					</a>
				</div>
			</header>
			<main>
				<div id="list-header">
					<p>The newest projects are selected from the top</p>
					<nav>
						<ul>
							<li id="all" className="active" onClick={props.control}>All Projects</li>
							<li id="frontend" onClick={props.control}>Front-end</li>
							<li id="d3" onClick={props.control}>Data visualisation</li>
							<li id="fullstack" onClick={props.control}>Full-stack</li>
						</ul>
					</nav>
				</div>
				<div id="all-project" className="first">
						{	props.project.map((ele, i) => {
								if(i % 2 === 0)return <EachProject project={ele} backgr={'rgb(43, 43, 43)'} />;
								return <EachProject project={ ele }/> 
							}) 
						}
				</div>
			</main>
			<footer id="footer">
				<div style={{textAlign: 'center'}}>
					<h2>Let's work together...</h2>
					<p>
						How do you take your coffee?
						<a href="mailto:ebusameric@gmail.com"> Email Me!</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Projects;