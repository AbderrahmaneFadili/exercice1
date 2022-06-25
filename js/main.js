/* Users List */
let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];

/* ////////// handle show & hid modal /////////// */
const modal = document.querySelector(".modal");
const addUserBtn = document.querySelector(".add-user-card .button");
const modalOverlay = document.querySelector(".modal-overlay");

addUserBtn.addEventListener("click", (event) => {
  modal.classList.add("show");
  modalOverlay.classList.add("show");
});

modalOverlay.addEventListener("click", (event) => {
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");
});

//Add & delete & show users

const usersList = document.querySelector("table.users-table > tbody");
console.log(usersList);

const showUsers = (users) => {
  const usersList = document.querySelector("table.users-table > tbody");

  users.forEach((user) => {
    usersList.innerHTML += /*html*/ `
          <tr>
            <td>${user.id}</td>
            <td>${new Date(user.createdDate).toLocaleDateString()}</td>
            <td>
            <span class="status ${
              user.status === "En validation"
                ? "on-validation"
                : user.status === "Validé"
                ? "valide"
                : user.status === "Rejeté"
                ? "rejected"
                : ""
            }">
              ${user.status}
            </span> 
            </td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.userName}</td>
            <td>${user.registrationNumber}</td>
            <td><i class="fas fa-trash-alt" id="remove"></i></td>
          </tr>
    
        `;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  showUsers(users);
});
