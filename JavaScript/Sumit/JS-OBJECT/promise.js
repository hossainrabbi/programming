const paymentMethod = true;
const marks = 90;

function enroll() {
  console.log('Course enroll progress!');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentMethod) {
        resolve();
      } else {
        reject('Payment Failed!');
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log('Course progress running...');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject('You could not enough mark to get the Certificate!');
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log('Preparing your Certificate!');

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Congratulation! you got Certificate!');
    }, 1000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
