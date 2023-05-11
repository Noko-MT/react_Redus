import Carousel from 'react-bootstrap/Carousel';

function CaruselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/1200px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Júpiter</h3>
          <p>
          Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/As08-16-2593.jpg/1024px-As08-16-2593.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tierra</h3>
          <p> Es el más denso y el quinto mayor de los ocho planetas del sistema solar. También es el mayor de los cuatro terrestres o rocosos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/1024px-Schiaparelli_Hemisphere_Enhanced.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Marte </h3>
          <p>
          Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaruselComponent;