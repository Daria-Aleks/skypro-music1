import styles from './Menu.module.css'
import React from 'react';
import Link from 'next/link';

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
            <Link href="/" className={styles.menuLink}>
              Главное
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/favorites" className={styles.menuLink}>
              Мой плейлист
            </Link>
          </li>
          <li className={styles.menuItem}>
          <Link href="/signin" className={styles.menuLink}>Войти</Link>
          </li>
        </ul>
      </div> : <div></div>
        }
        </div>
    )
}
export default Menu;