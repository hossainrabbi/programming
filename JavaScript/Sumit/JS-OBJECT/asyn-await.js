const paymentMethod = true;
const marks = 80;

function enroll() {
  console.log('Course enroll progress...');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentMethod) {
        resolve();
      } else {
        reject('Payment Failed!!');
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log('Course Progress start...');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject('You could not enough mark for get Certificate!');
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log('Processing your Certificate!');

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Congratulations! you got Certificate!');
    }, 1000);
  });

  return promise;
}

async function course() {
  try {
    await enroll();
    await progress();
    const certificate = await getCertificate();
    console.log(certificate);
  } catch (error) {
    console.log(error);
  }
}

course();
