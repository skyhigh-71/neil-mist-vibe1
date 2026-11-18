# Trail Frames

Static site, auto-deployed to AWS on every push to `main`.

## Adding your own photos and videos
Drop files into `media/` using the names in `media.js` (or edit the names there):

- `media/hero.mp4` and `media/hero.jpg`: home page background loop and poster
- `media/photos/ride-01.jpg` ... `ride-12.jpg`: gallery photos
- `media/videos/clip-01.mp4` ...: self-hosted clips (or set a `youtube` ID in `media.js`)
- `media/banners/{gear,filming,editing,growth,safety,watch}.jpg`: optional page-top images

Anything missing shows a striped placeholder slot. Keep hero video under ~15 MB and photos under ~500 KB each.
