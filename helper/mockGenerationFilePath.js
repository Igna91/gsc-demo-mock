

function createfilePath(fileData, randomCreateCorrect) {

    const applicationId = fileData.fields.appName;
    const sociedad = fileData.fields.soc_id;
    const periodo = fileData.fields.perido_id;
    const data_timestamp_part = "2022-02-04";
    const data_date_part = "20220204071644300";
    const fileName = "filerandom";


    const filePath = `downloads/${applicationId}}/${sociedad}/${periodo}/data_date_part=${data_date_part}/data_timestamp_part=${data_timestamp_part}/${fileName}.csv`


    const json = JSON.stringify({
        'downloadFileValidationOut': {
            'result_load': randomCreateCorrect,
            "result": {
                "outputFileUrl": filePath,
                "description": (randomCreateCorrect === 'OK' ? 'Load Successful' : 'Fault caused by ignorance')
            }
        }
    });



    return json
}


module.exports.createfilePath = createfilePath;