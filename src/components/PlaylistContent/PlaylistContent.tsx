import styles from './PlaylistContent.module.css'
import Track from "@/components/Track/Track";
import { useAppSelector } from "../../store/store";
import { useMemo } from 'react';

interface User {
  id: number;
  first_name: string;
  email: string;
  last_name: string;
  username: string;
}

interface Trackk {
  id: number;
  name: string;
  author: string;
  album: string;
  duration_in_seconds: string;
  release_date: Date;
  genre: string;
  track_file: string;
  stared_user: User[]
}

interface PlaylistContentProps {
  tracks: Trackk[];
}
const PlaylistContent: React.FC<PlaylistContentProps>  = () => {
  const searchTerm = useAppSelector((state) => state.search.searchTerm);
  const TracksState = useAppSelector((state) => state.tracksSlice.tracksState);
  const genres = useAppSelector((state) => state.search.genres);
  const years = useAppSelector((state) => state.search.years);
  const authors = useAppSelector((state) => state.search.authors);


  const filteredTracks = TracksState?.filter((track) => {
    const matchesSearchTerm = track.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genres.length === 0 || genres.includes(track.genre);
    const matchesAuthors = authors.length === 0 || authors.includes(track.author);
    return matchesSearchTerm && matchesGenre && matchesAuthors;
  });


  const sortedTracks = filteredTracks?.sort((a, b) => {
    const dateA = new Date(a.release_date).getTime();
    const dateB = new Date(b.release_date).getTime();
    return years === 'Старые' ? dateA - dateB : years === 'Новые' ? dateB - dateA : dateB + dateA
  });

    return (
        <div className={styles.contentPlaylist}>
          <div className={styles.contentTitle}>
            <div className={styles.playlistTitleCol}>Трек</div>
            <div className={styles.playlistTitleCol}>Исполнитель</div>
            <div className={styles.playlistTitleCol}>Альбом</div>
            <div className={styles.playlistTitleCol}>
              <svg className={styles.playlistTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-watch" />
              </svg>
            </div>
          </div>
          <div className={styles.contentPlaylist}>
          {sortedTracks.length > 0 ? sortedTracks.map((track, index) => (
                <Track 
                  key={index}
                  track={track}
                />    
                )) : <div>Треки не найдены</div>}
          </div>
        </div>
    )
}
export default PlaylistContent;