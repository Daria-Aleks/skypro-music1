import Image from "next/image";
import styles from './Sidebar.module.css'
const Sidebar = () => {
    return (
        <div className={styles.MainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
          <div className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarIink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className="sidebar__link" href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className="sidebar__link" href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Sidebar;