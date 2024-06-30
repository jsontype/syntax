import {memo} from 'react'

const Card = memo((props) => <div className={`card ${props.className ? props.className : ''}`} style={props.style} > {props.children} </div>)
Card.Header = memo((props) => <div className={`card-header d-flex justify-content-between ${props.className ? props.className : ''}`}> {props.children} </div>)
Card.Body = memo((props) => <div className={`card-body ${props.className ? props.className :''}`}> {props.children} </div>)
Card.Footer = memo((props) => <div className={`card-footer ${props.className}`}> {props.children} </div>)
Card.Header.Title = memo((props) => <div className={`header-title ${props.className ? props.className : ''}`}> {props.children} </div>)
Card.Header.Action = memo((props) => <div className={`header-action ${props.className ? props.className : ''}`}> {props.children} </div>)

Card.displayName="Card"
export default Card;