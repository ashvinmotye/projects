var DOMAIN = "http://ashvinmotye.com/";

var objectTemplate = {
  name: "",
  description: "",
  link: DOMAIN + "",
  created: "",
  category: ""
};

var categoriesArray = ["app", "game", "layout"];

var projects = [
  {
    name: "Budget",
    description:
      "Ever wonder how you span out your salary over a month? This app is here to help you keep track of your expenses!",
    link: DOMAIN + "budget",
    created: "March 2019",
    category: "app"
  },
  {
    name: "Shopping Cart",
    description:
      "I often go to buy some items and need to check if I am still within budget. The way I went around was noting down in my note app and switching back and forth to my calculator app. It became quite messy. This idea struck me and was on my bucket list for some time now...finally did it! I realised it can also be to track daily expenses as well!",
    link: DOMAIN + "shopping",
    created: "May 2018",
    category: "app"
  },

  {
    name: "Password",
    description:
      "Do you find yourself in a difficult spot where you need to think of a unique and SECURE password to use for each of your site? This app is for you! You define everything, number of characters and characters you want to use.",
    link: DOMAIN + "password",
    created: "April 2018",
    category: "app"
  },

  {
    name: "Memorise",
    description:
      "Test your retaining power with this pattern game. Memorise the pattern shown and replicate it. Easy, right?There is no end to it, unless you make one mistake.",
    link: DOMAIN + "games/memorise",
    created: "April 2018",
    category: "game"
  },

  {
    name: "Goals",
    description:
      "We all have goals and some we want to achieve them within a defined time frame. I made this app to visualise my countdown to each of my goals set with toggles to set the view as I need.",
    link: DOMAIN + "countdown",
    created: "April 2018",
    category: "app"
  },

  {
    name: "UCI Calendar",
    description:
      "Loving to watch cycling races (mostly European ones), I find myself constantly checking which race is next on the UCI (Union Cycliste Internationale) calendar and numbering the days left. No doubt, I had to automate this task and hence this app was born! It shows me all the races I am interested and the days left to start, automatically hides the completed ones and if ongoing, displays current stage reached. Pretty much my life saver!",
    link: DOMAIN + "cycling",
    created: "April 2018",
    category: "app"
  },

  {
    name: "UCL Draw",
    description:
      "The anticipation to the semi final draw of the UEFA Champions League was building even more when Liverpool FC reached that stage. I could not wait and decided to build a draw simulator. But here you can put whichever teams and whatever number of teams you wish and simulate a draw.",
    link: DOMAIN + "ucl",
    created: "April 2018",
    category: "app"
  },

  {
    name: "TdF Challenge",
    description:
      "I am passionate fan of cycling and watch most of cycling races but the Tour de France remains my favourite stage race. I recently bought an indoor cycle and wondered why not set a goal to reach some number of kilometres? I implemented this idea using Google forms and Google sheets as my database and Tabletop to retrieve the data.",
    link: DOMAIN + "/tdf",
    created: "April 2018",
    category: "app"
  },

  {
    name: "Loto v4",
    description:
      "Yet another loto quick pick simulator app, with user interactivity: on a computer, you press space and on your phone you ask? You shake your phone to generate a new six-number combination at the end of each shake.",
    link: DOMAIN + "games/generate",
    created: "March 2018",
    category: "app"
  },

  {
    name: "Brain Freeze",
    description:
      "12 colors appearing in your defined time period; your goal is to tap on the color square which is same as the color in which the heading appears. The score is in terms of the longest streaks of correct taps.",
    link: DOMAIN + "games/brainfreeze",
    created: "March 2018",
    category: "game"
  },

  {
    name: "Math Wiz",
    description:
      "4 digits from 1 to 10, added, multiplied and subtracted in 3 levels with either, 4, 8 or 12 possible choices. Time to exercise your basic maths skills!",
    link: DOMAIN + "games/mathswiz",
    created: "March 2018",
    category: "game"
  },

  {
    name: "Spelling Bee",
    description:
      "As simple as it gets, you click on the microphone to get a word, you spell it in the prompt. You have three times to listen to the word, two times to get its definition and two times to hear an example with the word. You have 30 seconds to correctly spell the word. After each word, press “Enter” to say the word once, and then you need to proceed by clicking the buttons. Happy practising!",
    link: DOMAIN + "games/spellingbee/",
    created: "March 2018",
    category: "game"
  },

  {
    name: "Higher Lower",
    description:
      "A simple JavaScript game I created where ten numbers are randomly generated. The aim is to guess if the next number is higher or lower than the previous one in the list. Two numbers are already displayed and you need to guess from there. A maximum score of 8 can be achieved which might be easy after some time. So, I added a timer so that you can beat your best time if you have reached the top score.",
    link: DOMAIN + "games/higher-lower",
    created: "March 2018",
    category: "game"
  },

  {
    name: "Loto v3",
    description:
      "What if you could do a quick pick of 6 numbers based on your lucky number? Here is!",
    link: DOMAIN + "generate",
    created: "November 2017",
    category: "app"
  },

  {
    name: "Free up",
    description:
      "I realised I was limiting myself to compact designs and wanted to do something with much more free space. Using Bootstrap I concocted this layout as a potential landing page.",
    link: DOMAIN + "testing",
    created: "October 2017",
    category: "layout"
  },

  {
    name: "2 columns",
    description:
      "A two-column layout I wanted to make as my blog, with my information on the right and all the blog posts on the left with alternating colour for each post. And, I very much wanted to make the bottom sliding animation on the links.",
    link: DOMAIN + "testingmyblog",
    created: "August 2017",
    category: "layout"
  },

  {
    name: "Loto v2",
    description:
      "In the second version, I decided to add a little complexity to it with the fact that there is a very very low probability that the set of six numbers from the previous week would repeat this week as well. So, you have the option to add numbers you do not want included (or not) in your combination and the app will generate six numbers accordingly.",
    link: DOMAIN + "nonrepeat",
    created: "February 2017",
    category: "app"
  },

  {
    name: "Coming soon",
    description:
      'I was experimenting with landing pages to indicate that a website is under construction and will be available soon. I wanted to use free high resolution images from <a href="http://unsplash.com" target="_blank">unsplash</a>.',
    link: DOMAIN + "comingsoon",
    created: "January 2017",
    category: "layout"
  },

  {
    name: "Loto v1",
    description:
      "Quick pick simulator as in the national Loto game which generates six unique random numbers from 1 to 40 and adds the respective color the number as the real draw. Try your luck, who knows!",
    link: DOMAIN + "predict",
    created: "January 2017",
    category: "app"
  },

  {
    name: "Presenter",
    description:
      "As most presentations we do, order is random or simply anyone willing to do first (which almost nobody wants). Hence came this idea of an app generating the next presenter and keeping track of how many presenters are left to finally prompt when last presenter is reached.",
    link: DOMAIN + "presenter",
    created: "January 2017",
    category: "app"
  },

  {
    name: "Theia 2.0",
    description:
      "Having done version 1.0 on the Vanilla side, I explored into libraries and used Bootstrap, jQuery and Owl Carousel for this version. I also wanted to make the project a little more close to real world websites.",
    link: DOMAIN + "theia",
    created: "October 2016",
    category: "layout"
  },

  {
    name: "Calculator",
    description:
      "This clickable calculator was part of a labsheet but most of the code was given and I decided to build it from scratch on my own to better understand the process behind it and solve the problems that arise in the coding process. It helped me greatly to discover more about JS and the DOM.",
    link: DOMAIN + "calculator",
    created: "September 2016",
    category: "app"
  },

  {
    name: "Theia 1.0",
    description:
      "Theia is a landing page for an android mobile application which serves as an email reader for visually impaired persons. I made this as my level one project to demonstrate skills of HTML, CSS and JavaScript. Theia 1.0 is made from scratch without using any libraries or frameworks, just using Vanilla of everything.",
    link: DOMAIN + "theia-v1",
    created: "August 2016",
    category: "layout"
  },

  {
    name: "Draw",
    description:
      "I wanted to make something like Paint. So as usual I went on YouTube, found some tutorials and made it (almost). This application helped me understand the use of JavaScript to interact with the canvas element.",
    link: DOMAIN + "drawingapp",
    created: "June 2016",
    category: "app"
  }
];
