import PrismaService from "../src/services/prisma.service";
import {
  getAccountData,
  getArrayRoleDatas,
  getBirdData,
  getDiscountData,
  getFeedbackData,
  getNestData,
  getNotificationData,
  getRoleDatas,
  getSpeciesData,
} from "./data.seed";

const prisma = PrismaService.getInstance();

//NOTE - seed role data
const seedRoleData = async () => {
  const checkRole = await prisma.role.findMany({
    where: { role: { in: getArrayRoleDatas() } },
  });
  const checkArrayRole = checkRole.map((item) => item.role);
  getRoleDatas().forEach(async (data) => {
    if (!checkArrayRole.includes(data.role)) {
      await prisma.role.create({ data: data });
    }
  });
};

//NOTE - Seed accounts data
const seedAccountData = async () => {
  getAccountData().forEach(async (data) => {
    await prisma.account.upsert({
      where: { email: data.email },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed discount data
const seedDiscountData = async () => {
  getDiscountData().forEach(async (data) => {
    await prisma.discount.upsert({
      where: { name: data.name },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed Species data
const seedSeciesData = async () => {
  getSpeciesData().forEach(async (data) => {
    await prisma.species.upsert({
      where: { name: data.name },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed bird data
const seedBirdData = async () => {
  getBirdData().forEach(async (data) => {
    await prisma.bird.upsert({
      where: { name: data.name },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed nest data
const seedNestData = async () => {
  getNestData().forEach(async (data) => {
    await prisma.nest.upsert({
      where: { name: data.name },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed notification data
const seednotificationData = async () => {
  getNotificationData().forEach(async (data) => {
    await prisma.notification.upsert({
      where: { title: data.title },
      create: { ...data },
      update: { ...data },
    });
  });
};

//NOTE - Seed Feedback data
const seedFeedbackData = async () => {
  getFeedbackData().forEach(async (data) => {
    await prisma.feedback.create({ data });
  });
};

//NOTE - main function run seed data function
const main = async () => {
  await seedRoleData();
  console.log("Add role data");
  await seedAccountData();
  console.log("Add account data");
  await seedDiscountData();
  console.log("Add discount data");
  await seedSeciesData();
  console.log("Add species data");
  await seedBirdData();
  console.log("Add birds data");
  await seedNestData();
  console.log("Add nest data");
  await seednotificationData();
  console.log("Add notification data");
  await seedFeedbackData();
  console.log("Add feedback data");
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
