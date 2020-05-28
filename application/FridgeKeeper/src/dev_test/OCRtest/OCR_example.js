import React from 'react';

export default function OCR(){ 
    
    var file;

    function choosefile (event){
        event.preventDefault();
        file = event.target.files[0]
    }


    function handleUploadfile (){

        const data = new FormData()
        data.append('uploadedFile',file);   // "uploadedFile" is just a name could be whatever but should be the same as below.
        fetch(`http://localhost:8080/backend/ocr.${file.name.substring(file.name.lastIndexOf('\.') + 1)}`,{
            method: 'POST',
            body: data
        })
        .then(res => res.text())
        .then(text => console.log(text))
    }

    return   <>
                <input type='file' name='uploadedFile' onChange={choosefile}/> {/* 'uploadedFile' or other name should be the same as above. */}
                <input type='submit' onClick={handleUploadfile}/>
            </>

}
