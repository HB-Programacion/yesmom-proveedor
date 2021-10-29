

export const getUrlName = ( string ) => {
    
    let temp;
    const str = string.toLowerCase();
    temp = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();
 
    // Corta los espacios al inicio y al final del sluging 
    temp = str.replace(/^\s+|\s+$/gm, '');
 
    // Reemplaza el espacio con guión  
    temp = str.replace(/\s+/g, '-');

    return temp;
}