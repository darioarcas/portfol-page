import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { herramientasYFrameworks, tecnologias as tecnologiasArray } from './recursos/ArrayTecnologias';

export const ProyectsCard = () => {

  const tarjetasData = [
    { 
      id: 1, 
      titulo: 'MailHub', 
      contenido: 'Web realizada con la API brindada por Microsoft, Microsoft Graph API.', 
      img: `${process.env.PUBLIC_URL}/paginas-pf/MailHub.jpg`, 
      githubUrl: "https://github.com/darioarcas/MailHub", 
      url:"https://darioarcas.github.io/MailHub/" ,
      tecnologias:["html", "css", "javascript", "react"],
      herramientas: ["visual studio code", "bootstrap", "vite"]
    },
    { 
      id: 2, 
      titulo: 'Fit Manager', 
      contenido: 'App para gestion de alumnos, para entrenador Fit', 
      img: `${process.env.PUBLIC_URL}/paginas-pf/fit-manager-1.jpg`, 
      githubUrl: "https://github.com/darioarcas/Fit-Manager", 
      url:"https://darioarcas.github.io/Fit-Manager" ,
      tecnologias:["html", "css", "javascript", "react"],
      herramientas: ["visual studio code", "bootstrap"]
    },
    { 
      id: 3, 
      titulo: 'Trabajo Freelance', 
      contenido: 'Página Web de academia de producción musical', 
      img: `${process.env.PUBLIC_URL}/paginas-pf/academia-groove.jpg`, 
      githubUrl: "https://github.com/darioarcas/Academia-groove", 
      url:"https://academiagroove.com/produccion-musical" ,
      tecnologias:["html", "css", "javascript", "react"],
      herramientas: ["visual studio code", "bootstrap"]
    },
       
  ];


  const [isVisible, setIsVisible] = useState([false, false, false]);

  const handleScroll = () => {
    const divs = ['#proyecto1', '#proyecto2', '#proyecto3'];
    divs.forEach((id, index) => {
      const div = document.querySelector(id);
      if (div) {
        const rect = div.getBoundingClientRect();
        if (rect.top >= -400 && rect.bottom <= (window.innerHeight + 400)) {
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
    else if (index === 2){
      clase[0] = `animate__animated ${isVisible[index] ? 'animate__fadeIn' : 'animate__fadeOut'} animate__fast`;

    }
    return clase[0];
  }


  const buscarTecnologia = (tecnologia)=>{
    const encontrada = tecnologiasArray.find(t => t.tecnologia === tecnologia);
    return encontrada.svg;
  }

  const buscarHerramienta = (herramienta)=>{
    const encontrada = herramientasYFrameworks.find(h => h.herramienta === herramienta);
    return encontrada.png;
  }





  return (
    <Row className="g-4">
      {tarjetasData.map((tarjeta, index) => (
        <Col id={`proyecto${index+1}`} className={clasePorIndex(index)} key={tarjeta.id} xs={12} md={6} lg={6} style={{margin:"0 auto"}}>
          <Card className="content card-bg border-0 " onClick={() => window.open(tarjeta.url)}>
            <Card.Body>
              <Card.Title className='text-info opacity-75'>{tarjeta.titulo}</Card.Title>
              <div>
                <button className='btn-github info-contacto' onClick={() => window.open(tarjeta.githubUrl)}>
                  <svg className='svg-icon-github'  width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </button>
              </div>
              <Card.Text className='incrustado text-dark opacity-50'>{tarjeta.contenido}</Card.Text>
              <div className='img-card'>
                <img src={tarjeta.img} alt='imagen Proyecto'></img>
              </div>
            </Card.Body>
            <Card.Footer className='p-0 bg-transparent'>
              <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column justify-content-center w-50'>
                  <h5 className='fw-light incrustado text-white text-center mt-1 mb-1' style={{fontSize:"12px"}}>Tecnologias</h5>
                  <div className='d-flex w-50' style={{margin:"0 auto", padding:"0"}}>
                    {tarjeta.tecnologias.map((tecnologia)=>{
                      return <div className='w-25'>{buscarTecnologia(tecnologia)}</div>;
                    })}
                  </div>
                </div>
                <div className='d-flex flex-column justify-content-center w-50 h-100'>
                  <h5 className='fw-light incrustado text-white text-center mt-1 mb-1' style={{fontSize:"12px"}}>Herramientas y Frameworks</h5>
                  <div className='d-flex w-25' style={{margin:"auto", padding:"auto"}}>
                    {tarjeta.herramientas.map((herramienta)=>{
                      return <img className='w-50' style={{margin:"0px 10px 0px 0"}} src={buscarHerramienta(herramienta)} ></img>;
                    })}
                  </div>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
