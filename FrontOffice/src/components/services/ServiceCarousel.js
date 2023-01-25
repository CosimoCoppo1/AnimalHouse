import Carousel from 'react-bootstrap/Carousel';

const ServiceCarousel = ({services}) => {
  return (
    <Carousel fade>
        {
            services.map((s) => {
                return(
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={s.image}
                    alt="servizi animali"
                    />
                    <Carousel.Caption>
                      <h4>{s.name}</h4>
                      <p>{s.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>  
                )
            })
        }
    </Carousel>
  );
}

export default ServiceCarousel