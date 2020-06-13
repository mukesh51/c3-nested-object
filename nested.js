const testObject_1 = { x: { y: { z: "a" } } };

const testObject_2 = {
  awsSeminars: {
    nearMe: {
      London: {
        date: "Wed Aug 25",
        location: "O2 - London",
        cost: "100.00",
      },
    },
  },
};

function getNestedValue(fn, defaultVal) {
  try {
    return fn();
  } catch (e) {
    return defaultVal;
  }
}

// Pass the key using dot notation. See the Object above for reference.
// Returns default message "Not Found", if key path is invalid
console.log(getNestedValue(() => testObject_1.x.y.z, "Not Found"));

// Testing with another object
console.log(
  getNestedValue(
    () => testObject_2.awsSeminars.nearMe.London.location,
    "Not Found"
  )
);

//Passing wrong key to ensure default message is shown -- London is spelled incorrectly
console.log(
  getNestedValue(
    () => testObject_2.awsSeminars.nearMe.Londonn.location,
    "Key Path not found"
  )
);
