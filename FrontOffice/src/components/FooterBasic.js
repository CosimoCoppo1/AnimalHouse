import React from 'react'
import {
    MDBFooter,
  } from 'mdb-react-ui-kit';

const Footer = () => {

    return (
        <MDBFooter bgColor='light' className='text-center text-white'>
              <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 128, 0, 0.9)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <p className='text-white' >
                    site212225.tw.cs.unibo.it
                </p>
              </div>
            </MDBFooter>      
    )
}
    
export default Footer