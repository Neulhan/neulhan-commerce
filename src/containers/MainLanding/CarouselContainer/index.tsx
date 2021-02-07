import { url } from "inspector";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.scss";

function CarouselContainer() {
  return (
    <Carousel showThumbs={false} className={styles.carousel}>
      <div
        className={styles.scene}
        style={{ backgroundImage: "url(/test_001.png)" }}
      ></div>
      <div
        className={styles.scene}
        style={{ backgroundImage: "url(/test_001.png)" }}
      ></div>
      <div
        className={styles.scene}
        style={{ backgroundImage: "url(/test_001.png)" }}
      ></div>
    </Carousel>
  );
}

export default CarouselContainer;
