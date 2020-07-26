const monthNames = [
  "January",
  "February",
  "April",
  "March",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const groupUsers = (users) => {
  const userGroup = {};

  users.forEach((user) => {
    const month = new Date(user.dob).getMonth();

    const monthName = monthNames[month];

    if (!userGroup[monthName]) {
      userGroup[monthName] = [];
    }

    userGroup[monthName].push(user);
  });

  return {userGroup, monthNames};
};
