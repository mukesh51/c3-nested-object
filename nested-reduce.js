var arguments = process.argv;

searchObject = JSON.parse(arguments[2]);
keyPath = arguments[3];

keyPath = keyPath.replace(/ +/g, "");
keyPath = keyPath.replace(/\/+/g, "/");

if (keyPath.endsWith("/")) {
  keyPath = keyPath.replace(/\/*$/, "");
}
keyPath = keyPath.split("/");

const location = keyPath.reduce(myFunc, searchObject);

function myFunc(object, path) {
  try {
    output = (object || {})[path];
    if (typeof output == "undefined") {
      throw "path seems invalid";
    }
  } catch (err) {
    console.log(err);
  }
  return output;
}

console.log(location);
