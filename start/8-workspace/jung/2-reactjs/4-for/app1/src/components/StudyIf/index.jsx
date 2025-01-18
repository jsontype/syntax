export default function StudyIf({ username, isSpecial, isVIP }) {
  // JS
  const userClass = (isVIP || isSpecial) && isVIP ? 'VIP member' : isSpecial ? 'Special member' : '';

  // XML
  return (
    <div>
      <span>** {userClass} **</span>
      <span>{username || 'Guest'}</span>
    </div>
  );
}
