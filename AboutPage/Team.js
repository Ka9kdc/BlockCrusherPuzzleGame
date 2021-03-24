import React from 'react';

export default function Team() {
	return (
		<div className="about_row">
			<div id="ListOfMembers">
				<div className="contact_links">
					<h2>Kelsey Schroeder</h2>
					<a href="https://kelsey-schroeder.herokuapp.com">
						<img
							src="images/kelsey.png"
							alt="head shot of Kelsey"
							id="photoOfMe"
						/>
					</a>
				</div>
				<div className="contact_links">
					<a href="https://github.com/Ka9kdc">
						<img
							src="images/github-logo.png"
							alt="Github logo and link to my github"
						/>
					</a>
					<a href="https://www.linkedin.com/in/kelsey-m-schroeder/">
						<img
							src="images/linkedin-logo.png"
							alt="linkedin logo and link to my linked in profile"
						/>
					</a>
					<a href="https://kelsey-schroeder.herokuapp.com">
						<img
							src="images/myPorttolio.png"
							alt="linkedin logo and link to my portfilio website"
						/>
					</a>
				</div>
			</div>
			<div id="tech_used" className="contact_links">
				<h2>Technologies Used</h2>
				<a href="">
					<img src="images/react-logo.png" alt="React logo" />
				</a>
				<a href="">
					<img
						src="images/html5-logo-31819.png"
						alt="html5 css3 and javascript logo"
					/>
				</a>
			</div>
		</div>
	);
}
