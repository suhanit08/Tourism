# Java integration point

The supplied project brief references the existing Java DSA classes, but those `.java` files were not present in the uploaded material available for this build. The UI is therefore wired to a runnable JavaScript service layer with equivalent named operations so the project can be demonstrated now.

When the Java sources are available, expose local endpoints such as:
- GET /api/destinations
- POST /api/search
- POST /api/route
and have those endpoints call the original Java `SearchEngine`, `KMP`, `RabinKarp`, `EditDistance`, `Ranking`, `Dijkstra`, and `RouteService` classes. The React pages can then consume those endpoints without redesigning the interface.
