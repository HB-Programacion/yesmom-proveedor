export const createFile = async (url,name) => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: 'image/jpeg',
    };
    let file = new File([data], name, metadata);
  
    return {file};
  }