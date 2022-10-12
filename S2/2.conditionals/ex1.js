const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}]

    let alumnApproved = 0;

    for (let index = 0; index < alumns.length; index++) {
        const alumn = alumns[index];

       let alumnApproved = 0;
        
        if ( alumn.T1){
            alumnApproved++;
        }

        if ( alumn.T2){
            alumnApproved++;
        }

        if ( alumn.T3){
            alumnApproved++;
        }
        alumn.isApproved = alumnApproved >= 2;
    }

console.log(alumns);