import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';
import AmEx from './res/AmEx.png'

export default function App() {

  const downloadImage = () => {
      const imageBlob = new Blob([AmEx], { type: 'image/png' }); 
      saveAs(imageBlob, 'AmEx.png');
  };
    
  useEffect(() => {
  downloadImage();
  }, []);

  return (
  <div>
      <h1>Downloaded Image - AmEx.png</h1>
  </div>
  )

}
