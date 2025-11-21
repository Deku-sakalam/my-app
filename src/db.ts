const POSTKEY = "content";
export type Post = {
  id: string;
  content: string;
  like: number;
  disLike: number;
  date: Date;
  comments: {
    id: string;
    content: string;
    date: Date;
  }[];
};

function createPost(content: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  const jLStorage = lStorage ? JSON.parse(lStorage) : [];
  jLStorage.push({
    id: crypto.randomUUID(),
    content: content,
    date: new Date(),
    like: 0,
    disLike: 0,
    comments: [],
  });
  localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
  return jLStorage;
}

export function GetPosts() {
  const lStorage = localStorage.getItem(POSTKEY);
  const jLStorage = lStorage ? JSON.parse(lStorage) : [];
  return jLStorage;
}

export function LikePost(id: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  const posts = lStorage ? JSON.parse(lStorage) : [];
  const index = posts.findIndex((post: Post) => post.id === id);
  posts[index].like++;
  localStorage.setItem(POSTKEY, JSON.stringify(posts));
  return posts;
}

export function DisLikePost(id: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  const posts = lStorage ? JSON.parse(lStorage) : [];
  const index = posts.findIndex((post: Post) => post.id === id);
  posts[index].disLike++;
  localStorage.setItem(POSTKEY, JSON.stringify(posts));
  return posts;
}

export function commentPost(id: string, content: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  const posts = lStorage ? JSON.parse(lStorage) : [];
  const index = posts.findIndex((posts: Post) => posts.id === id);
  posts[index].comments.push({
    id: crypto.randomUUID(),
    content: content,
    date: new Date(),
  });
  localStorage.setItem(POSTKEY, JSON.stringify(posts));
  return posts;
}

export default createPost;
