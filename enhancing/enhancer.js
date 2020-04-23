module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  let newObj = item;
  newObj.durability = "100";
  return { ...newObj };
}

function succeed() {
  return { ...item };
}

function fail(item) {
  return { ...item };
}



function get(item) {
  return { ...item };
}
