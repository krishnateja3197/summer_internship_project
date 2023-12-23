import React from 'react'
import './Aboutus.css'

function Aboutus() {
  return (
    <div className="container">
    <h2 className='cardheading mx-2'>Meet Our Team</h2>
    <div className="profilecards">
        <div className="card border-0" style={{ width: '500px' }}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                     <img className='card-img' src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg'/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">Sai Karthik</h5>
                        <p className="card-text">Admin1</p>
                        <a href="https://www.linkedin.com/in/sai-karthik-adla-14b58a263/" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card border-0" style={{ width: '500px' }}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                <img className='card-img' src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg'/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">Surya Teja</h5>
                        <p className="card-text">Admin2</p>
                        <a href="https://www.linkedin.com/in/surya-teja-0a3988251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card border-0" style={{ width: '500px' }}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                <img className='card-img' src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg'/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">Krishna Teja</h5>
                        <p className="card-text">Admin3</p>
                        <a href="https://www.linkedin.com/in/krishna-teja-86672a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="card border-0" style={{ width: '500px' }}>
            <div className="row no-gutters">
                <div className="col-sm-5">
                <img className='card-img' src='https://icon-library.com/images/admin-icon/admin-icon-12.jpg'/>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">Sai Raj</h5>
                        <p className="card-text">Admin4</p>
                        <a href="https://www.linkedin.com/in/musapuri-sairaj-95604124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <h4 className='text-center contactus'>For any queries <a href="mailto:suryateja1212@gmail.com">Contact us?</a></h4>
</div>
      

  )
}

export default Aboutus;
