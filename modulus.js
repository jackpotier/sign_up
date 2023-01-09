
let less = 0, equal = 0, more = 0

for (let a=-10;a<11;a++){
    for (let b=-10;b<11;b++){
        for (let c=-10;c<11;c++){
            let reactants = Math.abs(a-b);
            let products = Math.abs(a-c) + Math.abs(c-b);
            if (reactants < products){
                less+=1;
            }
            else if (reactants == products){
                equal +=1;
            }
            else if (reactants > products){
                more+=1;
            }
        }
    }
}

console.log(less, equal, more)

