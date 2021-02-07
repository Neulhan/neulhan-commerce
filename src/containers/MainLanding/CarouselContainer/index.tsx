import { url } from "inspector";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./index.module.scss";
import Link from "next/link";

function CarouselContainer() {
  return (
    <Carousel
      showThumbs={false}
      className={styles.carousel}
      autoPlay
      infiniteLoop
      showStatus={false}
    >
      <Link href="/auth/mypage">
        <a
          className={styles.scene}
          style={{ backgroundImage: "url(/carousel/carousel1.png)" }}
        ></a>
      </Link>
      <Link href="/auth/mypage">
        <a
          className={styles.scene}
          style={{ backgroundImage: "url(/carousel/carousel2.png)" }}
        ></a>
      </Link>
    </Carousel>
  );
}

export default CarouselContainer;
