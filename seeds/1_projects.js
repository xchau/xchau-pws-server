exports.seed = (knex) => {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Blip',
          heading: 'Blip: A visual travel diary/cookbook',
          blurb: 'Blip serves as a recipe book for travel, where users may share their experiences abroad or follow in another’s footsteps to adopt their experiences. Interactions with the app are streamlined to ensure you focus more on the world around than your phone.',
          github: 'https://github.com/xchau/blip',
          deployed_at: '',
          stack: 'javascript, react native, redux, ios',
          created_at: '2017-04-10 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 2,
          project_name: 'this.city',
          heading: '「 this.city 」: Community-driven neighborhood improvement',
          blurb: 'Tired of running over the same pothole over and over? Pin it on a map shared with all of your neighbors and draw attention to the issues that affect your every day life.',
          github: 'https://github.com/xchau/this-city',
          deployed_at: '',
          stack: 'javascript, react native, android, g maps',
          created_at: '2017-03-08 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 3,
          project_name: 'LENDit',
          heading: 'LENDit: Why buy when you can borrow?',
          blurb: 'Last week I wanted to try out a new crockpot recipe, but alas, was not stocked with one. A good crockpot goes for well over $50, and since this was going to be a one time ordeal, it would be nice if I could just borrow one. Luckily, there\'s an app for that!',
          github: 'https://github.com/xchau/lendit-app',
          deployed_at: 'http://xchau-lendit.herokuapp.com',
          stack: 'javascript, html, css',
          created_at: '2017-01-16 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 4,
          project_name: 'Miser',
          heading: 'Miser: Live a full life without spending full price',
          blurb: 'Imagine you\'re in a new city, wanting to hit the town. But you\'re a miser. Enter stage left: Miser, a coupon aggregation web app that pulls in dining and entertainment deals near you. Nice.',
          github: 'https://github.com/xchau/miser-deals',
          deployed_at: 'https://miser-deals.surge.sh',
          stack: 'javascript, html, css, g maps',
          created_at: '2017-11-18 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 5,
          project_name: 'Geofindr',
          heading: 'Geofindr: The premier Geoguessr wannabe',
          blurb: 'For my first project with React.js, I thought I\'d make a Geoguessr clone. The nature of the game challenged me to leverage React\'s usage of JSX components and uni-directional data flow.',
          github: 'https://github.com/xchau/react-geofindr',
          deployed_at: 'https://react-geofindr.herokuapp.com/',
          stack: 'javascript, react, g maps',
          created_at: '2017-02-20 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 6,
          project_name: 'Group Randomizer',
          heading: 'Some quick JavaScript-fu practice',
          blurb: 'This was a short assignment given to my at Galvanize. The idea is to create an app that takes in a string of names and evenly split them into a specified number of groups. A great exercise to brush up on performant array manipulation.',
          github: 'https://github.com/xchau/group-randomizer',
          deployed_at: 'https://xchau-group-randomizer.herokuapp.com',
          stack: 'javascript, react, g maps',
          created_at: '2017-05-10 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 7,
          project_name: 'React Snake',
          heading: 'Snake + React!',
          blurb: 'A friend recently told me that in a technical interview, he was asked to outline how he would create the Snake game in React. Of course the easy way would be to leverage HTML5\'s canvas element, but I\'ve never shied from a challenge before ー and a challenge it was.',
          github: 'https://github.com/xchau/xc-react-snake',
          deployed_at: 'https://xchau-react-snake.herokuapp.com',
          stack: 'javascript, react',
          created_at: '2017-06-06 19:42:16.964-07',
          updated_at: new Date
        }
      ]);
    });
};
