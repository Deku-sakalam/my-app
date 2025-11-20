const POSTKEY = "content";
//create post
//paramiter data with content
//get all
function createPost(content: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  const jLStorage = lStorage ? JSON.parse(lStorage) : [];

  jLStorage.push({
    content: content,
    date: new Date(),
  });
  localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
}

//like post with id
function likePost(id: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  if (lStorage) {
    const jLStorage = JSON.parse(lStorage) ?? [];
    jLStorage.push({
      id: id,
    });
    localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
  }
}
export function getAll() {
  const lStorage = localStorage.getItem(POSTKEY);
  const jLStorage = lStorage ? JSON.parse(lStorage) : [];
  return jLStorage;
}
//unlike post with id
export function LikePost(id: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  if (lStorage) {
    const jLStorage = JSON.parse(lStorage) ?? [];
    jLStorage.push({
      id: id,
    });
    localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
  }
}
export function unLikePost(id: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  if (lStorage) {
    const jLStorage = JSON.parse(lStorage) ?? [];
    jLStorage.push({
      id: id,
    });
    localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
  }
}
//comment post with paramiter id and content
function commentPost(id: string, content: string) {
  const lStorage = localStorage.getItem(POSTKEY);
  if (lStorage) {
    const jLStorage = JSON.parse(lStorage) ?? [];
    jLStorage.push({
      id: id,
      content: content,
    });
    localStorage.setItem(POSTKEY, JSON.stringify(jLStorage));
  }
}
export default createPost;
