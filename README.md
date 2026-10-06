# TripSphere 🌍

A premium responsive tourism information retrieval and route optimization demo for a college DSA project.

## Run
1. Install Node.js 18+.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open the local Vite URL.

## Deploy to GitHub Pages
Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy.yml`.
The deployed site is available at `https://suhanit08.github.io/Tourism/`. In the
repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**
if Pages has not already been enabled.

## Included working demo logic
- Exact search
- KMP string matching
- Rabin-Karp string matching
- Edit-distance fuzzy search
- Category/tag search
- Combined smart search
- Rating-based ranking
- Dijkstra shortest path over the sample project graph
- Dataset-driven local AI assistant
- LocalStorage favorites, reviews and demo authentication
- Responsive React/Vite interface

## Java integration
The uploaded specification names Java classes such as `Destination.java`, `TourismData.java`, `KMP.java`, `RabinKarp.java`, `EditDistance.java`, `Ranking.java`, `SearchEngine.java`, `Dijkstra.java`, `GraphData.java`, and `RouteService.java`, but the supplied attachment contains the project specification rather than those Java source files. This build therefore keeps the DSA logic in `src/services/tourism.js` so the interface is runnable now. When the Java sources are available, replace the service calls with a local Java API adapter without changing the UI.

Graph weights are sample project weights and are not represented as verified real-world road distances. Reviews/authentication are explicitly local demo features.

## Destination imagery
Destination cards and detail pages use destination-specific Wikimedia Commons photographs rather than illustrated posters or generic tourism/search images.

## 404 navigation fix
Destination detail IDs are parsed from the pathname so the custom page dispatcher works without relying on React Router route params. Search and destination links therefore remain functional in the Vite demo.
