

export const getPrevieWImage = ( file ) => {

    const objectUrl = URL.createObjectURL(file);
    
    return objectUrl;
        // const reader = new FileReader();
        // reader.onloadend= () => {
        //     console.log(reader.result)
        // }
        
        // reader.readAsDataURL(file);

}