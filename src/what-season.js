const MONTH = [
  { season: "winter", mounth: [1, 2, 12] },
  { season: "spring", mounth: [3, 4, 5] },
  { season: "summer", mounth: [6, 7, 8] },
  { season: "autumn", mounth: [9, 10, 11] },
];

module.exports = function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  const month = date.getUTCMonth() + 1;
  const season = MONTH.find((season) => season.mounth.includes(month)).season;
  return season;
};
