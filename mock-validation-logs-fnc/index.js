const { coreDecorator } = require("@sdh-core/sdh-core-lib/lib/decorators/CoreDecorator");
require('dotenv').config({ path: `./configuration/${process.env.environment}.env` });
const mockgenerateFiles = require('../helper/mockGenerationFilePath');


const methodHandler = async function (context) {

    let result;
    let cloudEvent = context.cloudEvent.toJson();
    const projectName = context.cloudEvent.getAppName();
    const cloudEventData = context.cloudEvent.payload('core');
    const dataEvent = cloudEventData.getMain().set('appName', projectName);
    const response = { body: { message: 'Unhandled exception' }, status: 409 };



    try {

        const randomCreateCorrect = Math.random() > 0.5 ? 'OK' : 'KO';

        if (randomCreateCorrect==='KO') {
            throw new Error(`Path incorrect`)
        }

        result  = mockgenerateFiles.createfilePath(dataEvent,randomCreateCorrect);
        context.cloudEvent.setSubject('OK');


        response.body = result;
        response.status = 200;

    } catch (error) {

        const errorUnhandledHttpException = `Couldn't create file  : ${error.message}`;
        response.status = 500;
        context.log.error(`${errorUnhandledHttpException}`);
        response.body = mockgenerateFiles.createfilePath(dataEvent,'KO');
        response.body.menssage_error=errorUnhandledHttpException;

        console.log(JSON.stringify(response.body));
    } finally {

        context.res = {
            body: response.body,
            status: response.status
        };

    }
}




const options = {};
module.exports = coreDecorator(methodHandler, options);