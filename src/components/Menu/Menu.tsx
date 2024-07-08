import styles from './Menu.module.css'
import React from 'react';
interface MenuProps {
    showMenu: boolean;
  }
  
const Menu: React.FC<MenuProps> = ({ showMenu }) => {
    return (
        <div>
            { showMenu ?
        <div className={styles.navMenu}> 
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a className={styles.menuLink}>
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="../signin.html" className={styles.menuLink}>
              Войти
            </a>
          </li>
        </ul>
      </div> : <div></div>
        }
        </div>
    )
}
export default Menu;