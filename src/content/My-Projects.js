import ultclock from '../images/ultclockfix.png';
import portsite from '../images/portfoliosite.png'

export default [
  {
    title: 'Portfolio',
    description:
      'This portfolio site. This site was built using React and utilizes great tools such as React-Router. The portfolio was a great experience using additional visual tools in Framer Motion and preprocessors in Sass.',
    skills: ['JavaScript','React','React-Router','SASS','Webpack'],
    image: portsite,
    links: {
      github: 'https://github.com/kyleroath/kyleroath',
      preview: 'https://kyleroath.com/',
    },
  },
  {
    title: 'Countdown Clock',
    description:
      'Set a date and never forget! This project, came about through a Reddit challenge by another member. What was supposed to simply be a drop down menu with selections of dates one could add from another HTML document quickly became a full project.',
    skills: ['JavaScript','ES6','HTML5','BootStrap4','jQuery', 'Webpack'],
    image: ultclock,
    links: {
      github: 'https://github.com/kyleroath/countdown-clock',
      preview: 'https://kyleroath.com/countdown/',
    },
  }
];
