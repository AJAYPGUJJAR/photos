import React, { useEffect } from 'react';
import { saveAs } from 'file-saver';
import AmEx from '../res/AmEx.PNG';

export default function ImageAmEx() {

    const downloadImage = () => {
        const imageBlob = new Blob([AmEx], { type: 'image/png' }); 
        saveAs(imageBlob, 'AmEx.jpg');
    };
    
    useEffect(() => {
    downloadImage();
    }, []);

    return (
    <div>
        <h1>Downloaded Image - AmEx.PNG</h1>
    </div>
    )

}
