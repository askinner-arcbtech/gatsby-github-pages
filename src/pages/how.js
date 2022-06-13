// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import SiteLink from '../components/siteLink'

// Step 2: Define your component
const HowPage = () => {
	return (
		<Layout pageTitle="Creating a Gatsby Site on Github Pages">
			<h2>Set Up Your Development Environment</h2>
			<SiteLink displayText="https://www.gatsbyjs.com/docs/tutorial/part-0" linkDestination="https://www.gatsbyjs.com/docs/tutorial/part-0"></SiteLink>
			<ul>
				<li>Node
					<ul>
						<li>Download and Install Node from <SiteLink displayText="https://nodejs.org/en" linkDestination="https://nodejs.org/en"></SiteLink></li>
						<li>Verify that Node and NPM are installed
							<ul>
								<li>Node Version: node --version</li>
								<li>NPM Version: npm --version</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>Git
					<ul>
						<li>Download and Install Git from <SiteLink displayText="https://gitforwindows.org" linkDestination="https://gitforwindows.org"></SiteLink></li>
						<li>Verify that git is Installed: git --version</li>
						<li>If needed, you can update git: git update-git-for-windows</li>
					</ul>
				</li>
				<li>Gatsby CLI
					<ul>
						<li>Install via command line: npm install -g gatsby-cli</li>
						<li>Verify that gatsby is Installed: gatsby --version</li>
					</ul>
				</li>
				<li>Visual Studio Code: <SiteLink displayText="https://code.visualstudio.com" linkDestination="https://code.visualstudio.com"></SiteLink></li>
				<li>Github Desktop - can use instead of command line commit/push - <SiteLink displayText="https://desktop.github.com" linkDestination="https://desktop.github.com/"></SiteLink></li>
				<li>Github - Create an account - <SiteLink displayText="https://github.com/join" linkDestination="https://github.com/join"></SiteLink></li>
			</ul>
			<h2>Creating the Gatsby Site</h2>
			<SiteLink displayText="https://www.gatsbyjs.com/docs/tutorial/part-1" linkDestination="https://www.gatsbyjs.com/docs/tutorial/part-1"></SiteLink>
			<ul>
				<li>Create Site
					<ul>
						<li>Open Command Prompt</li>
						<li>Navigate to the directory where you want the code to live</li>
						<li>command line: gatsby new</li>
						<li>[Steps at the link will help on this part of the setup: <SiteLink displayText="https://www.gatsbyjs.com/docs/tutorial/part-1/#create-a-gatsby-site" linkDestination="https://www.gatsbyjs.com/docs/tutorial/part-1/#create-a-gatsby-site"></SiteLink>]</li>
					</ul>
				</li>
				<li>Run site locally
					<ul>
						<li>Command line: gatsby develop or npm run develop</li>
						<li>When it finishes you should be able to go to <SiteLink displayText="http://localhost:8000" linkDestination="http://localhost:8000"></SiteLink> to see the default site</li>
						<li>Stop the terminal [ctrl + c]</li>
					</ul>
				</li>
				<li>Note: Stop here on the Gatsby Website since we are using Github Pages instead of Gatsby Cloud for deployment</li>
			</ul>
			<h2>Setting Up Repo on GitHub and Deploying to GitHub Pages</h2>
			<SiteLink displayText="https://www.youtube.com/watch?v=8tz9zDmrEbA" linkDestination="https://www.youtube.com/watch?v=8tz9zDmrEbA"></SiteLink>
			<div>[How to host a Gatsby Website on Github Pages]</div>
			<ul>
				<li>Create a new repository on Github</li>
				<li>Add Code to Repo
					<ul>
						<li>Way #1: Copy code from github website and paste into command line</li>
						<li>Way #2: Use GitHub Desktop, Clone Repository, Copy files inside of project folder except git folder to where GitHub created the Repo</li>
					</ul>
				</li>
				<li>Intall Github pages package: npm install gh-pages --save-dev</li>
				<li>In package.json: (inside scripts) "deploy": "gatsby build --prefix-paths && gh-pages -d public",</li>
				<li>In gatsby-config.js set Repo Name: (inside module.exports | /repo name should be your repo in github ) pathPrefix: "/[repo name]",</li>
				<li>Command Line [Building and Deploying to github]: npm run deploy</li>
				<li>Commit and Push Changes
					<ul>
						<li>Command Line
							<ul>
								<li>git add *</li>
								<li>git commit -am "-- Commit message goes here --"</li>
								<li>git push</li>
							</ul>
						</li>
						<li>Github Desktop: Commit then Publish/Push</li>
					</ul>
				</li>
				<li>Set site as public in GitHub
					<ul>
						<li>Settings &gt; Pages</li>
						<li>[This might be configured already, Github will recognize gh-pages as a Github Pages Site] - If site is published, no changes needed</li>
						<li>Branch: gh-pages | Folder: root | Save</li>
						<li><b>The link in the green alert is your website!!!</b></li>
					</ul>
				</li>
				<li>Note: Stop watching the video at this point. It describes using Netlify to point the url to a different site.</li>
			</ul>
			
			<h2>Additional Steps</h2>
			<div>
				Want to learn how to make changes?&nbsp;
				<SiteLink displayText="https://www.gatsbyjs.com/docs/tutorial/part-2" linkDestination="https://www.gatsbyjs.com/docs/tutorial/part-2"></SiteLink>
			</div><br />
			<div>Can continue with the documentation on Gatsby's website going forward (Blog setup) but I basically stopped here.</div><br/>
			<div>
				Publishing Changes
				<ul>
					<li>[Command line / Publishes changes to github changes]
						<ul>
							<li>npm run deploy</li>
						</ul>
					</li>
					<li>[These can technically be done in Github desktop / Just saves changes that you made]
						<ul>
							<li>git add *</li>
							<li>git commit -m "-- Commit message goes here --"</li>
							<li>git push</li>
						</ul>
					</li>
				</ul>
			</div>
			
			<h2>More Info</h2>
			<div>
				All Gatsby Commands&nbsp;
				<SiteLink displayText="https://www.gatsbyjs.com/docs/gatsby-cli" linkDestination="https://www.gatsbyjs.com/docs/gatsby-cli"></SiteLink>
			</div><br/>
			<div>You can also get builds that come preconfigured</div>
			<ul>
				<li>Full List: <SiteLink displayText="https://github.com/orgs/gatsbyjs/repositories?type=all" linkDestination="https://github.com/orgs/gatsbyjs/repositories?type=all"></SiteLink></li>
				<li>gatsby-starter-notes-theme: <SiteLink displayText="https://github.com/gatsbyjs/gatsby-starter-notes-theme" linkDestination="https://github.com/gatsbyjs/gatsby-starter-notes-theme"></SiteLink></li>
				<li>gatsby-starter-default: <SiteLink displayText="https://github.com/gatsbyjs/gatsby-starter-default" linkDestination="https://github.com/gatsbyjs/gatsby-starter-default"></SiteLink></li>
				<li>gatsby-starter-blog: <SiteLink displayText="https://github.com/gatsbyjs/gatsby-starter-blog" linkDestination="https://github.com/gatsbyjs/gatsby-starter-blog"></SiteLink></li>
				<li>Community: <SiteLink displayText="https://www.gatsbyjs.com/starters/" linkDestination="https://www.gatsbyjs.com/starters/"></SiteLink></li>
			</ul>
		</Layout>
	)
}
// Step 3: Export your component
export default HowPage