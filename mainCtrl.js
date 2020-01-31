



const mostFrequent = (lista) => {
let newArray = [];
    for(let i = 0; i < lista.length; i++) {
       let maisFrequent = null;
        let currentNumber = lista[i];
        let contador = 0;
        for (let j = 0; j< lista.length;j++ ){
            if(lista[j] === currentNumber){
                contador ++;
                
                
            }
             
            

        }
        newArray[i] = `${currentNumber} apareceu ${contador}`;
        

        console.log(newArray);

        
    }
};

mostFrequent([1,2,3,3]);