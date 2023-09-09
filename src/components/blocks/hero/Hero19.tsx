import { FC } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import useReplaceMe from 'hooks/useReplaceMe';

const Hero19: FC = () => {
  
  return (
    <section className="video-wrapper bg-overlay bg-overlay-gradient px-0 mt-0 min-vh-80">
      <video
        loop
        muted
        autoPlay
        playsInline
        // __idm_id__="1187841"
        id="1187841"
        src="/media/movie2.mp4"
        poster="/img/photos/movie2.jpg"
      />

      <div className="video-content">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-10 text-center text-white mx-auto">
              <h1 className="display-1 fs-54 text-white mb-5">
                <span className="rotator-zoom">Por um mundo conectado <br/>em possibilidades</span>
              </h1>

              <p className="lead fs-24 mb-0 mx-xxl-8">
                We are a digital agency specializing in web design, mobile development and seo optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero19;
