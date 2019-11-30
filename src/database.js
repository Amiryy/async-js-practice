const api = "https://reqres.in";

function getUsersPath(page) {
  let path = "/api/users";
  if(!isNaN(page)) {
    path += "?page=" + page
  }
  return path;
}

export async function getUsers() {
  return await fetch(api + getUsersPath()).then(response => {
    if(!response.ok){
      throw Error("Failed to fetch data")
    }      
    
    return response.json();
  });
}