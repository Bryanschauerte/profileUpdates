import React from 'react';

const GalleryHeader = ({_resetHandle, text, returnInfo=null}) => {

  return (<div
            onClick={_resetHandle? _resetHandle.bind(null, returnInfo): ''}
            className='galleryHeader'>
              <h3>
                {'<'}{text}{'>'}
              </h3>
          </div>)
        }

export default GalleryHeader;
