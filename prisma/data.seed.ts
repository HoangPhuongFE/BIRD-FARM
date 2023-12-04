import { Prisma } from "@prisma/client";

//NOTE -  data for role seed
const roles: Prisma.RoleCreateInput[] = [
  {
    role: "admin",
  },
  {
    role: "customer",
  },
];

export const getRoleDatas = () => {
  return roles;
};

export const getArrayRoleDatas = () => {
  return roles.map((item: Prisma.RoleCreateInput) => item.role);
};

//NOTE - account data seed
const accounts: Prisma.AccountCreateInput[] = [
  {
    avata: "",
    username: "hoang262",
    hashPassword:
      "19395e2a89260c09df6da600ecdeac3b631262b3ce5a780d7cda2f6f2c6738d6", //hoang2622002
    fullName: "Nguyen Huy Hoang",
    email: "hoangnhhe160531@fpt.edu.vn",
    phoneNumber: "0869018276",
    point: "15",
    Role: {
      connect: {
        role: "admin",
      },
    },
  },
  {
    avata: "",
    username: "hieu232",
    hashPassword:
      "15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225", //123456789
    fullName: "Nguyen Huy Hoang",
    email: "hieunvHS158458@fpt.edu.vn",
    phoneNumber: "2958745865",
    point: "dw",
    Role: {
      connect: {
        role: "customer",
      },
    },
  },
];

export const getAccountData = () => {
  return accounts;
};

//NOTE - Discount data
const Discounts: Prisma.DiscountCreateInput[] = [
  // 0
  {
    name: "Summer Savings",
    type: 1,
    mesureType: 1,
    amount: 10,
    startDate: "2022-06-01T00:00:00Z",
    endDate: "2022-08-31T23:59:59Z",
    lower_bound: 50,
    upper_bound: 100,
    createAt: "2022-05-01T12:00:00Z",
    updateAt: "2022-05-02T14:30:00Z",
  },
  //1
  {
    name: "Autumn Promotion",
    type: 2,
    mesureType: 2,
    amount: 250,
    startDate: "2022-09-15T00:00:00Z",
    endDate: "2022-11-15T23:59:59Z",
    lower_bound: 200,
    upper_bound: 500,
    createAt: "2022-08-12T09:15:00Z",
    updateAt: "2022-08-25T11:00:00Z",
  },
  //2
  {
    name: "Black Friday",
    type: 1,
    mesureType: 2,
    amount: 20,
    startDate: "2022-11-25T00:00:00Z",
    endDate: "2022-11-27T23:59:59Z",
    createAt: "2022-10-29T15:45:00Z",
    updateAt: "2022-10-29T15:45:00Z",
  },
  //3
  {
    name: "NGVN",
    type: 1,
    mesureType: 2,
    amount: 99,
    startDate: "2022-11-20T00:00:00Z",
    endDate: "2022-11-27T23:59:59Z",
    createAt: "2022-10-29T15:45:00Z",
    updateAt: "2022-10-29T15:45:00Z",
  },


];

export const getDiscountData = () => {
  return Discounts;
};

//NOTE - Species
const Species: Prisma.SpeciesCreateInput[] = [
  // 0 
  {
    name: "Bald Eagle",
    isActive: true,
    description: "A large bird of prey endemic to North America",
    createAt: "2020-01-01T12:00:00Z",
    updateAt: "2020-01-02T14:00:00Z",
    Discount: {
      connect: { name: "Autumn Promotion" },
    },
  },

  // 1
  {
    name: "The Tits",
    isActive: true,
    description:
      "Birds in the Paridae family, collectively known as 'the tits', are a group of small and often brightly colored birds. They often have light-colored heads and wings and blue, gray or yellow bodies. Tits often live in forest environments, gardens and urban areas. They love foods like insects, seeds, and fruits. Their calls are diverse and often used in communication and searching for food.",
    image: "peregrine_falcon.jpg",
    createAt: "2022-03-15T09:00:00Z",
    updateAt: "2022-04-19T12:30:00Z",
  },
  // 2
  {
    name: " The Shrike",
    isActive: true,
    description:
      " Shrikes (sparrows) are a group of birds of prey with sharp beaks, belonging to the Laniidae family. They are often fish-like in appearance, with a gray or brown back and head and a black, white or whitish gray belly. Shrikes are famous for their ability to stab bait into branch tips or hook on electric wires to store food. They live in many environments around the world and often prey on insects, rabbits, and small birds.",
    image: "peregrine_falcon.jpg",
    createAt: "2023-10-22T16:27:37.090Z",
    updateAt: "2023-10-22T16:27:37.090Z",
    Discount: {
      connect: { name: "Summer Savings" },
    },
  },
  // 3
  {
    name: "The Bulbul",
    isActive: true,
    description:
      " Bulbul birds are a group of birds belonging to the Pycnonotidae family, usually small to medium in size. They have a slender shape, and their fur colors are often bright and diverse. Bulbuls typically live in tropical and temperate regions around the world. They prefer tree, garden and forest environments. Bulbul eats fruit, insects and a variety of other foods. The bulbul's song is often pleasant and rich, used in communication and social connection.",
    image: "peregrine_falcon11.jpg",
    createAt: "2023-10-22T16:30:04.778Z",
    updateAt: "2023-10-22T16:30:04.778Z",
  },
  // 4
  {
    name: "The Warbler ",
    isActive: true,
    description:
      " Warblers are a group of small birds, usually pale in color and diverse in shape and color. They often live in wooded, forested, grassy and sandy environments around the world. Warblers often eat insects and their songs are often repetitive melodies, often very subtle and difficult to distinguish. They often migrate during the winter to avoid cold weather in their habitat. Warblers are popular among nature lovers and birders because of their interactivity and diversity.",
    image: "peregrine_falcon22.jpg",
    createAt: "2023-10-22T16:30:47.050Z",
    updateAt: "2023-10-22T16:30:47.050Z",
    Discount: {
      connect: { name: "NGVN" },
    },
  },

];

