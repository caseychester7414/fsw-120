import React from "react"

function ContactCard(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <h1 style={{color:"red"}}>{props.contact.title}</h1>
            <h3 style={{color:"blue"}}>{props.contact.subtitle}</h3>
            <p> {props.contact.backGroundColor}</p>
            <p style={{color:"green"}}> {props.contact.information}</p>
        </div>
    )
}

export default ContactCard