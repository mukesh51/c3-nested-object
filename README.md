This is a sample javascript snippet, which helps you traverse thru any of the nested javascript object and fetch the value for the provided key.

For example, in the below Javascript object, you can provide the following key `testObject_2.awsSeminars.nearMe.London.location` to the function and it should return the location.

`const testObject_2 = { awsSeminars: { nearMe: { London: { date: "Wed Aug 25", location: "O2 - London", cost: "100.00", }, }, }, };`

#### To run the application, download the javascript file and type `node nested.js`

The javascript file also contains scenarios for testing purposed by providing wrong keys.
