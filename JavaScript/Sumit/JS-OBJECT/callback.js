const paymentMethod = true;
const marks = 90;

function enroll(callBack) {
  console.log('Course enroll in progress!');

  setTimeout(() => {
    if (paymentMethod) {
      callBack();
    } else {
      console.log('Please, Pay for running the course!');
    }
  }, 2000);
}

function progress(callBack) {
  console.log('Course on Progress!');

  setTimeout(() => {
    if (marks >= 80) {
      callBack();
    } else {
      console.log('You could not get enough mark to get the Certificate!');
    }
  }, 3000);
}

function getCertificate() {
  console.log('Preparing your Certificate!');

  setTimeout(() => {
    console.log('Congratulation! you got Certificate!');
  }, 1000);
}

enroll(() => progress(getCertificate));
