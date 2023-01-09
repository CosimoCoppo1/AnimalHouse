import React from 'react'
import {
    MDBFooter,
  } from 'mdb-react-ui-kit';

const Footer = () => {

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
              <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <p className='text-dark' >
                    site212225.tw.cs.unibo.it
                </p>
              </div>
            </MDBFooter>      
    )
}
    
export default Footer