import React, { Component } from 'react';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0ef3825133c4438492b465ad3f88819b'
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: [],
      calculateface: []
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    this.setState({'calculateface': data.outputs[0].data.regions})
    // var calculateface = data.outputs[0].data.regions; 

    return (this.state.calculateface.map((calculateface => {
      return {
          leftCol: calculateface.region_info.bounding_box.left_col * width,
          topRow: calculateface.region_info.bounding_box.top_row * height,
          rightCol: width - (calculateface.region_info.bounding_box.right_col * width),
          bottomRow: height - (calculateface.region_info.bounding_box.bottom_row * height)
        }
    })))
  }

displayFaceBox = (box) => {
  this.setState({box: box});
}

onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

onButtonSubmit = () => {
  document.getElementById("error").innerHTML="";
  this.setState({'calculateface' : []});
  this.setState({'box' : []});
  this.setState({imageUrl: this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => 
      document.getElementById("error").innerHTML="Invalid URL/ Image does not contain any face.");
}

render() {
  return (
    <div className="App">
     <div className="white b f6 mt2 credit">{"Created by Pritam Majumder"}</div>
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />    
     <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
     <b id='error' className='white'></b>
    </div>
  );
}
}

export default App;
