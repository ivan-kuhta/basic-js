function checkArray(array) {
  return array instanceof Array;
}

module.exports = function createDreamTeam(members) {
  return checkArray(members) && members.filter(name => typeof name == "string").map(name => name.replace(/\s/g, '')[0].toUpperCase()).sort().join('');
};
