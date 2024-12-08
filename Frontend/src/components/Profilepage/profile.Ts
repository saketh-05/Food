export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  category: string;
}