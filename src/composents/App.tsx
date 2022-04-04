import { Link } from 'react-router-dom';
import '../style/App.css';
import Banner from "./Banner";
import Description from './Description';
import Intro from "./Intro";
import ItemsSlider from './Slider';


function App(): JSX.Element {
  return (
    <div className="App">
        <Banner/>
        <Intro/>
        <Description/>
    </div>
  );
}

export default App;
