import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai'


const app = new Clarifai.App ({
  apiKey: '33ae34510ce844dd81ba2294c21d84c4'
})

function detectFace(imageUrl) {
  return app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
    .then(response => {
      const faceData = response.outputs[0].data;
      if (faceData.regions && faceData.regions.length > 0) {
        return faceData.regions.map(region => region.region_info.bounding_box);
      } else {
        return [];
      }
    })
    .catch(err => console.log(err));
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  onUrlSubmit = () => {
    this.onButtonSubmit(this.state.input);
  }  

  onButtonSubmit = (imageUrl) => {
    return detectFace(imageUrl)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }
  

  render() {
    return (
      <>
        <div className='App'>
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} 
          />
          {/* <FaceRecognition 
          /> */}
        </div>
        <div className='Particles'>
          <ParticlesBg type="cobweb" num={300} color='#ffffff' bg={true} />
        </div>
      </>
    );
  }
}

export default App;
