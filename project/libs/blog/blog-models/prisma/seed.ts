import { PostType, PrismaClient } from '@prisma/client';

const FIRST_POST_UUID = '6d308040-96a2-4162-bea6-2338e9976540';
const SECOND_POST_UUID = 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd';

const FIRST_USER_ID = '682b65ff16b8e0b9712a916e';
const SECOND_USER_ID = '682f79ed695ed89f38fb76db';

function getPosts() {
  return [
    {
      id: FIRST_POST_UUID,
      userId: FIRST_USER_ID,
      tags: ['tag1', 'tag2', 'tag3'],
      type: PostType.video,
      content: {
        title: 'Видео пост',
        videoUrl: 'uploads/video1.mp4'
      },
      likes: [{ userId: SECOND_USER_ID }],
      comments: [
        {
          message: 'Комментарий',
          userId: SECOND_USER_ID,
        },
        {
          message: 'Комментарий 2',
          userId: SECOND_USER_ID,
        },
      ],
    },
    {
      id: SECOND_POST_UUID,
      userId: SECOND_USER_ID,
      tags: ['tag1', 'tag5'],
      type: PostType.text,
      content: {
        title: 'Текстовый пост',
        teaser: 'Teaser',
        text: 'Lorem ipsum',
      },
      likes: [{ userId: FIRST_USER_ID }],
      comments: [
        {
          message: 'Комментарий 5',
          userId: FIRST_USER_ID,
        },
        {
          message: 'Комментарий 6',
          userId: FIRST_USER_ID,
        },
      ]
    }
  ]
}

async function seedDb(prismaClient: PrismaClient) {
  const mockPosts = getPosts();

  for (const post of mockPosts) {
    await prismaClient.post.upsert({
      where: { id: post.id },
      update: {},
      create: {
        id: post.id,
        userId: post.userId,
        tags: post.tags,
        type: post.type,
        content: JSON.stringify(post.content),
        comments: post.comments ? {
          create: post.comments,
        } : undefined,
        likes: post.likes ? {
          create: post.likes,
        } : undefined,
      }
    })
  }

  console.info('🤘️ Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
