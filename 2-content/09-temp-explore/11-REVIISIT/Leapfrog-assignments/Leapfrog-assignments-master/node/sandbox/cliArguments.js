const args = process.argv.slice(2);

function parseArgs(args) {
  const argObject = {};
  const saperateArgs = args.map((item) => item.split('=')).flat();

  for (let i = 0; i < saperateArgs.length; i += 2) {
    argObject[saperateArgs[i]] = saperateArgs[i + 1];
  }

  return argObject;
}
    
console.log(parseArgs(args));
