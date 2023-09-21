interface Lesson {
  course: string;
  tutor: string;
  period: string;
  image: string;
}

interface Community {
  name: string;
  image: string;
  num_people: number;
  coverImage: string;
}

interface Podcast {
  name: string;
  author: string;
  audio_file: string;
  image: string;
  podcast_length?: number;
}
