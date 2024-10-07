import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Cards from "../../components/Card";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0); // Adicione um estado para o offset
  const count = 9; // Número de imagens por chamada

  const fetchImages = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=mgDgWuqz5JbylmYwXpmb0scEC8W7Q7duB9t4od6S&count=${count}`
    );
    const data = await response.json();

    // Filtrando apenas imagens
    const filteredImages = data.filter((image) => image.media_type === "image");

    setImages((prevImages) => [...prevImages, ...filteredImages]);
    setLoading(false);
    setOffset((prevOffset) => prevOffset + count); // Atualiza o offset
  };

  useEffect(() => {
    fetchImages(); // Carrega as primeiras imagens no início
  }, []);

  return (
    <>
      <Header />
      <section className={styles.container}>
        <section className={styles.cards}>
          {images.length ? (
            images.map((image) => (
              <Cards key={image.url} image={image.url} title={image.title} description={image.explanation} />
            ))
          ) : (
            <p></p>
          )}
        </section>
        <section className={styles.button}>
          <Button
            onClick={fetchImages}
            className={styles.loadMoreButton}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Ver mais"}
          </Button>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;
