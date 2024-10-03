import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Sobre.module.css";
import Carousel from "react-bootstrap/Carousel";
import rocket from "/images/rocket.png";
import placeholder from "/images/placeholder_image.webp";
import { useEffect, useState } from "react";

function Sobre() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=mgDgWuqz5JbylmYwXpmb0scEC8W7Q7duB9t4od6S&count=10"
    );
    const data = await response.json();

    // Filtrando apenas imagens
    const filteredImages = data.filter((image) => image.media_type === "image");

    setImages(filteredImages);
  };

  useEffect(() => {
    fetchImages(); // Carrega as primeiras imagens no início
  }, []);
  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.contCarousel}>
          <Carousel className={styles.carousel} controls={false} indicators={false} interval={3000} fade>
            {images.length ? (
              images.map((image) => (
                <Carousel.Item className={styles.carouselItem} key={image.url}>
                  <img
                    src={image.url}
                    alt={image.title}
                    className={styles.carouselImage}
                  />
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item className={styles.carouselItem}>
                <img
                  src={placeholder}
                  alt="PlaceHolder image"
                  className={styles.carouselImage}
                />
              </Carousel.Item>
            )}
          </Carousel>
            <h1>API da NASA</h1>
            <img src={rocket} alt="Rocket image" className={styles.laddingImg} />
            <span>
              A API da NASA (Application Programming Interface) oferece acesso a
              uma vasta quantidade de dados e informações espaciais coletadas
              por suas missões e projetos. Ela permite a desenvolvedores
              integrarem recursos e dados fornecidos pela NASA em suas próprias
              aplicações de forma simplificada.
            </span>
        </section>
        <section className={styles.recursos}>
          <h2>Recursos disponíveis</h2>
          <ul>
            <li>
              Astronomy Picture of the Day (APOD): Imagem do dia com descrições
              astronômicas.
            </li>
            <li>Mars Rover Photos: Fotos capturadas pelos rovers de Marte.</li>
            <li>
              NASA Image and Video Library: Acesso a uma extensa coleção de
              imagens e vídeos.
            </li>
            <li>
              Near Earth Object Web Service (NeoWs): Informações sobre objetos
              próximos da Terra, como asteroides e cometas.
            </li>
            <li>
              Earth Observation Data: Dados de observação da Terra a partir de
              satélites.
            </li>
          </ul>
        </section>
        <section className={styles.beneficios}>
          <h2>Benefícios</h2>
          <span>
            A API da NASA permite que qualquer pessoa tenha acesso a dados
            científicos e espaciais sem precisar baixar grandes volumes de
            informação, facilitando a criação de projetos interativos e
            educativos.
          </span>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;
