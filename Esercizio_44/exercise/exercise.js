const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage() {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
    console.log('User saved to localStorage.');
  } catch (error) {
    console.error(error);
  }
}

function getUserFromLocalStorage() {
  try {
    const userJSON = localStorage.getItem('user');
    const userObj = JSON.parse(userJSON);
    console.log(userObj);
  } catch (error) {
    console.error(error);
  }
}

saveUserToLocalStorage();
getUserFromLocalStorage();