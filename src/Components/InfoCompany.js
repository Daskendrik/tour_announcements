import './style/tour-plan.css';
import icon from '../img/icon-company.svg';

const InfoCompany = () => {
  return (
    <div className="top">
      <div className="logo">
        <img src={`${icon}`} alt=""></img>
      </div>
      <div className="contact">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Почта:</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  value="dobrotour@bk.ru"
                  readOnly
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="tel">Телефон:</label>
              </td>
              <td>
                <input type="text" value="+7 (916) 603-84-34" readOnly></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoCompany;
