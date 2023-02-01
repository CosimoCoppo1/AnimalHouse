import Carousel from 'react-bootstrap/Carousel';

const ServiceCarousel = ({services}) => { 
  return (
    <Carousel fade>
        {
            services.map((s) => { 
                return(
                    <Carousel.Item>
                    <img
                    className="carousel__service"
                    src={s.image}
                    alt=""
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