export const getSpeciesData = () => {
  return Species;
};

//NOTE - bird data
const birds = [
  {
    name: "Golden Eagle",
    price: 999,
    age: 3,
    size: 10,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    Discount: {
      connect: {
        name: Discounts[2].name,
      },
    },
    gender: true,
    description:
      "A large, dark brown eagle with golden feathers on the back of its head and neck. It has sharp, powerful talons used to hunt rabbits, marmots and other small mammals.",
    trophy: "First prize of the National Forest Birding Festival 2021."

  },

  {
    name: "Bald Eagle Blue",
    price: 1999,
    age: 3,
    size: 10,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    gender: false,
    description:
      "A distinctive eagle native to North America with a white head, white tail and dark brown body. It is the national bird symbol of the United States.",
  },
  {
    name: "Peregrine Falcon",
    price: 1500,
    age: 5,
    size: 15,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    gender: true,
    description:
      "A powerful falcon with blue-gray upperparts and barred underparts. It is renowned for its speed, reaching over 200 mph during its hunting stoop.",
  },
  {
    name: "Atlantic Puffin",
    price: 2200,
    age: 6,
    size: 8,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    gender: false,
    description:
      "A small, stocky seabird with black upperparts and white underparts. It has a large, colorful bill. Nesting in burrows on cliff edges, it is an excellent swimmer and diver.",
  },
  {
    name: "Resplendent Quetzal Red",
    price: 3200,
    age: 2,
    size: 10,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    gender: false,
    description:
      "An exotic Central American bird with brilliant green upperparts and crimson underparts. It has extremely long, colorful tail feathers.",
  },
  {
    name: "Scarlet Macaw Black ",
    price: 2000,
    age: 4,
    size: 18,
    Species: {
      connect: {
        name: Species[4].name,
      },
    },
    gender: true,
    description:
      "A large, brightly colored parrot with red, yellow and blue plumage. It is highly intelligent and social. Its huge beak is adapted for cracking open hard nuts.",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },

  {
    name: "Green backed tit",
    price: 1100,
    age: 4,
    size: 12,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: true,
    description:
      "A small, stocky seabird with black upperparts and white underparts. It has a large, colorful bill. Nesting in burrows on cliff edges, it is an excellent swimmer and diver.",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },
  {
    name: "Resplendent Quetzal",
    price: 1100,
    age: 4,
    size: 13,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: false,
    description:
      "An exotic Central American bird with brilliant green upperparts and crimson underparts. It has extremely long, colorful tail feathers.",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },
  {
    name: "Bald tit",
    price: 1222,
    age: 4,
    size: 15,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: true,
    description:
      "A distinctive eagle native to North America with a white head, white tail and dark brown body. It is the national bird symbol of the United States.",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },
  {
    name: "Scarlet Macaw",
    price: 999,
    age: 7,
    size: 18,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: false,
    description:

      "A large, brightly colored parrot with red, yellow and blue plumage. It is highly intelligent and social. Its huge beak is adapted for cracking open hard nuts.",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },
  {
    name: "Mangrove whistler",
    price: 999,
    age: 7,
    size: 18,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: true,
    description:
      "Brown-backed Shrike is a medium-sized species in the whistler group (about 16 cm). The bird has a thick black bill, gray-brown head, brown upper body and white lower body with a pale white throat and gray-brown chest. Lives in mangrove forests. Scream loudly. ",
    trophy: "Champion of the Seabird Singing Festival 2020."
  },

  {
    name: "Black throated tit",
    price: 999,
    age: 7,
    size: 18,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: false,
    description:
      "Length about 11 cm. Attractive dark gray head feathers. The back has a cool green color. Ivory white neck. The chest and abdomen are bright yellow. The tail is black with smooth lobes with a pure white edge. Glossy black beak. Coffee brown legs. Lives in open forests and bushes. The sound is gentle, repeated many times. ",
    trophy: "Champion of the 2021 forest bird singing contest."
  },

  {
    name: "Grey crowned tit",
    price: 288,
    age: 3,
    size: 9,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: true,
    description:
      "Length about 12 cm. The head is gentle silver gray. Attractive dark brown back. Ivory white neck. Pure pale yellow chest. The long, graceful tail is mysterious black. Sparkling black eyes. Smooth black beak. Elegant pale pink legs. Lives in open forests and bushes. The screeching sound echoed far away.",
    trophy: "Champion of the 2021 forest bird singing contest."
  },

  {
    name: "Yellow cheeked tit",
    price: 908,
    age: 4,
    size: 19,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    gender: false,
    description:
      "The length is about 13 cm. The head is jet black with two bright yellow patches on both cheeks. Romantic silver gray back. White neck. Sweet golden chest and belly. The black tail has a shimmering white edge. Glossy black beak. Slender black legs. Lives in open forests and bushes along streams. Squeaking loudly.",

  },

  {
    name: "Yellow browed tit",
    price: 728,
    age: 5,
    size: 13,
    Species: {
      connect: {
        name: Species[1].name,
      },
    },
    Discount: {
      connect: {
        name: Discounts[2].name,
      },
    },
    gender: true,
    description:

      "Wild silver tit is the smallest species in the silver tit group (only about 10 cm). The bird has light green plumage (the upper body is darker), slightly erect head feathers, a very small beak and prominent white eye rims. Lives in open forests and bushes. Screaming loudly, repeated many times. ",


  },
  {
    name: "Long-tailed shrike",
    price: 7800,
    age: 4,
    size: 25,
    Species: {
      connect: {
        name: Species[2].name,
      },
    },
    gender: false,
    description:
      "The long-tailed cypress has an average size in the cypress group (about 25 cm). The bird has a large black patch across the eye, white throat and upper chest, chestnut brown upper body, flanks and tail feathers, and a long black tail. Lives in grasslands and bushes. The hoarse cry echoed far away. ",
    trophy: "First prize of the National Forest Birding Festival 2021."
  },

  {
    name: "Mangrove whistler 1111",
    price: 9800,
    age: 7,
    size: 28,
    Species: {
      connect: {
        name: Species[2].name,
      },
    },
    gender: true,
    description:
      "Brown-backed Shrike is a medium-sized species in the whistler group (about 16 cm). The bird has a thick black bill, gray-brown head, brown upper body and white lower body with a pale white throat and gray-brown chest. Lives in mangrove forests. Scream loudly. ",
    trophy: "First prize of the National Forest Birding Festival 2019."
  },

  {
    name: "Northern brown shrike",
    price: 2300,
    age: 3,
    size: 21,
    Species: {
      connect: {
        name: Species[2].name,
      },
    },
    gender: false,
    description:
      "The brown cypress is a medium-sized species in the cypress group (about 18 cm). The bird has a large black patch across the eye, white eyebrows, brown upper body and light brown lower body. Lives in grasslands and bushes. The hoarse cry echoed far and wide, repeating continuously. ",

  },
  {
    name: "Burmese shrike",
    price: 14000,
    age: 5,
    size: 15,
    Species: {
      connect: {
        name: Species[2].name,
      },
    },
    gender: true,
    description:
      "Lesser Cypress is a medium-sized species in the Cypress group (about 20 cm). The male has a black head, a dark chestnut brown upper body with prominent white markings on the black wings, a white chin to the lower body, and a black upper tail with a white outer edge. Lives in bushes and shrubs. The hoarse cry echoed far away.",
  },
  {
    name: "Tiger shrike",
    price: 4000,
    age: 6,
    size: 24,
    Species: {
      connect: {
        name: Species[2].name,
      },
    },
    gender: false,
    description:
      "The zebra cypress is a small-sized species in the cypress group (about 18 cm). The bird's name is based on its characteristic red-brown stripes with tiger-like black stripes on its upper body. The bird has a large blue-black beak, black end of the beak, black-gray legs, gray head feathers with a clear black mask line. Lives in bushes and shrubs. The hoarse cry echoed far away.",
  },
  {
    name: "Northern sooty headed bulbul",
    price: 6700,
    age: 3,
    size: 19,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: true,
    description:
      "Red-rumped mop is a small-sized species in the crested bulbul group (about 19 cm). The bird has a brown upper body, a white lower neck, a black head with a small crest, and red tail feathers. Lives in open forests and gardens. The singing echoed and intermingled.",
    trophy: "Champion of the Forest Bird Festival 2010."
  },
  {
    name: "Stripe-throated bulbul",
    price: 1200,
    age: 3,
    size: 11,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: false,
    description:
      "The strip-throated mop is a medium-sized species (about 20 cm) in the bulbul family. The bird has very prominent yellow stripes on the top of the head, around the ears, neck and upper chest. The bird has a gray underbody with small white stripes. Birds often pair up in the summer, building a nest like a small cup in a low bush (about 1 meter above the ground).. Lives in open forests and orchards. Chirping loudly.",
    trophy: "Champion of the 2023 Young Bird Singer contest."
  },
  {
    name: "Yellow-vented bulbul",
    price: 2900,
    age: 6,
    size: 17,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: true,
    description:
      "The white toad has an average size in the bulbul family (about 20 cm). The bird has a prominent black fossa in front of its eyes between wide eyebrows and a white neck, a brown upper body and a white lower body with many dark stripes, and a yellow lower tail cover. . Lives in gardens and bushes. Chirping sounds clear.",
    trophy: "Champion of the 2021Young Bird Singer contest."
  },

  {
    name: "Streak-eared bulbul",
    price: 9900,
    age: 4,
    size: 15,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: false,
    description:
      "Striped-eared mop is a medium-sized bird (about 18 cm). The upper body is brown, the lower body is light gray and the undertail is yellow. They are very prominent with their white-striped ear patches (which is how they get their name) and brown beaks, gradually turning pink towards the base of the beak. Lives in open forests and fruit orchards. The chirping sound is clearly heard.",
    trophy: "Champion of the 2021Young Bird Singer contest."
  },


  {
    name: "Red-whiskered bulbul",
    price: 9900,
    age: 4,
    size: 15,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: true,
    description:
      "The crested bulbul is a medium sized species in the crested bulbul group (20 cm). The bird has a brown upper body and a white lower body with a black band of spots running across the chest. The bird has a high, erect black comb, a patch of red feathers on its face, a thin strip of black feathers under its cheeks, a long brown tail with white tips, and red lower tail feathers. Lives in gardens and bushes. Bulbul Ballad Master:",
    trophy: "Champion of the 2002 Young Bird Singer contest."
  },

  {
    name: "Striated bulbul",
    price: 25000,
    age: 3,
    size: 21,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: false,
    description:
      "The striped crested bulbul is a large species in the crested bulbul group (about 23 cm). The bird has many black stripes on the crest, shoulders and lower body, the upper body is green and yellow, and the throat is yellow.",

  },

  {
    name: "Black headed bulbul",
    price: 15000,
    age: 3,
    size: 22,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: true,
    description:
      "The black-headed yellow-crested bulbul is a medium-sized bird in the bulbul family (about 18 cm). The bird stands out with a glossy black head but no crest, olive green body mixed with yellow, black wing feathers, black tail with yellow tail tip.",
  },
  {
    name: "Black-crested bulbul",
    price: 5008,
    age: 3,
    size: 24,
    Species: {
      connect: {
        name: Species[3].name,
      },
    },
    gender: false,
    description:
      "The black-crested yellow-crested bulbul is a medium-sized bird in the bulbul family. The bird has a black head with an erect crest and white rings around the eyes. The rest of the body is yellow with different tones.",
  },
  {
    name: "Golden-bellied gerygone",
    price: 7890,
    age: 3,
    size: 26,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: false,
    description:
      "The yellow-winged warbler is a medium-sized bird in the Lark family (about 12 cm). During the breeding season, the male's entire throat and upper chest are gray-black while the female's do not turn black. They have a reddish-brown head, a yellow-green upper body and a white lower body with a yellow tail.",
    trophy: "Third prize Fruit Bird Song 2010.",
  },
  {
    name: "Brownish flanked bush warbler",
    price: 9876,
    age: 2,
    size: 18,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: true,
    description:
      "The strong-legged warbler is a medium-sized species in the bush warbler group (about 11cm). The bird's plumage is mostly brown with a whiter part from the throat to the middle of the belly, light gray eyebrows, reddish-brown flanks and a darker upper part of the tail.",
    trophy: "Third prize Fruit Bird Song 2002.",
  },
  {
    name: "Oriental magpie-robin",
    price: 2337,
    age: 2,
    size: 17,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: false,
    description:
      "The warbler is a large bird of the flycatcher family. The bird has glossy black feathers on the head, neck and back with a chestnut brown belly and white anal feathers, and a long black tail.",
    trophy: "Champion of the Asian Songbird Festival 2016..",
  },
  {
    name: "White-tailed Eagle (Haliaeetus albicilla) ",
    price: 12999,
    age: 2,
    size: 14,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: true,
    description:
      "The White-tailed Eagle (Haliaeetus albicilla) is a large falcon, with a white head and tail and brown feathers. They live in seas and waterside areas, hunting fish and small animals. The White-tailed Eagle is known for its wide wingspan and is emblematic of its aquatic habitat.",
    trophy: "Champion of the Asian Songbird Festival 2016..",
  },
  {
    name: "Steller's Sea Eagle  ",
    price: 100000,
    age: 5,
    size: 32,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: false,
    description: "The Steller's Sea Eagle (Haliaeetus pelagicus) is a large falcon that lives in tropical and temperate waters of Northeast Asia, mainly in Russia and Japan. They have white heads and tails, brown bodies, and are known for their wide wingspans. The Steller's Sea Eagle is one of the largest falcons in the world and typically hunts from the water, favoring fish and marine animals.",

  },
  {
    name: "African Fish Eagle  ",
    price: 100000,
    age: 5,
    size: 32,
    Species: {
      connect: {
        name: Species[0].name,
      },
    },
    gender: true,
    description:


      "The African Fish Eagle (Haliaeetus vocifer) is a large falcon found in Africa. They have white head and tail feathers, dark brown bodies and black beaks. This species usually lives near water and hunts mainly fish by flapping its wings and catching fish with its claws. Their call resembles a vocifer, from which they get their name, and is often used for identification.",
  },








];

