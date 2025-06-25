import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.mobileImage}
          src="/assets/images/image-product-mobile.jpg"
          alt="Product Image"
          width={350}
          height={342}
          priority
        />
        <Image
          className={styles.desktopImage}
          src="/assets/images/image-product-desktop.jpg"
          alt="Product Image"
          width={300}
          height={456}
          priority
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>Perfume</span>
        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumier-Creator for the House of CHANEL.
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>$149.99</span>
          <span className={styles.oldPrice}>$169.99</span>
        </div>
        <button className={styles.addButton}>
          <span className={styles.cartIcon} aria-hidden="true"></span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
