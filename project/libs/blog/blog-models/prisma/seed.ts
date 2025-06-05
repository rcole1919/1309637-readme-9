import { PostType, PrismaClient } from '@prisma/client';

const FIRST_POST_UUID = '6d308040-96a2-4162-bea6-2338e9976540';
const SECOND_POST_UUID = 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd';

const POST_UUID = {
  FIRST: '6d308040-96a2-4162-bea6-2338e9976540',
  SECOND: 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd',
} as const;

const USER_ID = {
  FIRST: '682b65ff16b8e0b9712a916e',
  SECOND: '682f79ed695ed89f38fb76db',
} as const;

function getPosts() {
  return [
    {
      id: POST_UUID.FIRST,
      userId: USER_ID.FIRST,
      tags: ['tag1', 'tag2', 'tag3'],
      type: PostType.video,
      content: {
        title: 'Видео пост',
        videoUrl: 'uploads/video1.mp4'
      },
      likes: [{ userId: USER_ID.SECOND }],
      comments: [
        {
          message: 'Комментарий',
          userId: USER_ID.SECOND,
        },
        {
          message: 'Комментарий 2',
          userId: USER_ID.SECOND,
        },
      ],
    },
    {
      id: POST_UUID.SECOND,
      userId: USER_ID.SECOND,
      tags: ['tag1', 'tag5'],
      type: PostType.text,
      content: {
        title: 'Текстовый пост',
        teaser: 'Teaser',
        text: 'Lorem ipsum',
      },
      likes: [{ userId: USER_ID.FIRST }],
      comments: [
        {
          message: 'Комментарий 5',
          userId: USER_ID.FIRST,
        },
        {
          message: 'Комментарий 6',
          userId: USER_ID.FIRST,
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
