import React from 'react';
import { useNavigate } from 'react-router-dom';
import './banners.css'; // Ensure the custom CSS file is imported

export default function Banners() {
  const navigate = useNavigate();

  const prevButtonStyle = {
    backgroundColor: 'rgb(29, 255, 4)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const nextButtonStyle = {
    backgroundColor: 'rgb(29, 255, 4)',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleButtonClick = () => {
    navigate('/recommendations');
  };

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/image.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image3.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" style={prevButtonStyle} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" style={nextButtonStyle} aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="flex flex-col bg-cover bg-gradient-to-b from-green-50 to-white dark:from-dark dark:to-dark h-full w-full items-center justify-center pt-10">
        <ul className="relative z-10 flex flex-wrap text-sm items-center font-mono lg:tracking-loose justify-center gap-2">
          <li title="" className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black dark:text-white opacity-90">#GOVERNMENTSCHEMES</li>
          <li title="" className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black dark:text-white opacity-90">/</li>
          <li title="" className="text-lg 2xl:text-3xl lg:text-xl tracking-tight text-black dark:text-white opacity-90">#SCHEMESFORYOU</li>
        </ul>
        <button
          aria-label="Find Schemes For You"
          className="button-custom mt-5 w-[300px]"
          title="Find Schemes For You"
          onClick={handleButtonClick}
        >
          Find Schemes For You
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right-long"
            className="svg-inline--fa fa-arrow-right-long fa-xl"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
