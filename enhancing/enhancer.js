module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function repair(item) {
  return { ...item };
}

function succeed() {
  return true;
}

function fail(item) {
  return { ...item };
}



function get(item) {
  return { ...item };
}
