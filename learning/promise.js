const myPromise = new Promise((resolve, reject) => {
    // Perform some asynchronous operation, like fetching data from an API
    setTimeout(() => {
      // Assuming the operation was successful
      resolve("Data fetched successfully!");
      // If there was an error
       reject("Failed to fetch data");
    }, 2000); // 2000 milliseconds delay
  });
  myPromise.then((result) => {
    console.log(result); // Output: Data fetched successfully!
  }).catch((error) => {
    console.error(error); // Output: Failed to fetch data
  });
  
  