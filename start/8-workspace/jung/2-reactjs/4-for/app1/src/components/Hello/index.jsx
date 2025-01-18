import './style.css';

// JSX 문법: js + xml(html)
function Hello({ username, handleClick }) {
  // JS
  const usernameText = username || 'Stranger'

  const onClick = () => {
    handleClick ? handleClick() : alert('NO CLICK EVENT')
  }

  // XML
  return (
    <div className="red" onClick={onClick}>Hello {usernameText}!</div>
  );
}

export default Hello;
