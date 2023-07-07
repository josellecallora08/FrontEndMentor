import React, {useState, useEffect} from 'react'

// Style
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.scss'

// Images
import Cover from '../../assets/images/image-web-3-desktop.jpg'
import phoneCover from '../../assets/images/image-web-3-mobile.jpg'

// Pages


export const Home = () => {

  const [windowSize, setCover] = useState(false);

 useEffect(() => {
  const showWallpaper = () => {
    if(window.innerWidth <= 768){
      setCover(true);
    } else{
      setCover(false);
    }
  };
   
    window.addEventListener('resize', showWallpaper);

    return () => {
      window.removeEventListener("resize", showWallpaper);
    }
  
 }, [windowSize])



  return (
    <div className='homeContent'>
      <div className="leftContent">
        <div className="cover">
          <img src={phoneCover} alt="Wallpaper" className='mobile_wpaper' />
          <img src={Cover} alt="Wallpaper" className='web_wpaper'/>
        </div>
        <div className="details">
          <div className="title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="left-rightContent">
            <div className="info">
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>              
            </div>
            <div className="button">
              <button>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="rightContent">
        <div className="right-rightContent">
          <h1>New</h1>
        </div>
        <div className="right-rightContent">
          <h2>Hydrogen VS Electric Cars</h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs</p>
        </div>
        <div className="right-rightContent">
          <h2>The Downsides of AI Artistry</h2>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>
        <div className="right-rightContent">
          <h2>Is VC Funding Drying Up?</h2>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;