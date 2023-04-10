import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section>
        <p className='f3'>{'This Magic Brain will detect faces in your pictures. Give it a try!'}</p>
        <div className='DivForm'>
                <input 
                className='f4 pa2 w-70 center' id='inputimage' type='text' onChange={onInputChange} 
                />
                <button 
                className='w-30 center grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
                >Detect</button>
        </div>
        </section>
    )
}

export default ImageLinkForm