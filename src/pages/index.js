// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I made this site with the Gatsby Tutorial.</p>
      <p>See above for how I built this site and links that list popular node frameworks.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage