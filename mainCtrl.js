



const mostFrequent = (lista) => {
let newArray = [];
let maisFrequent = null;
let contadorMaisAlto= null;

    for(let i = 0; i < lista.length; i++) {
        let currentNumber = lista[i];
        let contador = 0;
        for (let j = 0; j< lista.length;j++ ){
            if(lista[j] === currentNumber){
                contador ++;
            
            }
            if(contadorMaisAlto === null){
                contadorMaisAlto = contador;
            }else{
                if(contador>contadorMaisAlto){
                    contadorMaisAlto = contador;
                    maisFrequent = lista[i];
                }else{
                }
            }
              
        }
        
        


        
    }
    console.log(maisFrequent);

};

mostFrequent([1,2,3,3]);
mostFrequent([1,2,2,3,4,4]);