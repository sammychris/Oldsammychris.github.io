import React from 'react';

const Profile = () => {
	return (
		<div id='profile'>
			<div id="minimize">
				<header>
					<h1>
						Hey I'm
						<span style={{ fontSize: '40px',}}> Samuel</span>
						<span style={{ fontSize: '16px', color: '#25b2ba' }}></span>
					</h1>
					<p>a Web developer</p>
				</header>
				<main>
					<div id="profilePic">
						<img src="https://avatars0.githubusercontent.com/u/29807328?s=400&u=4e49f08616b02550468c8939aa644982f0052732&v=4" alt=""/>
					</div>
					<p>I'm a web developer living in Zagreb. 
					I code every day with music pumping in my headphones.</p>
					<p>Right now I'm immersed in JavaScript and React.</p>
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