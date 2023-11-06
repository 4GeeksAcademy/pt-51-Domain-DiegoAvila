let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let index = 0; index < pronoun.length; index++) {
    for (let indexAdj = 0; indexAdj < adj.length; indexAdj++) {
        for (let indexNoum = 0; indexNoum < noun.length; indexNoum++) {
            console.log(pronoun[indexAdj] + adj[index] + noun[indexNoum] + ".com"); 
        }
    }
}