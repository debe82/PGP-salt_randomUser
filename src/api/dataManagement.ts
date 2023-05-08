const BASE_URL = "https://randomuser.me/api/";

export async function getRandomUser(){
  const apiResponse = await fetch(BASE_URL);
  //console.log("apiResponse: ", apiResponse);
  const userData = await apiResponse.json();
  //console.log("userData: ", userData);
 return userData.results[0];
};