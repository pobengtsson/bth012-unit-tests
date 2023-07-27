export function sayHello () {
  return 'Hello, World!'
}

// if run as node index.js then say hello to the console
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(sayHello())
}
