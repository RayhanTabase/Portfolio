const projects = [
  {
    id: '0',
    title: 'countries-worldwide',
    description: `An App that displays a list of countries all around the world
    with their known population and cities. It also displays the cities' current weather information
                `,
    tags: ['React', 'Redux', 'Jest', 'TDD', 'Tailwind','API consumption', 'Unit tests'],
    image: './static/images/Projects/cww/screen1.png',
    live: 'https://festive-shirley-0ca9cb.netlify.app/',
    source: 'https://github.com/RayhanTabase/countries-worldwide.git',
  },
  {
    id: '1',
    title: 'Election App',
    description: `A CRUD app where users can create elections with different categories
     for other users with the right access to vote in.
                `,
    tags: ['Django', 'React', 'React Class Components', 'REST API','Python', 'SCSS', 'Bootstrap', 'Pandas', 'Cloudinary', 'Heroku', 'Unit tests'],
    image: './static/images/Projects/election/polImage9.jpeg',
    live: 'https://pollingbox.herokuapp.com',
    source: 'https://github.com/RayhanTabase/Polling-app',
  },
  {
    id: '2',
    title: 'Space Hub Traveler',
    description: ` A web application for a company 
    that provides commercial and scientific space travel services. 
    This application allows users to book rockets and join selected space missions.
    Data is fetched from the real live SpaceX API
                `,
    tags: ['React', 'Redux', 'Tailwind', 'JavScript', 'html', 'React-Router', 'Heroku'],
    image: './static/images/Projects/sht/rockets.jpeg',
    live: 'https://space-hub-traveler.herokuapp.com/',
    source: 'https://github.com/RayhanTabase/space-hub-traveller',
  },
  {
    id: '3',
    title: 'Math Magicians',
    description: `Math magicians" is a website for all fans of mathematics. 
    It is a Single Page App (SPA) that allows users to:  Make simple calculations.
    Read a random math-related quote
              `,
    tags: ['React', 'React-router', 'quotes-API', 'Netlify', 'Unit tests'],
    image: './static/images/Projects/mm/pc.jpeg',
    live: 'https://silly-kepler-42a918.netlify.app',
    source: 'https://github.com/RayhanTabase/math-magicians',
  },
 
  {
    id: '4',
    title: 'Bookstore',
    description: `Book store is an app that displays a list of books, 
    allows users to add a new book to the list as well as remove a selected book
                `,
    tags: ['React', 'CSS', 'JavScript', 'Github Pages'],
    image: './static/images/Projects/bs/pc.jpeg',
    live: 'https://rayhantabase.github.io/bookstore/',
    source: 'https://github.com/RayhanTabase/bookstore',
  },
  {
    id: '5',
    title: 'To Do List',
    description: `TO DO LIST" is a simple website that displays a list of to do activities
     and allows you to add and remove activities from the list.
     In this project i wrote some of function definitions using ES6 and webpack technology
     and applied html, css and JavaScript best practices.
                `,
    tags: ['Webpack','CSS', 'JavScript', 'html'],
    image: './static/images/Projects/todo/ToDoList.jpeg',
    live: 'https://rayhantabase.github.io/to-do-list/',
    source: 'https://github.com/RayhanTabase/to-do-list',
  }
];

export default projects;
