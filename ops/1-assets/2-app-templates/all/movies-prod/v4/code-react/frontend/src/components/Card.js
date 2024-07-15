import React from 'react'

const Card = (props) => <div className={`iq-card ${props.className ? props.className : ''}`}> {props.children} </div>
Card.Header = (props) => <div className={`iq-card-header d-flex justify-content-between ${props.className ? props.className : ''}`}> {props.children} </div>
Card.Body = (props) => <div className={`iq-card-body ${props.className ? props.className :''}`}> {props.children} </div>
Card.Footer = (props) => <div className="iq-card-footer"> {props.children} </div>
Card.Header.Title = (props) => <div className={`iq-header-title ${props.className ? props.className : ''}`}> {props.children} </div>
Card.Header.Action = (props) => <div className={`iq-header-action ${props.className ? props.className : ''}`}> {props.children} </div>

export default Card;