const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    console.log(document.getElementById("peso") )
    const DATO = document.getElementById('peso').value;
    console.log('Se hizo click!')
    console.log('dato ingresado: ', DATO)
if(DATO >0){
    ERROR.style.display = "none";
    let flujo = holliday(DATO);
    let mantenimiento = flujo*1.5;
    FLU.innerHTML = flujo + "cc/hr";
    MAN.innerHTML='m+m/2 ' + mantenimiento + ' cc/hr';

    FLU.style.display = "block";
    MAN.style.display = "block";
}else{
    ERROR.style.display = "block";
    FLU.style.display = "none";
    MAN.style.display = "none";
}
})

function holliday(pesocal){
    if( pesocal> 20){
        resultado= ( pesocal - 20)*20
        //dosis = resultado + 1500;
    }else if(pesocal<=20 && pesocal >10){
        resultado = ( pesocal - 10)* 50;
    }else{ 
        resultado = pesocal* 100;
    }
    mantHora = pesocal / 24;
    return resultado
}
