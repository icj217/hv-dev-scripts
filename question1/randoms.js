/**
 * @function getRandomNumber
 * @param {Number} max - The max limit
 * @returns {Number} - Random number from 0 to max
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * @function generateSeeds
 * @param {Number} length - How many seed numbers to generate
 * @returns {Array<Number>} - Array of numbers, none of which exceed the length argument in value
 */
function generateSeeds(length = 1000000) {
    const numbers = []
    while (numbers.length < length) {
        numbers.push(getRandomNumber(length))
    }
    return numbers
}

/**
 * @function getDistinctRandomNumbers
 * Took ~ 40 minutes to get through Question 1
 * Returns the number of unique numbers that would be returned by a random number generator using the logic specified in Question 1
 * @param {Array<Number>} seeds - Array of seeding integers used in random number generation
 * @returns {Number} - The number of unique values generated from the seeds array
 */
function getDistinctRandomNumbers(seeds) {
    if (seeds.length > 1000000) throw new Error('Number of seeding integers exceeds max limit')
    // Only need unique values
    const uniques = new Set()
    // Used to avoid having to traverse seeds in subsequent iterations
    let lastValue = null
    let i = 0
    while (i < seeds.length) {
        if (i === 0) {
            uniques.add(seeds[0])
            lastValue = seeds[0]
        } else {
            uniques.add(seeds[lastValue])
            lastValue = seeds[lastValue]
        }
        i++
    }
    return uniques.size
}

const seeds = generateSeeds(1000000)
const count = getDistinctRandomNumbers(seeds)
console.log(count)
