import React from 'react';
// import Subscribeforupdates from"../../../../assets/productDitils/subscribe-shape-1 1.png";

const Subscribeforupdates = () => {
    // const containerStyle = {
    //     background: `url(${Subscribeforupdates}), lightgray 50% / cover no-repeat`,
    
    //   };
    return (
        <div >
          


            <div className='d-flex'>
                <div>
                    <h4>Subscribe for updates</h4>
                    <p>Subscribe for exclusive early sale access and new arrivals.</p>
                </div>


                <div>
                <input
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />

                    <p>I agree to receive updates from CART24</p>

                </div>
                 
            </div>
            
        </div>
    );
};

export default Subscribeforupdates;