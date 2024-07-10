import styles from './Nav.module.css'
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
const Nav = () => {
    return (
        <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image className={styles.logoImage} src="/img/logo.png" alt="image"
          width={250}
          height={150} />
        </div>
        <div className={styles.navBurger}>
          <span className={styles.burgerLine}/>
          <span className={styles.burgerLine}/>
          <span className={styles.burgerLine}/>
        </div>
        <Menu/>
      </nav>
    )
}
export default Nav;