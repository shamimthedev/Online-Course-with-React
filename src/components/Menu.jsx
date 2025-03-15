const Menu = ({className, mText}) => {
  return (
    <ul>
        <li className={`${className}`}>{mText}</li>
    </ul>
  );
};

export default Menu;