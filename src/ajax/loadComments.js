export default async function loadComments({
  numCommentsInPage = 12,
  pageNum = 1,
}) {
  try {
    const DUMMY_COMMENTS_URL =
      `https://jsonplaceholder.typicode.com/comments?_limit=${numCommentsInPage}&_page=` +
      pageNum;
    const response = await fetch(DUMMY_COMMENTS_URL);
    const newComments = await response.json();
    return newComments;
  } catch (error) {
    console.log("Error in loadComments(): ", error);
  }
}
