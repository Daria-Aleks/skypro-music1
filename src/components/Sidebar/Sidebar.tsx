"use client"
import Image from "next/image";
import styles from './Sidebar.module.css'
import { useAppSelector } from "../../store/store";
import Link from 'next/link';
import { useAppDispatch } from "../../store/store";
import { clearUserSession} from "../../store/features/authSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.userDate);
    return (
        <div className={styles.MainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>{user?.username}</p>
          <div className={styles.sidebarIcon}>
          <Link href="/signin" onClick={() => dispatch(clearUserSession())}>
            <svg>
                <use xlinkHref="img/icon/sprite.svg#logout" />
              </svg>
          </Link>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
                <Link href="/dayplaylist" className={styles.sidebarIink}>
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist01.png"
                    alt="day's playlist"
                    width={250}
                    height={150}
                  />
                </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link className="sidebar__link" href="/dancehits">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link className="sidebar__link" href="/indie">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Sidebar;