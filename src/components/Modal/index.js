import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const { name, category, description, index } = currentPhoto;
    return (
        <div className='modalBackDrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name} </h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt='current category' />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type='button'>
                    x Close
                </button>
            </div>
        </div>
    );
}


export default Modal