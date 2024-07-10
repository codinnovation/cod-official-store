import React from "react";
import styles from "../../styles/Home.module.css";
import CartIcon from "@mui/icons-material/AddShoppingCart";
import Image from "next/image";
import Person from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import DeckIcon from "@mui/icons-material/Deck";
import ComputerIcon from "@mui/icons-material/Computer";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import DiamondIcon from "@mui/icons-material/Diamond";
import RadioIcon from "@mui/icons-material/Radio";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MoreIcon from "@mui/icons-material/More";
import { LogoutRounded } from "@mui/icons-material";


function Index() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeContents}>
          <div className={styles.categoriesContainer}>
            <div className={styles.category}>
              <SpaIcon className={styles.catIcon} />
              <h1>Health & Beauty</h1>
            </div>

            <div className={styles.category}>
              <DeckIcon className={styles.catIcon} />
              <h1>Home & Office</h1>
            </div>

            <div className={styles.category}>
              <ComputerIcon className={styles.catIcon} />
              <h1>Computing</h1>
            </div>

            <div className={styles.category}>
              <FoodBankIcon className={styles.catIcon} />
              <h1>Supermarket</h1>
            </div>

            <div className={styles.category}>
              <DiamondIcon className={styles.catIcon} />
              <h1>Fashion</h1>
            </div>

            <div className={styles.category}>
              <RadioIcon className={styles.catIcon} />
              <h1>Electronics</h1>
            </div>

            <div className={styles.category}>
              <FitnessCenterIcon className={styles.catIcon} />
              <h1>Sporting Goods</h1>
            </div>

            <div className={styles.category}>
              <MoreIcon className={styles.catIcon} />
              <h1>Other Categories</h1>
            </div>
          </div>
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
                <h1>Lenovo ThinkPad</h1>
                <CartIcon className={styles.CartIcon} />
              </div>

              <div className={styles.productImage}>
                <Image
                  src="/computer.jpg"
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
                  <h1>i7-8650U, 16GB RAM, 500GB SSD, </h1>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productHeader}>
                <h1>Mini Fridge</h1>
                <CartIcon className={styles.CartIcon} />
              </div>

              <div className={styles.productImage}>
                <Image
                  src="/fridge.jpg"
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
                  <h1>Mini Fridge with Freezer</h1>
                </div>
              </div>
            </div>
            <div className={styles.item}></div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.profilePhoto}>
              <Person className={styles.photo} />
            </div>
            <div className={styles.profileName}>
              <h1>Kwabena Sakyi Asumadu</h1>
            </div>

            <div className={styles.profileEmail}>
              <h1>kwabenasakyi450@gmail.com</h1>
            </div>

            <div className={styles.profileCountry}>
              <h1>Ghana, Kumasi</h1>
            </div>

            <div className={styles.signOut}>
              <LogoutRounded className={styles.logoutIcon} />
              <h1>Logout</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
