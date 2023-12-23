import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Carousel  from 'better-react-carousel';
import { useNavigate } from 'react-router-dom';
import img1 from '../images/carouselimages/1.jpg';
import img2 from '../images/carouselimages/2.jpg';
import img3 from '../images/carouselimages/3.jpg';
import './Home.css'

function Home() {
  const navigate=useNavigate()
  const linkstyle=
  {
    color:'blue',
    cursor: 'pointer'
  }
  let schemesdisplay=()=>
  {
    navigate('/schemes')
  }
  return (
    <div>
      {/* Carousel */}
      <Carousel autoplay={5000} className='p-0' loop={true} >
        <Carousel.Item>
          <img width="100%" className="" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className="" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" className="" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="bigcontainer">
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-6 my-2">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-warning">Scheme</strong>
                <h3 className="mb-0 my-2">PM-Kisan Plan</h3>
                <p className="card-text mb-auto">The PM-KISAN plan provides a cash benefit of Rs.6000 per year per family, payable in three equal amounts of Rs.2000 each, every four months.</p>
                <a className="stretched-link" target="_blank" onClick={schemesdisplay} style={linkstyle}>More Schemes</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?farmer" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-warning">Scheme</strong>
                <h3 className="mb-0">Rythu Bandhu</h3>
                <p className="mb-auto my-2">Rs 10000 per acre grant to all Telangana farmers every year (Rs 5000 per crop season).</p>
                <a className="stretched-link" target="_blank" onClick={schemesdisplay} style={linkstyle}>More Schemes</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?farm" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-info">More about Agriculture</strong>
                <h3 className="mb-0">Benefits of Crop Rotation</h3>
                <p className="card-text mb-auto my-2">Crop rotation is defined as a “system of growing different kinds of crops in recurrent succession on the same land”.</p>
                <a href="https://greentumble.com/10-benefits-of-crop-rotation" target="_blank" className="stretched-link">Learn More</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?crop" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-info">More about Agriculture</strong>
                <h3 className="mb-0">Zaid Crops</h3>
                <p className="mb-auto my-2">Zaid crops are summer season crops. They grow for a short time period between kharif and rabi crops, mainly from March to June.</p>
                <a href="https://tractorgyan.com/tractor-industry-news-blogs/871/zaid-crop-the-most-profitable-season-for-farming" target="_blank" className="stretched-link">Learn More</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/500x700/?agriculture" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
