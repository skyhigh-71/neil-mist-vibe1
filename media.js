/*
  YOUR MEDIA LIVES HERE.
  Drop files into the media/ folders using the names below (or edit the names),
  commit, and the site picks them up. Anything missing shows a striped slot.

  media/hero.mp4        full-screen loop on the home page (muted, keep it short, under ~15 MB)
  media/hero.jpg        poster image shown while the hero loads
  media/photos/         your photos
  media/videos/         short clips you want to host yourself (mp4)
  media/banners/        optional page-top images: gear.jpg, filming.jpg, editing.jpg, growth.jpg, safety.jpg, watch.jpg
*/
window.MEDIA = {
  heroVideo: "media/hero.mp4",
  heroPoster: "media/hero.jpg",

  photos: [
    { src: "media/photos/ride-01.jpg", cap: "" },
    { src: "media/photos/ride-02.jpg", cap: "" },
    { src: "media/photos/ride-03.jpg", cap: "" },
    { src: "media/photos/ride-04.jpg", cap: "" },
    { src: "media/photos/ride-05.jpg", cap: "" },
    { src: "media/photos/ride-06.jpg", cap: "" },
    { src: "media/photos/ride-07.jpg", cap: "" },
    { src: "media/photos/ride-08.jpg", cap: "" },
    { src: "media/photos/ride-09.jpg", cap: "" },
    { src: "media/photos/ride-10.jpg", cap: "" },
    { src: "media/photos/ride-11.jpg", cap: "" },
    { src: "media/photos/ride-12.jpg", cap: "" }
  ],

  // Use { youtube: "VIDEO_ID" } for YouTube, or { file: "media/videos/clip.mp4" } for your own file.
  videos: [
    { youtube: "", file: "media/videos/clip-01.mp4", title: "" },
    { youtube: "", file: "media/videos/clip-02.mp4", title: "" },
    { youtube: "", file: "media/videos/clip-03.mp4", title: "" }
  ]
};
