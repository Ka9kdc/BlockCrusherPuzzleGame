import React from 'react';

export default function Team() {
	return (
		<div>
			<div>
				<p>Team section</p>
				<p>
					This next section lists teammates and what technologies you used. Here
					are some subsections you can consider including:
				</p>
				{/* <p>A list of team members</p> */}
				{/* <p>A list of technologies used (with icons, for bonus points!)</p> */}
				<p>
					Shoutout and link to Mintbean's homepage - This helps us grow the
					community!
				</p>
			</div>

			<div>
                <div id="ListOfMembers">
                <img src="images/kelsey.png" alt="head shot of Kelsey" id="photoOfMe" />
				<h2 >Kelsey Schroeder</h2>

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
				</div></div>
                <div>
                    <h3>Technologies Used</h3>
                    <div className="contact_links">
                        <img src="images/react-logo.png" alt="React logo" />
                        <img src="images/html5-logo-31819.png" alt="html5 css3 and javascript logo" />
                    </div>
                </div>
			</div>
		</div>
	);
}
