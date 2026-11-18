# Trail Frames

Static site, auto-deployed to AWS on every push to `main`.

## Adding your own photos and videos
Drop files into `media/` using the names in `media.js` (or edit the names there):

- `media/hero.mp4` and `media/hero.jpg`: home page background loop and poster
- `media/photos/ride-01.jpg` ... `ride-12.jpg`: gallery photos
- `media/videos/clip-01.mp4` ...: self-hosted clips (or set a `youtube` ID in `media.js`)
- `media/banners/{gear,filming,editing,growth,safety,watch}.jpg`: optional page-top images

Anything missing shows a striped placeholder slot. Keep hero video under ~15 MB and photos under ~500 KB each.

## Versions and rollback
Every change is a commit; pushing to `main` deploys it. Named restore points are git tags (`git tag` or the repo's Tags page).

**Fastest rollback (no git needed):** GitHub > Actions > "Deploy Snake" > Run workflow > type a tag (e.g. `v2.0-redesign`) or commit ID in "ref" > Run. The server is updated in about 30 seconds. `main` is unchanged, so the next push to `main` deploys the latest code again.

**Permanent rollback:** undo the bad commit and keep history:
`git revert <commit-id>` then `git push`. This deploys the reverted state automatically.

**Before a risky change:** tag the good version first: `git tag -a v2.2-name -m "why" && git push origin v2.2-name`.
