const parseArgs = () => {
    const obj = {};

    process.argv.slice(2).forEach(element => {
        if (element.startsWith('--')) {
          const [argName, val] = element.split('=')  
          obj[argName] = val;
        }
    })

    return obj
};

export {parseArgs}
