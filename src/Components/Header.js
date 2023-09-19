import './style/header.css';

const Header = (props) => {
  const { headImg, borderColor, textColor, text } = props;
  const styleHeder = {
    background: `${headImg}`,
    borderTop: `4px solid ${borderColor}`,
    borderBottom: `4px solid ${borderColor}`,
    backgroundPosition: `center top`,
    backgroundPositionY: `10%`,
    backgroundPepeat: `no-repeat`,
    backgroundSize: `100%`,
    backgroundAttachment: `scroll`,
    position: `relative`,
  };

  const styleP = {
    color: `${textColor}`,
  };
  return (
    <div className="header" style={styleHeder}>
      <p style={styleP}>
        Экскурсионный тур <br></br> {text}
      </p>
      <h3 style={styleP}>Ближайщие даты: 21.10.23-22.10.23 </h3>
    </div>
  );
};

export default Header;
