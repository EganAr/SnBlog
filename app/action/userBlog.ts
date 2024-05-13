import { getData } from "../blog/page";

export async function userBlog(currentUser: any) {
  const userPromise = await getData(
    "http://localhost:3000/api/user?query=" + currentUser,
    1000
  );

  const [user] = await Promise.all([userPromise]);

  return user;
}
