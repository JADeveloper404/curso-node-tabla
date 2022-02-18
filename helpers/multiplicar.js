const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 5, cantidad = 10, listar = false) => {
    try {
        let salida = '';
        let consola = '';
        
        
        for (let i = 1; i <= cantidad; i++) {
            const tabla = i * base;

            salida += base + " " + colors.green("x") + ` ${i} ${colors.magenta('=')} ${colors.red(tabla)}\n`;

            consola += `${base} x ${i} = ${tabla}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
    
        if (listar) {
            console.log(colors.blue(`--------------TABLA DEL ${base}---------------`));
            console.log(salida);
        }
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
};