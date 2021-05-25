const data = [
  {
    id: 1,
    title: 'Card Design',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/card-design',
    liveDemo: 'design/card-design',
    type: 'html5',
  },
  {
    id: 2,
    title: 'Git & GitHub',
    sourceCode: 'https://github.com/prashantacharya/Leapfrog-assignments',
    liveDemo: '#',
    type: 'github-alt',
  },
  {
    id: 3,
    title: 'TuTangle - A Home Search',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/Assignment-1-A-Home-Search',
    liveDemo: 'design/Assignment-1-A-Home-Search',
    type: 'html5',
  },
  {
    id: 4,
    title: 'Tutangle - Responsive',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/Assignment-2-Responsive-Tutangle',
    liveDemo: 'design/Assignment-2-Responsive-Tutangle',
    type: 'html5',
  },
  {
    id: 5,
    title: 'Design Contest - Final Project',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/final-project',
    liveDemo: 'design/final-project',
    type: 'html5',
  },
  {
    id: 6,
    title: 'JavaScript Exercise 2 - 7',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/basics',
    liveDemo: 'javascript/basics',
    type: 'js-square',
  },
  {
    id: 7,
    title: 'JavaScript Exercise 8: Scatter Plot',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/scatter-plot',
    liveDemo: 'javascript/scatter-plot',
    type: 'js-square',
  },
  {
    id: 8,
    title: 'JavaScript Exercise 9: Ball Animation',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/ball-animation',
    liveDemo: 'javascript/ball-animation',
    type: 'js-square',
  },
  {
    id: 9,
    title: 'Scatter Plot using OOP',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/scatter-plot-OOP',
    liveDemo: 'javascript/scatter-plot-OOP',
    type: 'js-square',
  },
  {
    id: 10,
    title: 'Ball Animation using OOP',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/ball-animation-OOP',
    liveDemo: 'javascript/ball-animation-OOP',
    type: 'js-square',
  },
  {
    id: 11,
    title: 'Carousel',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/carousel',
    liveDemo: 'javascript/carousel',
    type: 'js-square',
  },
  {
    id: 12,
    title: 'Carousel-OOP',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/carousel-OOP',
    liveDemo: 'javascript/carousel-OOP',
    type: 'js-square',
  },
  {
    id: 13,
    title: 'Ball Collision',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/ball-collision',
    liveDemo: 'javascript/ball-collision',
    type: 'js-square',
  },
  {
    id: 14,
    title: 'Ant Smasher',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/ant-smasher',
    liveDemo: 'javascript/ant-smasher',
    type: 'js-square',
  },
  {
    id: 15,
    title: 'Car Racing',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/car-racing',
    liveDemo: 'javascript/car-racing',
    type: 'js-square',
  },
  {
    id: 16,
    title: 'Flappy Bird',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/flappy-bird',
    liveDemo: 'javascript/flappy-bird',
    type: 'js-square',
  },
  {
    id: 17,
    title: 'Helix Animation',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/helix-animation',
    liveDemo: 'javascript/helix-animation',
    type: 'js-square',
  },
  {
    id: 18,
    title: 'Presentation Framework - Final Project',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/javascript/presentation-framework',
    liveDemo: 'javascript/presentation-framework',
    type: 'js-square',
  },
  {
    id: 19,
    title: 'UI Elements with BEM convention',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/advanced-design-BEM',
    liveDemo: 'design/advanced-design-BEM',
    type: 'css3',
  },
  {
    id: 20,
    title: 'Reen: SCSS project',
    sourceCode:
      'https://github.com/prashantacharya/Leapfrog-assignments/tree/master/design/reen',
    liveDemo: 'design/reen/dist',
    type: 'sass',
  },
  {
    id: 21,
    title: 'Todo List',
    sourceCode: 'https://github.com/prashantacharya/react-todo',
    liveDemo: 'https://prashantacharya.github.io/react-todo',
    type: 'react',
  },
  {
    id: 22,
    title: 'Hackernews',
    sourceCode: 'https://github.com/prashantacharya/hackernews',
    liveDemo: 'https://prashantacharya.github.io/hackernews',
    type: 'react',
  },
  {
    id: 23,
    title: 'GitHub UI',
    sourceCode: 'https://github.com/prashantacharya/github-ui',
    liveDemo: 'https://prashantacharya.github.io/github-ui/',
    type: 'react',
  },
  {
    id: 24,
    title: 'Node Todo API',
    sourceCode: 'https://github.com/prashantacharya/todo-api',
    liveDemo: 'https://prashantacharya.github.io/Leapfrog-assignments/#',
    type: 'node',
  },
  {
    id: 25,
    title: 'Project Management System API',
    sourceCode: 'https://github.com/prashantacharya/Project-Management-System-API',
    liveDemo: 'https://prashantacharya.github.io/Leapfrog-assignments/#',
    type: 'node',
  },
  {
    id: 26,
    title: 'Project Management System Frontend',
    sourceCode: 'https://github.com/prashantacharya/Project-Management-System-Frontend',
    liveDemo: 'https://prashantacharya.github.io/Leapfrog-assignments/#',
    type: 'react',
  },
];

// sass
// react
// node
