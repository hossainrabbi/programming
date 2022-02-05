// কিভাবে আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি।
const studentsName = ['Hossain', 'Ashiq', 'Kawsar', 'Rohan', 'Nahid', 'rakib'];

studentsName.sort(function (a, b) {
  if (a.toUpperCase() > b.toUpperCase()) return 1;
  if (a.toUpperCase() < b.toUpperCase()) return -1;
  return 0;
});

console.log(studentsName);

// কিভাবে আমাদের শ্রেণীকক্ষের সকলের রোল Alphabetically সাজাতে পারি।
const studentsRoll = [20, 5, 3, 6, 45, 23, 11, 9];
studentsRoll.sort(function (a, b) {
  return a - b;
});

console.log(studentsRoll);
