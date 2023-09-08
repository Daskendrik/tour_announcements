import './style/header.css';

const Header = (props) => {
  const { backgroundUrl, borderColor, textColor } = props;
  const styleHeder = {
    background: `${backgroundUrl}`,
    borderTop: `4px solid ${borderColor}`,
    borderBottom: `4px solid ${borderColor}`,
  };

  const styleP = {
    color: `${textColor}`,
  };
  return (
    <div className="header" style={styleHeder}>
      <p style={styleP}>
        Экскурсионный тур <br></br> «Школьная классик»
      </p>
      <h3 style={styleP}>Ближайщие даты: 21.10.23-22.10.23 </h3>
    </div>
  );
};

export default Header;
