import { v4 as uidv4 } from 'uuid'

const songs = [
  {
    id: uidv4(),
    name: "Far From Home",
    artist: "Toonorth",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=7814",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Rest Until Dark",
    artist: "Sleepy Fish",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Witch Hat",
    artist: "Sleepy Fish",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10021",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Endlress Sky",
    artist: "Sleepy Fish",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10017",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Butterfly",
    artist: "Sleepy Fish",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10023",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "After Dark",
    artist: "Sean lewis",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=8105",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/be9e5dca9d4c9015c407a2d2590af8a0e5e278ce-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Canary Forest",
    artist: "Middle School, Aso, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Beaver Creek",
    artist: "Middle School, Aso, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Under The City Start",
    artist: "Middle School, Aso, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Maple Leaf Pt.2",
    artist: "Philanthrope",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10243",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Wild Life",
    artist: "Philanthrope",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Upstate",
    artist: "Philanthrope",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10245",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Ocean Patio",
    artist: "Philanthrope, Dayle",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=8036",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Hidden Structure",
    artist: "Leavv, Flitz&Suppe",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Dancing Droplets",
    artist: "Leavv",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9915",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Flushing the Stairs",
    artist: "Leavv",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9917",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Fox",
    artist: "Sworn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9224",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
  },
  {
    id: uidv4(),
    name: "Tumbling",
    artist: "Sworn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9225",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
  }
];


export default songs