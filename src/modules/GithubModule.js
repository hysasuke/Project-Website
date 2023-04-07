export async function getLatestRelease() {
  const response = await fetch(
    "https://api.github.com/repos/hysasuke/Project-Hub/releases/latest"
  );
  const data = await response.json();
  return data;
}
