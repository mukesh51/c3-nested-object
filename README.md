### This is a sample javascript snippet, which helps you traverse thru any of the nested javascript object and fetch the value for the provided key.

#### To run the application, download the javascript file and type `node nested-reduce.js YOUR_JAVASCRIPT_OBJECT YOUR_KEY`

See the attached screenshot, which shows various scenarios. You can provide `key` with spaces, without spaces, multiple slashes in your key and it handles those cases. Only when the key provided is not found in the object, it throws an error and reports it back to user on console.

It uses Javascript's reduce function to get the desired functionality and keep it concise.

![Screenshot](https://github.com/mukesh51/c3-nested-object/blob/master/images/screenshot.png)

### There is an alternative way to above approach, which is provided in another file `nested.js`. This file doesn't allows you to provide a javascript object at runtime, but showcases another way to address this issue.

#### To run the application, download the javascript file and type `node nested.js`

#### Different Scenarios

When you run the above command, it generates three different results, based on our input.

1. `console.log(getNestedValue(() => testObject_1.x.y.z, "nil"));` line produces the following output 'a', since our javascript function traverses thru the testobject, which is as follows. `const testObject_1 = { x: { y: { z: "a" } } };`

2. `console.log( getNestedValue(() => testObject_2.awsSeminars.nearMe.London.location, "nil"));` line produces the output as `O2 - London`,since the javascript object, we provided is as follows
   `const testObject_2 = { awsSeminars: { nearMe: { London: { date: "Wed Aug 25", location: "O2 - London", cost: "100.00", }, }, }, };`

3. In scenario three, we provide wrong key to ensure our function works as expected in error scenarios. So for same javascript object as mentioned above, we call the function as follows
   `console.log( getNestedValue(() => testObject_2.awsSeminars.nearMe.Londonn.location, "nil") );`

The key `London` is spelled incorrectly for scenario 3 and the function returns the default value of `nil`, which is desired.

## The above function is static and does not provide a way of passing our own nested objects
