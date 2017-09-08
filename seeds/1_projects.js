'use strict';

exports.seed = (knex) => {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Blip',
          path_name: 'blip',
          heading: 'Blip: A visual travel diary/cookbook',
          blurb: 'Blip serves as a recipe book for travel, where users may share their experiences abroad or follow in another’s footsteps to adopt their experiences. Interactions with the app are streamlined to ensure you focus more on the world around than your phone.',
          github: 'https://github.com/xchau/blip',
          deployed_at: '',
          demo_link: '',
          stack: 'javascript, react native, redux, ios',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'http://res.cloudinary.com/xchau/image/upload/v1504855858/blip-hero_hv1b2e.png',
          created_at: '2017-04-10 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 2,
          project_name: 'this.city',
          path_name: 'this.city',
          heading: 'this.city: Waze-like community improvement',
          blurb: 'Remember that giant pothole just around the corner that you always have to swerve to avoid? Everyone gripes about it, but the city doesn\'t seem to know. With this.city, community members can pin areas of caution or interest to a shared map and draw attention to the issues that affect our daily lives.',
          github: 'https://github.com/xchau/this-city',
          deployed_at: '',
          demo_link: 'https://www.youtube.com/watch?v=QoWOduW2z74&feature=youtu.be',
          stack: 'javascript, react native, android, g maps',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504852266/thiscity-hero_pwpv7k.png',
          created_at: '2017-03-08 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 3,
          project_name: 'LENDit',
          path_name: 'lendit',
          heading: 'LENDit: Why buy when you can borrow?',
          blurb: 'Last week I wanted to try out a new crockpot recipe, but alas, was not stocked with one. A good crockpot goes for well over $50, and since this was going to be a one time ordeal, it would be nice if I could just borrow one. Luckily, there\'s an app for that!',
          github: 'https://github.com/xchau/lendit-app',
          deployed_at: 'http://xchau-lendit.herokuapp.com',
          demo_link: 'https://www.youtube.com/watch?v=GdP45lDkTq0&feature=youtu.be',
          stack: 'javascript, html, css, jquery',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504852395/lendit-hero_tusib7.png',
          created_at: '2017-01-16 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 4,
          project_name: 'Miser',
          path_name: 'miser',
          heading: 'Miser: Live a full life without spending full price',
          blurb: 'Imagine you\'re in a new city, wanting to hit the town. But you\'re a miser. Enter stage left: Miser, a coupon aggregation web app that pulls in dining and entertainment deals near you. Nice.',
          github: 'https://github.com/xchau/miser-deals',
          deployed_at: 'https://miser-deals.surge.sh',
          demo_link: 'https://www.youtube.com/watch?v=orATF3f6CZQ&feature=youtu.be',
          stack: 'javascript, html, css, g maps',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504842340/miser-hero_f8chq5.png',
          created_at: '2016-11-18 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 5,
          project_name: 'Geofindr',
          path_name: 'geofindr',
          heading: 'Geofindr: The premier Geoguessr wannabe',
          blurb: 'For my first project with React.js, I thought I\'d make a Geoguessr clone. The nature of the game challenged me to leverage React\'s usage of JSX components and uni-directional data flow. How geographically-savvy are you?',
          github: 'https://github.com/xchau/react-geofindr',
          deployed_at: 'https://react-geofindr.herokuapp.com/',
          demo_link: '',
          stack: 'javascript, react, g maps',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504852557/geofindr-hero_nxk0jj.png',
          created_at: '2017-02-20 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 6,
          project_name: 'Group Randomizer',
          path_name: 'group_randomizer',
          heading: 'Some JavaScript-fu practice',
          blurb: 'This was a short assignment given to my at Galvanize. The idea is to create an app that takes in a string of names and evenly split them into a specified number of groups. A great exercise to brush up on performant array manipulation.',
          github: 'https://github.com/xchau/group-randomizer',
          deployed_at: 'https://xchau-group-randomizer.herokuapp.com',
          demo_link: '',
          stack: 'javascript, react',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504852693/grandom-hero_zs5cic.png',
          created_at: '2017-05-10 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 7,
          project_name: 'React Snake',
          path_name: 'react_snake',
          heading: 'Snake + React!',
          blurb: 'Recently, my friend was asked to create the classic arcade game "Snake" in React for a technical interview. The easier way to approach this would be to leverage HTML5\'s canvas element. Thinking about the game in terms of stateful vs. presentational components was a little bit trickier, but I think I got pretty close!',
          github: 'https://github.com/xchau/xc-react-snake',
          deployed_at: 'https://xchau-react-snake.herokuapp.com',
          demo_link: '',
          stack: 'javascript, react',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504852979/snake-hero_dfvmqs.png',
          created_at: '2017-06-06 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 8,
          project_name: 'Personal Site v2.0',
          path_name: 'mnchau_v2',
          heading: 'Introducing my personal webpage 2.0!',
          blurb: 'My old site (xchau-pws.herokuapp.com) was a bare bones endeavor to showcase my skills and personal information. I loved it for its simplicity, being built only on HTML, CSS and jQuery. But this resulted in slow static content loading, which doesn\'t quite communicate "Hire me!". Hopefully the new site, with a new blog feel, does better!',
          github: 'https://github.com/xchau/pws-v2',
          deployed_at: 'https://xchau-pws-v2.herokuapp.com',
          demo_link: '',
          stack: 'javascript, react',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504853163/pws2-hero_igvajf.png',
          created_at: '2017-08-14 19:42:16.964-07',
          updated_at: new Date
        },
        {
          id: 9,
          project_name: 'Personal Site',
          path_name: 'mnchau_v1',
          heading: 'An attempt at an online presence - mnchau.com',
          blurb: 'Resumes and cover letters only go so far so I thought I\'d create a personal webpage to highlight my skills. I decided to stick to just the basics for this project (ie: HTML, CSS, JS, jQuery) to brush up on my fundamentals.',
          github: 'https://github.com/xchau/personal-webpage',
          deployed_at: 'http://xchau-pws.herokuapp.com',
          demo_link: '',
          stack: 'javascript, html, css, jquery',
          primary_use_case: '',
          primary_user: '',
          hero_link: 'https://res.cloudinary.com/xchau/image/upload/v1504853357/pws-hero_cw4xby.png',
          created_at: '2017-05-02 19:42:16.964-07',
          updated_at: new Date
        }
      ])
      .then(() => {
      return knex.raw(
       "SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects));"
     );
    });
  });
};
