/* Version Non optimisée */
function countPrimeNumbers()
{
    let nbPrimeNumber = 0;
    let nbDiv;
    for(let i = 2; i <= 100; i += 1)
    {
        nbDiv = 0;
        for(let j = 1; j <= i; j++)
        {
            if (i % j === 0) {
                nbDiv++;
            }
        }
        if(nbDiv === 2)
            nbPrimeNumber++;
    }
    return nbPrimeNumber;
}

const startTime = performance.now();
setTimeout(() => {
    for(let repeat = 0; repeat < 100; repeat++)
        countPrimeNumbers();
}, 0);
const endTime = performance.now();
const ExecuteTime = endTime - startTime;

console.log("Execution time of calculating prime numbers 100 times was " + ExecuteTime + " milliseconds.");


/*
Version Moins optimisée :
function countPrimeNumbers()
{
    let nbPrimeNumber = 0;
    let isPrime;
    for(let i = 2; i <= 100; i += 1)
    {
        isPrime = true;
        for(let j = 2; j < i; j++)
        {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime === true)
            nbPrimeNumber++;
    }
    return nbPrimeNumber;
}

const startTime = performance.now();
setTimeout(() => {
    for(let repeat = 0; repeat < 100; repeat++)
        countPrimeNumbers();
}, 0);
const endTime = performance.now();
const ExecuteTime = endTime - startTime;

console.log("Execution time of calculating prime numbers 100 times was " + ExecuteTime + " milliseconds.");
*/


/*
Version Optimisée :
function countPrimeNumbers()
{
    let nbPrimeNumber = 1; // On Commence à 1, car 2 est un nombre premier
        let isPrime;
        for(let i = 3; i < 100; i += 2) // Les nombres premiers sont tous impairs, sauf 2
        {
            isPrime = true;
            for(let j = 3; j <=Math.sqrt(i); j += 2) // Vu que i est forcément impair, ça ne sert à rien de regarder les diviseurs pairs
            {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime === true)
                nbPrimeNumber++;
        }
    return nbPrimeNumber;
}

const startTime = performance.now();
setTimeout(() => {
    for(let repeat = 0; repeat < 100; repeat++)
        countPrimeNumbers();
}, 0);
const endTime = performance.now();
const ExecuteTime = endTime - startTime;

console.log("Execution time of calculating prime numbers 100 times was " + ExecuteTime + " milliseconds.");
*/