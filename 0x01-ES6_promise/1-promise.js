export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200,
      body: "success"
    });
  } else {
    reject(new Error("the fake API is not working currently"));
  }
});
}