export const getBirdData = () => {
  return birds;
};

//type: 1 is prepareed , 2 is customer
const nest: Prisma.NestCreateInput[] = [
 
 
];

export const getNestData = () => {
  return nest;
};

const notification: Prisma.NotificationCreateInput[] = [
  {
    type: 1,
    content: "Hello dear customers! Our bird store is having a special promotion: Buy 2 birds, get 1 free bird cage. Don't miss this opportunity to add a new member to your family  ",
    title: "Attractive promotions!",
    Account: {
      connect: [{ email: accounts[0].email }, { email: accounts[1].email }],
    },
  },
  {
    type: 1,
    content: "Hello customers, we are extremely excited to announce that there are new pet birds available in our store. Visit the store today to discover these unique and beautiful birds.  ",
    title: "New ornamental birds have arrived at the store!",
    Account: {
      connect: [{ email: accounts[0].email }, { email: accounts[1].email }],
    },
  },
  {
    type: 1,
    content: "Instructions for caring for your pet bird",
    title: "Hello, we organized a pet bird care tutorial this weekend. Don't hesitate to join to learn how to best care for and nurture your pet birds. Your participation is important. ",
    Account: {
      connect: [{ email: accounts[0].email }, { email: accounts[1].email }],
    },
  },
  {
    type: 1,
    content: "Notice of change in opening hours",
    title: "Hello customers, from tomorrow, our store will adjust its opening hours. We will be open from 9:00 am to 7:00 pm on weekdays and from 10:00 am to 5:00 pm on Sundays. Thank you for your understanding and we look forward to serving you.",
    Account: {
      connect: [{ email: accounts[0].email }, { email: accounts[1].email }],
    },
  },
  {
    type: 1,
    content: "Hello, we are pleased to announce the upcoming bird festival event at our store. This will be a great opportunity to meet other bird lovers and participate in fun activities. Mark your calendars for November 15th and join us!",
    title: "Announcing the upcoming ornamental bird festival!",
    Account: {
      connect: [{ email: accounts[0].email }, { email: accounts[1].email }],
    },
  },
];

export const getNotificationData = () => {
  return notification;
};

const feedback: Prisma.FeedbackCreateInput[] = [
  {
    feedback: "The store has a diverse range of birds. I bought a pair of African Fish Eagle and they are getting along very well. Fast and helpful delivery service.",
    account: {
      connect: {
        email: accounts[0].email,
      },
    },
  },
  {
    feedback: "I ordered a pair of Bald Eagles and they are unbelievably beautiful. However, the purchasing and delivery process was a bit complicated and took longer than I expected.",
    account: {
      connect: {
        email: accounts[1].email,
      },
    },
  },
];

export const getFeedbackData = () => {
  return feedback;
};
