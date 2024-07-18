export default interface Track {
    id: number;
    name: string;
    author: string;
    album: string;
    duration_in_seconds: string;
    release_date: Date;
    genre: string;
    track_file: string;
  }