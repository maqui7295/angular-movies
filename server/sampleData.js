const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore non eiusmod Lorem tempor nisi cillum.`;
const longLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
  non enim praesent elementum facilisis leo vel. Risus at ultrices mi
  tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
  tellus. Convallis convallis tellus id interdum velit laoreet id donec
  ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
  suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
  quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
  proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
  tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
  varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
  Lorem donec massa sapien faucibus et molestie ac.`;

// const IMovie =  {
//   title: string;
//   imageUrl?: string;
//   date: number;
//   description: string;
//   rated?: string;
//   runtime?: number
//   released?: string;
//   genre?: null;
//   director?: null;
//   writer?: string;
//   actors?: string;
//   plot?: string;
//   language?: string;
//   country?: string;
// }

const Movies = [
  {
    title: 'first',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2019']
  },
  {
    title: 'days of roses',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'romance',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['Novel peace price 2014']
  },
  {
    title: 'the first guy on the planet',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'triller',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2015']
  },
  {
    title: 'why we were fictional boys',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'dance',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2016']
  },
  {
    title: 'developers do not sleep',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2016']
  },
  {
    title: 'the devils anus',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'drama',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2016']
  },
  {
    title: 'the devils triangle',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'drama',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2017']
  },
  {
    title: 'nine lives',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11).toDateString(),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    released: new Date(2017, 6, 11).toDateString(),
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: ['Jessica Alba', 'Tom cruise'],
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan'
  }
];

Movies.forEach(o => {
  o.slug = o.title.split(' ').join('-');
  o.imageUrlLarge = o.imageUrl.replace('300', '700x300');
});

module.exports = Movies;
