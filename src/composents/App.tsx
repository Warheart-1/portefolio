import { Link } from 'react-router-dom';
import '../style/App.css';
import Banner from "./Banner";
import Intro from "./Intro";
import ItemsSlider from './itemsSlider';
import SliderOne from './slider/SliderOne';
import SliderTwo from './slider/SliderTwo';


function App(): JSX.Element {
  return (
    <div className="App">
      <Banner/>
        <Intro/>
        <ItemsSlider>
          <SliderOne/>
          <SliderTwo/>
        </ItemsSlider>
    </div>
  );
}

export default App;
