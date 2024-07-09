import React from "react";
import styles from "../../styles/Home.module.css";
import CartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeContents}>
          <div className={styles.profileContainer}></div>
          <div className={styles.mainContainer}>
            <div className={styles.productContainer}>
              <div className={styles.productHeader}>
                <h1>Jordan 9 Retro</h1>
                <CartIcon className={styles.CartIcon} />
              </div>

              <div className={styles.productImage}>
                <Image
                  src="/jordan.jpg"
                  alt="product-image"
                  className={styles.image}
                  width={900}
                  height={900}
                />
              </div>

              <div className={styles.productDescription}>
                <div className={styles.description}>
                  <h1>Price:</h1>
                  <h1>Ghc 260.00</h1>
                </div>

                <div className={styles.description}>
                  <h1>Description:</h1>
                  <h1>41, 54, 23, 56, 76</h1>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productHeader}>
                <h1>Jordan 9 Retro</h1>
                <CartIcon className={styles.CartIcon} />
              </div>

              <div className={styles.productImage}>
                <Image
                  src="/jordan.jpg"
                  alt="product-image"
                  className={styles.image}
                  width={900}
                  height={900}
                />
              </div>

              <div className={styles.productDescription}>
                <div className={styles.description}>
                  <h1>Price:</h1>
                  <h1>Ghc 260.00</h1>
                </div>

                <div className={styles.description}>
                  <h1>Description:</h1>
                  <h1>41, 54, 23, 56, 76</h1>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productHeader}>
                <h1>Jordan 9 Retro</h1>
                <CartIcon className={styles.CartIcon} />
              </div>

              <div className={styles.productImage}>
                <Image
                  src="/jordan.jpg"
                  alt="product-image"
                  className={styles.image}
                  width={900}
                  height={900}
                />
              </div>

              <div className={styles.productDescription}>
                <div className={styles.description}>
                  <h1>Price:</h1>
                  <h1>Ghc 260.00</h1>
                </div>

                <div className={styles.description}>
                  <h1>Description:</h1>
                  <h1>41, 54, 23, 56, 76</h1>
                </div>
              </div>
            </div>
            <div className={styles.item}></div>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
      </div>
    </>
  );
}

export default Index;
