let pets = ['cat', 'dog', 'rat'];

for (idx in pets) {
    pets[idx] = pets[idx]+'s';
}

console.log(pets);