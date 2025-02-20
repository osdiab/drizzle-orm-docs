export interface IComment {
  avatar: string,
  name: string,
  login: string,
  text: string,
}

const TopThreeComments: IComment[] = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/1602333093485891584/mmVqjFNI_normal.jpg',
    name: 'Dax',
    login: 'thdxr',
    text: 'I hate Drizzle',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1567269493608714241/6ACZo99k_normal.jpg',
    name: 'Kent C. Dodds',
    login: 'kentcdodds',
    text: 'Prisma is still an awesome choice. I\'m not going anywhere',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_normal.jpg',
    name: 'Theo',
    login: 't3dotgg',
    text: 'Prisma is amazing',
  },
];

const Comments: IComment[] = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/1602333093485891584/mmVqjFNI_normal.jpg',
    name: 'Dax',
    login: 'thdxr',
    text: 'I hate Drizzle',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1605762947686375425/lsoGWWty_normal.jpg',
    name: 'Theo',
    login: 't3dotgg',
    text: 'Prisma is amazing',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1503487031330197518/J4i7ofgt_normal.jpg',
    name: 'Aaron Francis',
    login: 'aarondfrancis',
    text: 'Y\'all should just copy everything Eloquent has',
  },
  {
    avatar: 'https://placehold.co/400',
    name: 'YouTube Commentor',
    login: 'dont_know',
    text: 'That was in PHP in 2007',
  },
  {
    avatar: 'https://placehold.co/400',
    name: 'Regular Twitter Comment',
    login: 'dont_know',
    text: 'It\'s not yet production ready',
  },
  {
    avatar: 'https://placehold.co/400',
    name: 'Some Body',
    login: 'dont_know',
    text: 'Django had it in 2008',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1567269493608714241/6ACZo99k_normal.jpg',
    name: 'Kent C. Dodds',
    login: 'kentcdodds',
    text: 'Prisma is still an awesome choice. I\'m not going anywhere',
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/1503487031330197518/J4i7ofgt_normal.jpg',
    name: 'Aaron Francis',
    login: 'aarondfrancis',
    text: 'I will accept 1% advisor shares',
  },
  {
    avatar: 'https://placehold.co/400',
    name: 'tslamoon',
    login: 'tslamoon1',
    text: 'But when is MSSQL support?',
  },
];

export { TopThreeComments, Comments };
