

function createfilePath(fileData) {

    const randomBool = Math.random() > 0.5 ? 'OK' : 'KO';

    const applicationId = fileData.applicationid;
    const sociedad = fileData.applicationid;
    const periodo = fileData.applicationid;
    const data_timestamp_part = "2022-02-04";
    const data_date_part = "20220204071644300" ;
    const fileName = "filerandom";


    const filePath = `downloads/${applicationId}}/${sociedad}/${periodo}/data_date_part=${data_date_part}/data_timestamp_part=${data_timestamp_part}/${fileName}.csv`


    const json = JSON.stringify({
        'downloadFileValidationOut':{
            'result_load':randomBool,
            "result":{
                "outputFileUrl": filePath ,
                "description": (randomBool)? 'Load Successful' : 'Fault caused by ignorance'
            }
    }});


    return json
}


module.exports.createfilePath = createfilePath;