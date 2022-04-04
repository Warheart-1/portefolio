import { Link } from 'react-router-dom';
import '../style/App.css';
import Banner from "./Banner";
import Intro from "./Intro";
import ItemsSlider from './Slider';


function App(): JSX.Element {
  return (
    <div className="App">
      <Banner/>
        <Intro/>
    </div>
  );
}

export default App;
