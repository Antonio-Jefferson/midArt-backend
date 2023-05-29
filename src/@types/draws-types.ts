export type DrawingType = {
  id: number;
  user_id: number;
  username: string;
  image_user: string | null;
  description: string;
  drawing_image: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
};
