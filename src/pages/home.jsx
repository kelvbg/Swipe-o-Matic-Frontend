import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import "../index.css"
export default function App() {

  return (
    <header>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=800')", height: "1000px" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Swipe-o-Matic!</h1>
              <h4 className='mb-3'>Make your bookkeeping for events easier, faster and stress-free!</h4>
              <MDBBtn tag="a" outline size='lg' href='/login'>
                Sign In
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}