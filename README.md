# Spotify (clone)

This is a [open.spotify.com](https://open.spotify.com) clone. On the app one can search for songs/tracks, artists, and albums that match whatever term gets submitted. When a song, artist, or album gets selected, it will be opened on the spotify website on a new tab. The data displayed was obtained using the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).

###How the App Works

The App, when first loaded, displays a welcome message and a search bar. You can type in any term and, when submitted, the results of the search will be displayed on the page. When results get displayed, the page has three sections titled: **Songs**, **Artists** and **Albums**. Each section has a SEE MORE button on display, and a SEE LESS button hidden. When the SEE MORE button gets clicked, the list of results gets expanded and now, instead of displaying five results, fifty (50) get displayed. Then the SEE MORE button gets hidden and the SEE LESS button appears, which when clicked, compresses the list to five results like before. When a search result gets clicked, it gets opened on the spotify website on a new tab.

---

##Technologies Used

-   React
-   Semantic UI (UI styling)
-   axios
-   Spotify Web API

---

##Quick Start

1. In your browser, go to [ttps://spotify-rho-azure.vercel.app/](https://spotify-rho-azure.vercel.app/).
