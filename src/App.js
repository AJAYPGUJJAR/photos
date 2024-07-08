import React from 'react';
import { saveAs } from 'file-saver';
import AmEx from './res/AmEx.PNG'

export default function App() {
   
  const downloadImage = () => {
    const imageBlob = new Blob([AmEx], { type: 'image/png' }); 
    saveAs(imageBlob, 'AmEx.jpg');
  };

  return (
    <div>
      <a href="AmEx.PNG" onClick={downloadImage}>Download Image - AmEx.PNG</a>
    </div>
  )
}
