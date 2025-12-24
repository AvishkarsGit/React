export async function getLoaderData() {
  const response = await fetch('https://api.github.com/users/AvishkarsGit');
  return response.json();
}
