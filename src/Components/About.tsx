import Left from "../asset/left.png";
import Mid from "../asset/mid.png";
import Right from "../asset/right.png";
import Accurate from "../asset/accurate.png";
import Fast from "../asset/fast.png";
import Private from "../asset/privacy.png";
import Data from "../asset/data.png";
import '../App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function About() {
    return(
        <div className='App'>
          <Header/>
          <div className='aboutContent'>
              <h2 className='pneuScan'>What is PneuScan</h2>
              <div className='info'>
                PneuScan is an innovative AI-driven tool that accurately analyzes lung X-ray images to detect pneumonia. We provide a quick, reliable, and user friendly solution for detecting pneumonia.
              </div>
              <br />
              <div className='topContent'>
                <h2>How Does PneuScan Work</h2>
              </div>
              <div className='botContent'>
                <div className='box'>
                  <img src={Left} className="left" alt=""/>
                  <h3>1. Upload X-ray images</h3>
                </div>
                <div className='box'>
                  <img src={Mid} className="mid" alt=""/>
                  <h3>2. AI analyzing</h3>
                </div>
                <div className='box'>
                  <img src={Right} className="right" alt=""/>
                  <h3>3. Get your result</h3>
                </div>
              </div>
          </div>
          <div className='aboutContent2'>
              <h2>Why use PneuScan</h2>
              <div className='featuresContainer'>
                <div className='topFeatures'>
                  <div className='features'>
                    <div className='featuresPic'>
                      <img src={Accurate} className="featPic" alt=""/>
                      <h3>High Accuracy</h3>
                    </div>
                    <div className='featuresContent'>Our advanced CNN AI model boasts an impressive 95% accuracy, ensuring that you get precise and reliable results every time.</div>
                  </div>
                  <div className='features'>
                    <div className='featuresPic'>
                      <img src={Fast} className="featPic" alt=""/>
                      <h3>Fast Result</h3>
                    </div>
                    <div className='featuresContent'>Experience near-instant results, as our cutting-edge technology processes your images in just a few seconds for a seamless user experience.</div>
                  </div>
                </div>
                <div className='botFeatures'>
                <div className='features'>
                    <div className='featuresPic'>
                      <img src={Private} className="featPic" alt=""/>
                      <h3>Privacy Maintained</h3>
                    </div>
                    <div className='featuresContent'>We prioritize your privacy by never storing any of the images you upload, giving you peace of mind with every use.</div>
                  </div>
                  <div className='features'>
                    <div className='featuresPic'>
                      <img src={Data} className="featPic" alt=""/>
                      <h3>Huge Dataset</h3>
                    </div>
                    <div className='featuresContent'>Our AI has been trained on a vast and diverse dataset, allowing it to make highly accurate predictions based on a broad spectrum of data.</div>
                  </div>
                </div>
              </div>
          </div>
          <Footer/>
        </div>
    );
}

export default About;
