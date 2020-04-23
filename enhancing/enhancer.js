module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed() {
  return true;
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
