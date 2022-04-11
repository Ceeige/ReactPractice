import { useState, useEffect } from 'react';
import './App.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.jpg';



function MySlides(props){
  useEffect (() => {
    if (slideIndex > props.slideNum){
      setSlideIndex(1);
    }
  });

  return (
    <>
      <div className="numbertext">{props.slidenum} / 3</div>
      <img src={props.image} style={{width: "100%"}}/>
      <div className="text">Caption {props.caption}</div>
    </>
  ); 
}

function App(){
  const [slideIndex, setSlideIndex] = useState(1);

  return (
    // slideshow container
    <>
    <div className="slideshow-container">

      {/* Full-width images with number and caption text */}
      <mySlides caption="Text" image={img1} slideNum={1} />
      <mySlides caption="Two" image={img2} slideNum={2} />
      <mySlides caption="Three" image={img3} slideNum={3} />

      <a className="prev" onClick={PlusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={PlusSlides(1)}>&#10095;</a>

    </div>
    <br />

    <div>
      <span className="dot" onClick={currentSlide(1)}></span>
      <span className="dot" onClick={currentSlide(2)}></span>
      <span className="dot" onClick={currentSlide(3)}></span>
    </div>
    </>
  );
}

export default App;
