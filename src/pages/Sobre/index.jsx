import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Sobre.module.css";
import Carousel from "react-bootstrap/Carousel";
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
          <Carousel
            className={styles.carousel}
            controls={false}
            indicators={false}
            interval={3000}
            fade
          >
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
          <span className={styles.spanCarousel}>
            A API da NASA (Application Programming Interface) oferece acesso a
            uma vasta quantidade de dados e informações espaciais coletadas por
            suas missões e projetos. Ela permite a desenvolvedores integrarem
            recursos e dados fornecidos pela NASA em suas próprias aplicações de
            forma simplificada.
          </span>
        </section>
        <section className={styles.recursos}>
          <h2>Recursos disponíveis</h2>

          <p>
            <strong>Astronomy Picture of the Day (APOD)</strong>: Este recurso
            apresenta diariamente uma imagem ou vídeo do espaço, acompanhados de
            uma descrição escrita por um especialista em astronomia. O APOD é
            uma fonte de inspiração e conhecimento, permitindo que os usuários
            explorem fenômenos astronômicos variados, desde{" "}
            <strong>galáxias distantes </strong>
            até <strong>eclipses</strong>. Essa experiência visual promove uma
            conexão mais profunda com o universo, despertando a curiosidade
            sobre a<strong> astronomia</strong> e a ciência do espaço.
          </p>
          <p>
            <strong>Mars Rover Photos</strong>: Através desse recurso, é
            possível acessar uma coleção impressionante de fotografias tiradas
            pelos rovers que exploram a superfície de Marte. Essas imagens
            documentam a <strong>geologia </strong>e a <strong>atmosfera</strong>{" "}
            do planeta vermelho, oferecendo evidências de antigas condições
            habitáveis. Esse banco de dados é valioso para educadores e
            entusiastas, proporcionando uma visão fascinante das missões de
            exploração planetária e contribuindo para a compreensão da
            possibilidade de <strong>vida em Marte</strong>.
          </p>
          <p>
            <strong>NASA Image and Video Library</strong>: Este recurso oferece
            acesso a uma vasta coleção de <strong>imagens</strong> e{" "}
            <strong>vídeos</strong> relacionados a missões da NASA, exploração
            espacial e astronautas. Com conteúdos que vão desde
            <strong> lançamentos históricos</strong> de foguetes até missões
            atuais, a biblioteca é constantemente atualizada. Esse rico acervo
            visual pode ser utilizado para fins educacionais e criativos,
            permitindo que os usuários aprofundem seus conhecimentos sobre a
            exploração espacial e as <strong>inovações tecnológicas</strong>.
          </p>
          <p>
            <strong>Near Earth Object Web Service (NeoWs)</strong>: Este serviço
            fornece informações detalhadas sobre objetos próximos da Terra, como
            <strong> asteroides</strong> e <strong>cometas</strong>. Com dados
            sobre suas trajetórias, tamanhos e características, o NeoWs é
            crucial para monitorar e entender os riscos que esses corpos
            celestes podem representar. Além disso, esse recurso ajuda a
            conscientizar sobre a importância da observação e do estudo de
            objetos que podem influenciar a <strong>segurança</strong> do nosso
            planeta e o futuro da humanidade.
          </p>
          <p>
            <strong>Earth Observation Data</strong>: Este recurso disponibiliza
            dados coletados por <strong>satélites</strong> que observam a Terra,
            oferecendo insights valiosos sobre <strong>clima</strong>, desastres
            naturais e mudanças ambientais. As informações abrangem desde a
            qualidade do ar até o desmatamento e o monitoramento de desastres,
            sendo essenciais para pesquisadores, formuladores de políticas e
            cidadãos. Esses dados promovem a compreensão do nosso planeta,
            incentivando ações <strong>sustentáveis</strong> e informadas para
            proteger o meio ambiente.
          </p>
        </section>
        <section className={styles.beneficios}>
          <h2>Benefícios</h2>
          <p>
            A <strong>API da NASA</strong> democratiza o acesso a dados
            científicos e espaciais, permitindo que qualquer pessoa explore
            informações sem precisar baixar grandes volumes de dados. Isso
            facilita a criação de projetos interativos e educativos, capacitando{" "}
            <strong>desenvolvedores</strong>, <strong>educadores</strong> e
            entusiastas. A integração de dados reais da NASA em aplicativos
            incentiva o aprendizado sobre o universo, promovendo um maior
            interesse pela ciência e pela <strong>exploração espacial</strong>{" "}
            entre o público em geral.
          </p>
          <p>
            A flexibilidade e a abrangência da API estimulam a{" "}
            <strong>inovação</strong> e a<strong> criatividade</strong>,
            possibilitando o desenvolvimento de aplicativos variados, desde
            simuladores de exploração até plataformas educacionais. Com dados da
            NASA, os projetos podem inspirar curiosidade em{" "}
            <strong>ciência</strong>, <strong>tecnologia</strong>,{" "}
            <strong>engenharia</strong> e <strong>matemática</strong> (STEM).
            Essa abordagem contribui para a conscientização sobre a exploração
            espacial e os desafios enfrentados pela humanidade, engajando
            usuários de todas as idades.
          </p>
          <p>
            A API também oferece oportunidades únicas para colaboração em
            <strong> pesquisas</strong> e desenvolvimento de experiências de{" "}
            <strong>visualização de dados</strong>. Ao integrar dados
            científicos em aplicações, os usuários podem criar experiências
            interativas que despertam interesse e compreensão <strong>sobre o
            cosmos</strong>. Esses projetos não apenas ampliam o
            conhecimento, mas também promovem um diálogo sobre a importância da
            exploração espacial e da proteção do nosso planeta, incentivando
            ações conscientes e informadas.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Sobre;
