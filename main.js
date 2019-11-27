const api = "https://reqres.in";

function getUsersPath(page) {
  let path = "/api/users";
  if(!isNaN(page)) {
    path += "?page=" + page
  }
  return path;
}

async function getUsers() {
  return await fetch(api + getUsersPath()).then(response => {
    if(!response.ok){
      throw Error("Failed to fetch data")
    }      
    
    return response.json();
  });
}
/*
avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
email: "george.bluth@reqres.in"
first_name: "George"
id: 1
last_name: "Bluth"
*/
function createUsersHtml(users) {
  let usersHtml = ``;
  for (const userData of users.data) {
    usersHtml += /*html*/`
    <div class="user-list-item">
      <img src="${userData.avatar}" alt="${userData.first_name}" />
      <span class="user-first-name">${userData.first_name}</span>
      <span class="user-last-name">${userData.last_name}</span>
    </div>
  `;
  }
  if(users) {
    return usersHtml
  } else {
    return /*html*/`<span>No Data</span>`;
  }
}

(async function main() {
  const userJson = await getUsers();
  const rootDiv = document.getElementById("root");

  console.log(userJson);

  rootDiv.innerHTML = createUsersHtml(userJson);
})()