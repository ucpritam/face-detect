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
      box: []
    }
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    var calculateface = data.outputs[0].data.regions; 
    return (calculateface.map((calculateface => {
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
  this.setState({imageUrl: this.state.input});
  app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
}

render() {
  return (
    <div className="App">
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
    </div>
  );
}
}

export default App;
