Time to complete: ~50 min

# Part A

NOTE: Requires Node.js (>6) to be installed on local machine

Command: `npm run randoms`

The `random.js` file has all the functions necessary to do the following:
1) Generate an array of 1,000,000 numbers
2) Parse the array and return the number of unique values identified using the random number logic specified in the assignment

# Part B

I believe that the function's operation is performed within O(1) auxiliary space given that I am using a Set to capture the random numbers. Sets only persist unique values, so we are not building up a full array only to de-dup it before exiting. But the larger the size of the seed array is, the more unique values there will be (generally) in the Set and therefore the Set will take up more memory. Whether that memory is part of the auxiliary space I am not entirely sure.