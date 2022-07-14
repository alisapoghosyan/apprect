import Carousel from 'react-bootstrap/Carousel';

function Slider({ changeLanguages, t }) {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://jssors8.azureedge.net/demos/img/gallery/980x380/002.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{t('welcome')}</h3>
          <p>{t('slider-p1')}</p>
          <div className='btn'>{t('slider-btn')}</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://thi.ucsc.edu/wp-content/uploads/jssor-slider/jssor.com/demos/img/gallery/980x380/004.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{t('second')}</h3>
          <p>{t('slider-p2')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{t('third')}</h3>
          <p>{t('slider-p3')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;