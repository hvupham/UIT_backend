const registerValid = (username, email, name, password) => {
  if (!username) return "Please enter your name";

  if (!email) return "Please enter your email address";
  if (!name) return "Please enter your name";
  if (!validateEmail(email)) return "Please enter valid email";
  if (!password) return "Please enter new password";
  if (password.length < 6)
    return "Password should contain atleast 6 characters";

};

const loginValid = (email, password) => {
  if (!email) return "Please enter your email";
  if (!password) return "Please enter your password";
};

const addFoodErrorHandler = (name, category, cost, description, image) => {
  if (!name) return "Please enter food name";
  if (!category) return "Please enter food category";
  if (!cost) return "Please enter food cost";
  if (!description) return "Please enter food description";
  if (!image) return "Please add food image";
};

const makeOrderErrorHandler = (name, email, foodName, address) => {
  if (!name) return "Please enter your name";
  if (!email) return "Please enter your email";
  if (!foodName) return "Food name reuired";
  if (!address) return "Please enter your address";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

module.exports = {
  registerValid,
  loginValid,
  addFoodErrorHandler,
  makeOrderErrorHandler,
};
