const BASE_URL = "https://randomuser.me/api/";

export async function getRandomUser(){
  const apiResponse = await fetch(BASE_URL);
  const userData = await apiResponse.json();
 return userData.results[0];
};