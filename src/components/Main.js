require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

// get images data
var imageData = require('../data/imageData.json');

//translate images data
imageData = (function (imageDateArr) {
  for(var i=0 ;i < imageDateArr.length ; i++){
    var singleImageData = imageDateArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDateArr[i] = singleImageData;
  }
  return imageDateArr;
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="image-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
