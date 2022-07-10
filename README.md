- Créer un dossier app/store.js
  
- Wrap l'app dans un Provider `store={store}`

- Créer un dossier feature avec des dossiers pour chaque slice (comme des modèles, une entité, ex: le dossier "posts" aura un fichier "postsSlice" et des composants)
  
- Les composants ont une majuscule
  
- thunks : recommend for async logic in redux

- Le dossier components dans src est le dossier pour le rendu de plus grands composants/pages.

- Partie 5:
Imaginons, on met un counter ds le Header qui increment de un a chaque fois qu'on click dessus. 
  On inspecte le Profiler dans Redux DevTools sur la page qui rend la list des users.
  On s'aperçoit que non seulement le Header se rend mais aussi la UserPage alors qu'on ne fait que cliquer sur le bouton d'increment (voir image: public/pb-render.png)

-> Pour régler ce pb, on fait:
`//memoized selector
export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.userId === userId)
)`

Pareil pb lorsqu'on clique sur le thumbs up d'un article, on a le postExcerpt qui se render.
PostsExcerpt = React.memo(PostsExcerpt) peut régler ce soucis

On va plutôt utiliser le state normalization technique:
. RECOMMENDED IN DOCS
. NO DUPLICATION OF DATA
. CREATES AN ID LOOKUP

Redux Toolkit nous met à dispo 'createEntityAdapter API'
. ABSTRACTS MORE LOGIC FROM COMPONENTS
. BUILT-IN CRUD METHODS
. AUTO SELECTOR GENERATION

- PARTIE 6: RTK Query
  normalize state and optimistic update