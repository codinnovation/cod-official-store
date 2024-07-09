import React from "react";
import styles from "../../styles/header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CartIcon from "@mui/icons-material/AddShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CategoryIcon from "@mui/icons-material/Category";
import PersonIcon from "@mui/icons-material/Person";

function Index() {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.navigationContainer}>
          <div className={styles.navigationContents}>
            <div className={styles.storeNameContainer}>
              <div className={styles.name}>
                <h1>COD STORE</h1>
              </div>

              <div className={styles.searchContainer}>
                <input placeholder="Search" />
              </div>
            </div>

            <div className={styles.linkContainer}>
              <div className={styles.link}>
                <HomeIcon className={styles.icon} />
                <h1>Home</h1>
              </div>

              <div className={styles.link}>
                <CategoryIcon className={styles.icon} />
                <h1>Category</h1>
              </div>

              <div className={styles.link}>
                <CartIcon className={styles.icon} />
                <h1>Cart</h1>
              </div>

              <div className={styles.link}>
                <NotificationsIcon className={styles.icon} />
                <h1>Notifications</h1>
              </div>

              <div className={styles.link}>
                <PersonIcon className={styles.icon} />
                <h1>Me</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
