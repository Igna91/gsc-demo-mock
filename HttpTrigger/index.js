const { coreDecorator } = require("@sdh-core/sdh-core-lib/lib/decorators/CoreDecorator");
require('dotenv').config({ path: `./configuration/${process.env.environment}.env` });
const mockgenerateFiles = require('../helper/mockGenerationFilePath');


const methodHandler = async function (context, req) {


    const cloudEventData = context.cloudEvent.g
    const sourceType = cloudEventData.getMain().get('component');
    
try{

    const result = mockgenerateFiles.createfilePath("");


    





}catch(error){



}finally{}





    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";


        
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

const options = {};
module.exports = coreDecorator(methodHandler, options);