const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 6,l,h) =>{
    

    try{
        console.log("===============================".green);
        console.log('         Tabla del:'.green,colors.blue(base));
        console.log("===============================".green);
    
        let salida = '';

        for(let i=1;i<=h;i++){
            x = base *i;
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${x}\n`;
        }

        if(l==true){
            console.log(salida);
        }else{
            console.log();
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt creada`;
    }catch(err){
        throw err;
    }

    

}

module.exports = {
   crearArchivo
}