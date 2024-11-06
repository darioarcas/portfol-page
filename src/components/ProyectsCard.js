import { Card, Row, Col } from 'react-bootstrap';

export const ProyectsCard = () => {
  const tarjetasData = [
    { id: 1, titulo: 'Gif Browser', contenido: 'Contenido de la tarjeta 1', img: `${process.env.PUBLIC_URL}/paginas-pf/gif-browser.jpg` },
    { id: 2, titulo: 'Comic', contenido: 'Contenido de la tarjeta 2', img: `${process.env.PUBLIC_URL}/paginas-pf/Comic.jpg` },
    { id: 3, titulo: 'Fit Manager', contenido: 'Contenido de la tarjeta 3', img: `${process.env.PUBLIC_URL}/paginas-pf/fit-manager-1.jpg` },
  ];

  return (
    <Row className="g-4">
      {tarjetasData.map(tarjeta => (
        <Col key={tarjeta.id} xs={12} md={6} lg={6} style={{margin:"0 auto"}}>
          <Card style={{ width: '95%' , margin:"7% auto", maxWidth: "500px", height:"300px", overflow:"hidden", padding: "0 auto"}} className='content card-bg border-0'>
            <Card.Body>
              <Card.Title className='text-info opacity-75'>{tarjeta.titulo}</Card.Title>
              <Card.Text className='incrustado opacitu-75 text-white'>{tarjeta.contenido}</Card.Text>
              <img src={tarjeta.img} alt='imagen proyecto' className='w-100'></img>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
