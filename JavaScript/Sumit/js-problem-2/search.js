// নিচের sentence এ "sumit" শব্দটি কতবার ব্যাবহার হয়েছে? প্রথমবার "sumit" কত নাম্বার পজিশনে পাওয়া গেছে?

const sentence =
  'Learn with Sumit is all about teaching web development skills and techniques is an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer';

let matches = sentence.match(/sumit/gi);
matches = matches ? matches.length : 0;
console.log(`The match value is: ${matches}`);

let position = sentence.search(/sumit/i);
position = position >= 0 ? position : 'Not Found!';
console.log(`The position number is: ${position}`);
