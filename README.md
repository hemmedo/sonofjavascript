# Pokemon-List
Many implementations overlap with the requirements for this test project. But I made some differences;

- Used Context-API instead of Redux because it wasn't needed for this type of basic project (I also wanted to experiment on it).
- I developed the whole app as a SPA. Making this simple detail page as a different route didn't make sense. Instead, it will work as a modal on the main page based on conditional rendering.
- used node-sass to compile .scss files to .css effectively

# Other than that;
- ReactJS
- Axios
- All wrong urls will redirect to list page
- Filter to search a pokemon
- Added back and next buttons in the detail page to switch between pokemons
- Loading mechanism
- Docker

are added/implemented.

# Commands to dockerize (for development, not production);
$ docker build -t pokemon:dev .

 and then;

 $ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    pokemon:dev

And it should be good to go.