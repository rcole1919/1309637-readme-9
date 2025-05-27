export interface Comment {
  id?: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
  postId: string;
}
