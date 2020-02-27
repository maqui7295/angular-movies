const shortLoremIpsum = `Lorem id sint aliqua tempor tempor sit. Ad dolor dolor ut nulla mollit dolore 
non eiusmod Lorem tempor nisi cillum.`;
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

export interface IMovie {
  title: string;
  slug?: string;
  imageUrl?: string;
  imageUrlLarge?: string;
  date: Date;
  short_description?: string;
  description: string;
  rated?: number;
  released?: Date;
  runtime?: string;
  genre?: string;
  director?: string;
  writer?: string;
  actors?: string[];
  plot?: string;
  language?: string;
  country?: string;
  awards?: string[];
}

const actorsList: string[] = [
  'John Doe',
  'Jane Doe',
  'Samuel Doe',
  'Jiminy Doe',
  'Peter Griffin',
  'Lois Griffin',
  'Stewie Griffin',
  'Brian Griffin'
];

export function getActors() {
  return actorsList;
}

function names(nm): string[] {
  return actorsList.filter(name => name.toLocaleLowerCase().includes(nm));
}

const Movies: IMovie[] = [
  {
    title: 'First man on the Moon',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 3,
    runtime: '1:30',
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('doe'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2019']
  },
  {
    title: 'Days of roses',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2018, 6, 15),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
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
    title: 'The first guy on the planet',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 13),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    genre: 'triller',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('griffin'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2015']
  },
  {
    title: 'Why we were fictional boys',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2015, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    genre: 'dance',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('doe'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2016']
  },
  {
    title: 'Developers do not sleep',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 4,
    runtime: '1:30',
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('doe'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2016']
  },
  {
    title: 'The devils anus',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2017, 3, 15),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
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
    date: new Date(2017, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    genre: 'drama',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('griffin'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan',
    awards: ['best movie of the year 2017']
  },
  {
    title: 'Nine lives',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2013, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 2,
    runtime: '1:30',
    genre: 'horror',
    director: 'Best director ever',
    writer: 'Somebody from the moon',
    actors: names('griffin'),
    plot: longLoremIpsum,
    language: 'Taiwanese',
    country: 'Taiwan'
  },
  {
    title: 'Beholded',
    imageUrl: 'https://via.placeholder.com/300',
    date: new Date(2020, 6, 11),
    short_description: shortLoremIpsum,
    description: longLoremIpsum,
    rated: 5,
    runtime: '1:30',
    genre: 'comedy',
    director: 'Best director ever',
    writer: 'Wicked author',
    actors: ['Peter Griffin'],
    plot: longLoremIpsum,
    language: 'English',
    country: 'Nigeria'
  }
];

Movies.forEach(o => {
  o.slug = o.title
    .toLocaleLowerCase()
    .split(' ')
    .join('-');
  o.imageUrlLarge = o.imageUrl.replace('300', '700x300');
  o.released = o.date;
});

export default function getMovies() {
  return Movies;
}
