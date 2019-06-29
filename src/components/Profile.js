import React from 'react';

const Profile = () => {
	return (
		<div id='profile'>
			<div id="minimize">
				<header>
					<h1>Hey I'm Samuel</h1>
					<p style={{marginTop:'5px'}}>a Web developer</p>
				</header>
				<main>
					<div id="profilePic">
						<img src="https://avatars0.githubusercontent.com/u/29807328?s=400&u=4e49f08616b02550468c8939aa644982f0052732&v=4" alt=""/>
					</div>
					<div id="about">
						<p>I'm a web developer living in Zagreb. 
						I code every day with music pumping in my headphones.</p>
						<p>Right now I'm immersed in JavaScript and React.</p>
					</div>
					<div id="skills">
						<h3>My Skills:</h3>
						<div id="skill">
							<span style={{background: '#ca2b03'}}>HTML5</span>
							<span style={{background: '#379ad6'}}>CSS3</span>
							<span style={{background: '#cea11a'}}>JavaScript</span>
							<span style={{background: '#218e94'}}>React</span>
							<span style={{background: '#f5824c'}}>D3</span>
							<span style={{background: '#172c45'}}>jQuery</span>
							<span style={{background: '#5f3f88'}}>Bootstrap</span>
							<span style={{background: '#b55f8c'}}>Sass</span>
							<span style={{background: '#7649bb'}}>Redux</span>
							<span style={{background: '#76ac64'}}>Node</span>
							<span style={{background: '#f03c2e'}}>Git</span>
						</div>
					</div>
				</main>
				<footer>
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
				</footer>
			</div>
		</div>
	);
}

export default Profile;