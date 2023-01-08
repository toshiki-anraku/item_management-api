import { faker } from '@faker-js/faker/locale/ja';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// データの格納数
const amountOfUsers = 5;
const amountOfItems = 30;
const genres = [
  {
    name: '家電',
  },
  {
    name: '服',
  },
  {
    name: '家具',
  },
  {
    name: '娯楽品',
  },
];

/**
 * 指定した順にseederを実行
 * @returns {void}
 */
async function main() {
  addUsers().then(addGenres).then(addItems);
}

/**
 * ユーザレコード作成
 * @returns { count: int }
 */
const addUsers = async () =>
  await prisma.user.createMany({ data: createUsersData() });

/**
 * 持ち物レコード作成
 * @returns { count: int }
 */
const addItems = async () =>
  await prisma.item.createMany({ data: createItemsData() });

/**
 * ジャンルレコード作成
 * @returns { count: int }
 */
const addGenres = async () => await prisma.genre.createMany({ data: genres });

/**
 * ユーザーレコード作成用の元データ生成
 * @returns { Array }
 */
const createUsersData = () => {
  const users = [];

  for (let i = 1; i <= amountOfUsers; i++) {
    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      emailVerified: faker.date.between('1980-01-01', '2000-12-31'),
      image: null,
      createdAt: faker.date.between('1980-01-01', '2000-12-31'),
      updatedAt: faker.date.between('1980-01-01', '2000-12-31'),
    };

    users.push(user);
  }

  return users;
};

/**
 * 持ち物レコード作成用の元データ生成
 * @returns { Array }
 */
const createItemsData = () => {
  const items = [];

  for (let i = 1; i <= amountOfItems; i++) {
    const item = {
      userId: 1 + Math.floor(Math.random() * 4),
      genreId: 1 + Math.floor(Math.random() * 3),
      name: faker.vehicle.vehicle(),
      imgPath: '',
      priority: 1 + Math.floor(Math.random() * 4),
      memo: faker.random.word(),
      createdAt: faker.date.between('1980-01-01', '2000-12-31'),
      updatedAt: faker.date.between('1980-01-01', '2000-12-31'),
    };

    items.push(item);
  }

  return items;
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
