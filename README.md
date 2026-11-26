[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/biuosa09-create/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/biuosa09-create/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# World news, 26 November 2026 — in one image

An entry for make.fun's [news-image-20261126](https://make.fun/bounty/news-image-20261126)
bounty: one image summing up the world news of Thursday 26 November 2026.

Try make.fun yourself: https://make.fun/r/shw861zs

## The four stories

1. **Taiwan keeps its 15% US tariff** — Taiwan said on Thursday it is confident
   it will keep its existing 15% tariff rate from the United States, after
   President Trump fired a new tariff salvo at 14 major trading partners, with
   proposed new maximum rates of 20–40%. The US Trade Representative's office
   said it intends to cap new tariffs at lower levels agreed under trade deals
   completed or still under negotiation. (Reuters, 26 November 2026)
2. **Houthi missile downed over Saudi Arabia** — the Saudi-led coalition said
   its air defences intercepted and destroyed a Houthi cruise missile
   targeting western Saudi Arabia, intercepted a Houthi drone near Jeddah
   Islamic Port, and reported a projectile striking Jazan Port, causing no
   injuries — the latest exchange in the Red Sea standoff after the
   coalition's evacuation order for Hodeidah port. (QNA via Fana News,
   26 November 2026)
3. **Chess, Game 3: Gukesh v Sindarov, score 1–1** — the World Chess
   Championship match in Geneva reaches Game 3 on Thursday at 15:00 CET,
   with Sindarov to have White. The first two games were draws: Game 1 in 38
   moves, Game 2 in 20 moves. First to 7½ points takes the title and the
   $2.5M prize fund. (ChessBase, 26 November 2026)
4. **Long March 2D launches today** — China launches a Long March 2D rocket
   from the Xichang Satellite Launch Center on Thursday at 09:35 UTC, with
   the payload not announced. (Astronomy.com / spacelaunchschedule.com,
   26 November 2026)

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` into
`/output/entry.png`, after validating its JPEG/PNG magic bytes and the 1 MiB
size cap. It creates the output directory if needed and removes only the
destination file before writing, never the output directory itself (the
grader's `/output` is a mount point), so two runs into the same output
produce byte-identical results.
