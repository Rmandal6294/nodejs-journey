import os from 'os'

console.log('Platform: ', os.platform());

// Returns an array containing information about the computer's CPUs
console.log('Cpu Cores: ', os.cpus().length); 

// Returns the number of free memory of the system
console.log('Free Memory: ', os.freemem());

// Returns the number of total memory of the system
console.log('Total Memory: ', os.totalmem());

// Returns an array containing the load averages
console.log('Load Average: ', os.loadavg().length);

// Returns the operating system CPU architecture
console.log("Architecture: ", os.arch());

// Returns the hostname of the operating system
console.log('Hostname: ', os.hostname());

// Returns information about the operating system's release
console.log('Release: ', os.release());

//	Returns the name of the operating system
console.log('OS name: ', os.type());

// 	Returns the uptime of the operating system, in seconds
console.log('Uptime: ', os.uptime());

// 	Returns information about the current user
console.log('User Info: ', os.userInfo());

// Returns the network interfaces that has a network address
console.log('Network: ', os.networkInterfaces()); 
