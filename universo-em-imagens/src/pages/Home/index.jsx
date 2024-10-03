import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function Home() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0); // Adicione um estado para o offset
    const count = 9; // Número de imagens por chamada

    const fetchImages = async () => {
        setLoading(true);
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=mgDgWuqz5JbylmYwXpmb0scEC8W7Q7duB9t4od6S&count=${count}`);
        const data = await response.json();

        // Filtrando apenas imagens
        const filteredImages = data.filter(image => image.media_type === "image");

        setImages((prevImages) => [...prevImages, ...filteredImages]);
        setLoading(false);
        setOffset(prevOffset => prevOffset + count); // Atualiza o offset
    };

    useEffect(() => {
        fetchImages(); // Carrega as primeiras imagens no início
    }, []);

    return (
        <>
            <Header />
            <section className={styles.container}>
                {images.length ? (
                    images.map((image) => (
                        <Card key={image.url} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image.url} className={styles.img} />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}
                <Button onClick={fetchImages} className={styles.loadMoreButton} disabled={loading}>
                    {loading ? "Carregando..." : "Ver mais"}
                </Button>
            </section>
            <Footer />
        </>
    );
}

export default Home;
