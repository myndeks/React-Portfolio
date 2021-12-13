import linkedin from "./images/linkedin-logo.png";
import twitter from "./images/twitter-logo.png";
import github from "./images/github-logo.png";
import blog from "./images/dev-to-logo.png";

const data = {
  en: {
    links: {
      title: "Links",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logo",
        },
        {
          img: twitter,
          text: "@MJacionis",
          url: "https://twitter.com/mjacionis",
          alt: "twitter logo",
        },
        {
          img: github,
          text: "mindaugas-jacionis",
          url: "https://github.com/mindaugas-jacionis",
          alt: "github logo",
        },
        { img: blog, text: "My Blog", url: "https://dev.to/", alt: "dev.to logo" },
      ],
    },
    about: {
      title: "About me",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
    },
    education:  {
      title: "Education",
      items: [
      {
        name: "School One",
        period: "2003 - 2015",
        degree: "BA"
      },
      {
        name: "School Two",
        period: "2017 - 2021",
        degree: "MBA"
    }
  ]},
  skills: {
    title: "Personal Skills",
    items: [
      { name: "Teamwork", color: "green" },
      { name: "Communication", color: "yellow" },
      { name: "Organization", color: "red" }
    ]
  },
  technicalSkills: {
    title: "Technical Skills",
    items: [
      { name: "HTML", color: "green" },
      { name: "CSS", color: "yellow" },
      { name: "JavaScript", color: "red" }
    ]
  },
  expierence: {
    title: "Expierence",
    items: [
    {
      company: "Shpotify",
      title: "Good Person",
      period: "2020 - 2025",
      achievements: [
        "Listened to whole DB of records",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
    {
      company: "Shpotify",
      title: "Very Good Person",
      period: "2025 - 2030",
      achievements: [
        "Listened to whole DB of records",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
    {
      company: "Shpotify",
      title: "Very Best Person",
      period: "2030 - present",
      achievements: [
        "Listened to whole DB of records",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
  ]},
  contacts: {
    items: [
      { title: "Address", content: ["Some st. 59", "Vilnius, Narnia"] },
      {
        title: "Contacts",
        content: [
          { href: "tel:+37060000333", text: "+37060000333" },
          { href: "email@test.dev", text: "email@test.dev" },
        ],
      },
      {
        title: "Social",
        content: [
          { href: "https://linkedin.com/", text: "Linkedin/mindaugas" },
          { href: "https://twitter.com/mjacionis", text: "Twitter/@MJacionis" },
        ],
      },
    ]
  },
  },
  lt: {
    links: {
      title: "Nuorodos",
      items: [
        {
          img: linkedin,
          text: "Linkedin/UserName",
          url: "https://linkedin.com/",
          alt: "linkedin logotipas",
        },
        {
          img: twitter,
          text: "@MJacionis",
          url: "https://twitter.com/mjacionis",
          alt: "twitter logotipas",
        },
        {
          img: github,
          text: "mindaugas-jacionis",
          url: "https://github.com/mindaugas-jacionis",
          alt: "github logotipas",
        },
        { img: blog, text: "Asmeninis Blogas", url: "https://dev.to/", alt: "dev.to logotipas" },
      ],
    },
    about: {
      title: "Apie mane",
      body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy. Donut sesame snaps bear claw sweet roll fruitcake lemon drops sweet roll chocolate bar. Candy shortbread tootsie roll candy canes candy canes shortbread.",
    },
    education:  {
      title: "Edukacija",
      items: [
      {
        name: "Mokykla Vienas",
        period: "2003 - 2015",
        degree: "BA"
      },
      {
        name: "Mokykla Du",
        period: "2017 - 2021",
        degree: "MBA"
    }
  ]},
  skills: {
    title: "Asmeninės savybės",
    items: [
      { name: "Komandinis darbas", color: "green" },
      { name: "Komunikabilumas", color: "yellow" },
      { name: "Organizavimas", color: "red" }
    ]
  },
  technicalSkills: {
    title: "Technines savybėswitch",
    items: [
      { name: "HTML", color: "green" },
      { name: "CSS", color: "yellow" },
      { name: "JavaScript", color: "red" }
    ]
  },
  expierence: {
    title: "Patirtis",
    items: [
    {
      company: "Shpotify",
      title: "Geras Asmuo",
      period: "2020 - 2025",
      achievements: [
        "Klausytis lietuvisko teksto",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
    {
      company: "Shpotify",
      title: "Labai geras asmuo",
      period: "2025 - 2030",
      achievements: [
        "Klausytis lietuvisko teksto",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
    {
      company: "Shpotify",
      title: "Geriausias asmuo",
      period: "2030 - present",
      achievements: [
        "Klausytis lietuvisko teksto",
        "Make logo",
        "Increase sales with use of A/B tests",
      ],
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
    },
  ]},
  contacts: {
    items: [
      { title: "Adresas", content: ["Some st. 59", "Vilnius, Narnia"] },
      {
        title: "Kontaktai",
        content: [
          { href: "tel:+37060000333", text: "+37060000333" },
          { href: "email@test.dev", text: "email@test.dev" },
        ],
      },
      {
        title: "Socialinė media",
        content: [
          { href: "https://linkedin.com/", text: "Linkedin/mindaugas" },
          { href: "https://twitter.com/mjacionis", text: "Twitter/@MJacionis" },
        ],
      },
    ]
  },
  },
};

export default data;
