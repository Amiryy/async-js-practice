import './styles.css';
import { getUsers } from "./database";

/*
avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
email: "george.bluth@reqres.in"
first_name: "George"
id: 1
last_name: "Bluth"
*/
function createUsersHtml(users) {
  if(users) {
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
    return usersHtml
  } else {
    return /*html*/`<span>No Data</span>`;
  }
}

window.onload = async function main() {
  const usersJson = await getUsers();
  const rootDiv = document.getElementById("root");

  console.log(usersJson);

  rootDiv.innerHTML = createUsersHtml(usersJson);
};