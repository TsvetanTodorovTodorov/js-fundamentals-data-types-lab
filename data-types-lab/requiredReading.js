function solve(numOfPages, pagesPerHour, numOfDays) {
  let totalTime = numOfPages / pagesPerHour;
  let requiredHoursPerDay = totalTime / numOfDays;

  // пътя = скорост * време;
  // page = perHours * hours;

  console.log(requiredHoursPerDay);
}

solve(212, 20, 2);
solve(432, 15, 4);
