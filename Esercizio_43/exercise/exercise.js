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

saveUserToLocalStorage()