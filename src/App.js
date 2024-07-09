import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';
import AmEx from './res/AmEx.jpeg'

export default function App() {

  const downloadImage = () => {
      // const imageBlob = new Blob([AmEx], { type: 'image/jpeg' }); 
      console.log(AmEx.slice(0,100));
      // saveAs(imageBlob, 'AmEx.jpeg');
      fetchAndSaveImage();
  };
  async function fetchAndSaveImage() {
    const imageUrl = '/photos/static/media/AmEx.534f22981f29f9afb307.jpeg'; // Replace with actual path
  
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
  
      const imageBlob = await response.blob();
  
      // Now AmEx contains the actual image data
      saveAs(imageBlob, 'AmEx.jpeg');
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }
    
  useEffect(() => {
  downloadImage();
  }, []);

  return (
  <div>
      <h1>Downloaded Image - AmEx.png</h1>
  </div>
  )

}
