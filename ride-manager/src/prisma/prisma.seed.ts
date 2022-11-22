import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const angelica = await prisma.user.upsert({
    where: { email: 'angel123@gmail.com' },
    update: {},
    create: {
      email: 'angel123@gmail.com',
      rider: { 
        create: {

        }
      }
    },
  })
  const gomez = await prisma.user.upsert({
    where: { email: 'gomez123@gmail.com' },
    update: {},
    create: {
      email: 'gomez123@gmail.com',
      rider: { 
        create: {

        }
      }
    },
  })
  const jessica = await prisma.user.upsert({
    where: { email: 'jess777@gmail.com' },
    update: {},
    create: {
      email: 'jess777@gmail.com',
      driver: {
        create: {
          nowLatitude:3.469946,
          nowLongitude:-76.486108 
        }
      }
    },
  })
  const nico = await prisma.user.upsert({
    where: { email: 'nicolas@gmail.com' },
    update: {},
    create: {
      email: 'nicolas@gmail.com',
      driver: {
        create: {
          nowLatitude:3.479946,
          nowLongitude:-76.506108 
        }
      }
    },
  })
  const melanie = await prisma.user.upsert({
    where: { email: 'melanie@gmail.com' },
    update: {},
    create: {
      email: 'melanie@gmail.com',
      driver: {
        create: {
          nowLatitude:3.309946,
          nowLongitude:-76.436108 
        }
      }
    },
  })
  console.log({ angelica, jessica })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
