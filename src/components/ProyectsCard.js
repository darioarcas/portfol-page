import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export const ProyectsCard = () => {

  const tarjetasData = [
    { id: 1, titulo: 'Gif Browser', contenido: 'Introduce una palabra y busca los mejores gifs', img: `${process.env.PUBLIC_URL}/paginas-pf/gif-browser.jpg`, githubUrl: "https://github.com/darioarcas/Gif-App", url:"https://darioarcas.github.io/Gif-App/" },
    { id: 2, titulo: 'Comic', contenido: 'Contenido de Heroes de Marvel y DC mas un buscador', img: `${process.env.PUBLIC_URL}/paginas-pf/Comic.jpg`, githubUrl: "https://github.com/darioarcas/Comic-Proyect", url:"https://darioarcas.github.io/Comic-Proyect/" },
    { id: 3, titulo: 'Fit Manager', contenido: 'App para gestion de alumnos, para entrenador Fit', img: `${process.env.PUBLIC_URL}/paginas-pf/fit-manager-1.jpg`, githubUrl: "https://github.com/darioarcas/Fit-Manager", url:"https://darioarcas.github.io/Fit-Manager" },
  ];


  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleScroll = () => {
    const divs = ['#proyecto1', '#proyecto2', '#proyecto3'];
    divs.forEach((id, index) => {
      const div = document.querySelector(id);
      if (div) {
        const rect = div.getBoundingClientRect();
        if (rect.top >= -200 && rect.bottom <= (window.innerHeight + 200)) {
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        } else {
          setIsVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = false;
            return newVisibility;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const clasePorIndex = (index)=>{
    const clase = [];
    if(index === 0){
      clase[0] = `animate__animated ${isVisible[index] ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'} animate__fast`;
    }
    else if(index === 1){
      clase[0] = `animate__animated ${isVisible[index] ? 'animate__fadeInRight' : 'animate__fadeOutRight'} animate__fast`;

    }
    else if (index == 2){
      clase[0] = `animate__animated ${isVisible[index] ? 'animate__fadeIn' : 'animate__fadeOut'} animate__fast`;

    }
    return clase[0];
  }

  return (
    <Row className="g-4">
      {tarjetasData.map((tarjeta, index) => (
        <Col id={`proyecto${index+1}`} className={clasePorIndex(index)} key={tarjeta.id} xs={12} md={6} lg={6} style={{margin:"0 auto"}}>
          <Card style={{ width: '95%' , margin:"7% auto", maxWidth: "500px", height:"500px", overflow:"hidden", padding: "0 auto"}} className="content card-bg border-0" onClick={() => window.open(tarjeta.url)}>
            <Card.Body>
              <Card.Title className='text-info opacity-75'>{tarjeta.titulo}</Card.Title>
              <div>
                <button className='btn-github info-contacto' onClick={() => window.open(tarjeta.githubUrl)}>
                <svg className='svg-icon-github'  width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                  <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                </svg>
                  {/* <svg  className='svg-icon' height="55" viewBox="0 0 50 65" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3z" fill="#8c181a"/><path d="m56 20.4v1h-12.8s-6.3-1.3-6.1-6.7c0 0 .2 5.7 6 5.7z" fill="#6b0d12"/><g fill="#fff"><path d="m37.1 0v14.6c0 1.7 1.1 5.8 6.1 5.8h12.8z" opacity=".5"/><path d="m14.9 49h-3.3v4.1c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7v-10.2c0-.6.5-1.1 1.1-1.1h3.7c2.4 0 3.8 1.7 3.8 3.6 0 2-1.4 3.6-3.8 3.6zm-.1-5.9h-3.2v4.6h3.2c1.4 0 2.4-.9 2.4-2.3s-1-2.3-2.4-2.3zm10.4 10.7h-3c-.6 0-1.1-.5-1.1-1.1v-9.8c0-.6.5-1.1 1.1-1.1h3c3.7 0 6.2 2.6 6.2 6s-2.4 6-6.2 6zm0-10.7h-2.6v9.3h2.6c2.9 0 4.6-2.1 4.6-4.7.1-2.5-1.6-4.6-4.6-4.6zm16.3 0h-5.8v3.9h5.7c.4 0 .6.3.6.7s-.3.6-.6.6h-5.7v4.8c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7v-10.2c0-.6.5-1.1 1.1-1.1h6.2c.4 0 .6.3.6.7.1.3-.2.6-.6.6z"/></g></svg> */}
                </button>
              </div>
              <Card.Text className='incrustado text-dark opacity-50'>{tarjeta.contenido}</Card.Text>
              <img src={tarjeta.img} alt='imagen Proyecto' className='w-100'></img>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
