import './App.css';
import InfoCompany from './Components/InfoCompany';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <InfoCompany />
      <Header
        backgroundUrl="url('https://ozernyi-sochi.ru/wp-content/uploads/c/e/d/ced2c53014b4dddb4231d27bb7a7f959.jpeg')"
        borderColor="red"
        textColor="blue"
      />
    </div>
  );
}

export default App;
