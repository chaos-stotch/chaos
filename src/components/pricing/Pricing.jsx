import React from 'react'
import './pricing.css'

function Pricing() {
  return (
    <div className='pricing'>
        <h1 className='pricingTitle'>Pricing</h1>
        <table>
            <tr><th>Service</th><th>Difficulty</th><th>Complexity</th><th>Price</th></tr>
            <tr><td>Simple one-page website</td>
            <td>Low</td><td>Low</td>
            <td>$500 - $1000</td></tr>
            <tr><td>Multi-page website</td><td>Medium</td><td>Low</td><td>$1000 - $3000</td></tr>
            <tr><td>E-commerce website</td><td>High</td><td>Medium</td><td>$3000 - $5000</td></tr>
            <tr><td>Custom web application</td><td>High</td><td>High</td><td>$5000+</td></tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <ul>
            <li><span>Simple one-page website: A one-page website with a simple design and limited functionality, such as a contact form or an embedded Google map.</span></li>
            <li><span>Multi-page website: A website with multiple pages, such as a blog, portfolio, or services page.</span></li>
            <li><span>E-commerce website: A website that allows customers to make purchases, such as an online store.</span></li>
            <li><span>Custom web application: A web application with a custom functionality, such as a CRM system or a booking system.</span></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <h3>Please note:</h3>
        <p>the prices shown here are approximate only, please contact us so we can provide you with a detailed quote.</p>
    </div>
  )
}

export default Pricing