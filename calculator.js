const input = document.getElementById("input");

const populate = (value) => {
  input.value += value;
};

const genresult = () => {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error!";
  }
};

const clearCalc = () => {
  input.value = "";
};
