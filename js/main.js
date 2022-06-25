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

const openModal = () => {
  modal.classList.add("show");
  modalOverlay.classList.add("show");
};

const closeModal = () => {
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");
};

addUserBtn.addEventListener("click", (event) => {
  openModal();
});

modalOverlay.addEventListener("click", (event) => {
  closeModal();
});

//Add & delete & show users

/* show users  */
const showUsers = (users) => {
  const usersList = document.querySelector("table.users-table > tbody");
  //reset the users table
  usersList.innerHTML = "";
  //show trhe users
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

/* Grabbing the inputs fields from the document    */
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const statusInput = document.querySelector("#status");
const username = document.querySelector("#username");
const creationDate = document.querySelector("#creationDate");
const registrationNumber = document.querySelector("#registration-number");
const form = document.querySelector(".modal-form");

/* add */
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //create new user
  const newUser = {
    id: Math.random().toString(10).slice(9),
    createdDate: new Date(creationDate.value),
    status: statusInput.value,
    firstName: firstName.value,
    lastName: lastName.value,
    userName: username.value,
    registrationNumber: registrationNumber.value,
  };

  //add user to the users list
  const newUsers = [...users, newUser];

  //show users
  showUsers(newUsers);

  //close the modal
  closeModal();
});

/* delete */
