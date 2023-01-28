import React from 'react'
import './pricing.css'
import { useTranslation } from 'react-i18next'

function Pricing() {
  const { t } = useTranslation()

  return (
    <div className='pricing'>
        <h1 className='pricingTitle'>{t("Pricing")}</h1>
        <table>
            <tr><th>{t("Service")}</th><th>{t("Difficulty")}</th><th>{t("Complexity")}</th><th>{t("Price")}</th></tr>
            <tr><td>{t("Simple one-page website")}</td>
            <td>{t("Low")}</td><td>{t("Low")}</td>
            <td>{t("$500 - $1000")}</td></tr>
            <tr><td>{t("Multi-page website")}</td><td>{t("Medium")}</td><td>{t("Low")}</td><td>{t("$1000 - $3000")}</td></tr>
            <tr><td>{t("E-commerce website")}</td><td>{t("High")}</td><td>{t("Medium")}</td><td>{t("$3000 - $5000")}</td></tr>
            <tr><td>{t("Custom web application")}</td><td>{t("High")}</td><td>{t("High")}</td><td>{t("$5000+")}</td></tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <ul>
            <li><span>{t("Simple one-page website: A one-page website with a simple design and limited functionality, such as a contact form or an embedded Google map.")}</span></li>
            <li><span>{t("Multi-page website: A website with multiple pages, such as a blog, portfolio, or services page.")}</span></li>
            <li><span>{t("E-commerce website: A website that allows customers to make purchases, such as an online store.")}</span></li>
            <li><span>{t("Custom web application: A web application with a custom functionality, such as a CRM system or a booking system.")}</span></li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <h3>{t("Please note:")}</h3>
        <p>{t("the prices shown here are approximate only, please contact us so we can provide you with a detailed quote.")}</p>
    </div>
  )
}

export default Pricing