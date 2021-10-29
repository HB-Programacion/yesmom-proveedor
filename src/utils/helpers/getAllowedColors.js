
export const allowedColors = [
    { value: 'verde', label: 'verde', color: 'green' },
    { value: 'morado', label: 'morado', color: '#8512BE' },
    { value: 'turqueza', label: 'turqueza', color: '#87E4EC' },
    { value: 'rosado', label: 'rosado', color: 'pink' },
    { value: 'amarillo', label: 'amarillo', color: '#F9EB37' },
    { value: 'anaranjado', label: 'anaranjado', color: '#FF8C00' },
    { value: 'rojo', label: 'rojo', color: '#FF0000' },
    { value: 'azul', label: 'azul', color: '#0000CD' }
];

export const allowedTallas = [
    { value: 'x', label: 'x' },
    { value: 'xl', label: 'xl' },
    { value: 'l', label: 'l' },
    // { value: '6', label: '6' },
    // { value: '8', label: '8' },
    // { value: '10', label: '10' },
];
// export const allowedTallas = [
//     { value: '0', label: '0' },
//     { value: '2', label: '2' },
//     { value: '4', label: '4' },
//     { value: '6', label: '6' },
//     { value: '8', label: '8' },
//     { value: '10', label: '10' },
// ];

export const getAllowedColors = async () => {
    try{
        return allowedColors;
    }catch(err){
        console.log(err);
        return [];
    }
}