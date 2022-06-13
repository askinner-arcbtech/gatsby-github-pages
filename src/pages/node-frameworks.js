// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import SiteLink from '../components/siteLink'

// Step 2: Define your component
const NodePage = () => {
	return (
		<Layout pageTitle="Popular Node Frameworks">
			<div><b>The Most Popular Node.js Frameworks in 2022</b></div>
			<div>Alex Ivanovs</div>
			<div>April 15, 2022</div>
			<SiteLink displayText="https://stackdiary.com/node-js-frameworks" linkDestination="https://stackdiary.com/node-js-frameworks"></SiteLink>
			
			<br/><br/>
			<div><b>10 Best NodeJS Frameworks for Developers</b></div>
			<div>Simran Kaur Arora</div>
			<div>Last Updated: Nov 11, 2021</div>
			<SiteLink displayText="https://hackr.io/blog/nodejs-frameworks" linkDestination="https://hackr.io/blog/nodejs-frameworks"></SiteLink>
			
			<br/><br/>
			<div><b>Node.js Frameworks</b></div>
			<div>(Specifically looking at the REST API frameworks)</div>
			<SiteLink displayText="http://nodeframework.com" linkDestination="http://nodeframework.com"></SiteLink>

			<br/><br/>
			<div><b>Top Node JS Frameworks</b></div>
			<SiteLink displayText="https://github.com/VanoDevium/node-framework-stars" linkDestination="https://github.com/VanoDevium/node-framework-stars"></SiteLink>
		</Layout>
	)
}
// Step 3: Export your component
export default NodePage