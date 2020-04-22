/**
 * API title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as $ from 'jquery';
import * as models from '../model/models';
import { Configuration } from '../configuration';

const page_info = require('../../../app/javascript/page_info.js.erb')

/* tslint:disable:no-unused-variable member-ordering */




export class UsersApi {
    protected basePath = `${page_info.apiDomain}`;
    public defaultHeaders: Array<string> = [];
    public defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings = null;
    public configuration: Configuration = new Configuration();

    constructor(basePath?: string, configuration?: Configuration, defaultExtraJQueryAjaxSettings?: JQueryAjaxSettings) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
        if (defaultExtraJQueryAjaxSettings) {
            this.defaultExtraJQueryAjaxSettings = defaultExtraJQueryAjaxSettings;
        }
    }

    private extendObj<T1, T2 extends T1>(objA: T2, objB: T2): T1|T2 {
        for (let key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    }


    /**
     * Register a nonprofit
     * @summary Register a nonprofit
     * @param Nonprofit 
     */
    public postUser(User: models.PostUser, extraJQueryAjaxSettings?: JQueryAjaxSettings): JQueryPromise<models.Nonprofit > {
        let localVarPath = this.basePath + '/users';

        let queryParameters: any = {};
        let headerParams: any = {};
        // verify required parameter 'Nonprofit' is not null or undefined
        if (User === null || User === undefined) {
            throw new Error('Required parameter Nonprofit was null or undefined when calling postNonprofit.');
        }


        localVarPath = localVarPath + "?" + $.param(queryParameters);
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];


        headerParams['Content-Type'] = 'application/json';

        let requestOptions: JQueryAjaxSettings = {
            url: localVarPath,
            type: 'POST',
            headers: headerParams,
            processData: false
        };

        requestOptions.data = JSON.stringify(User);
        if (headerParams['Content-Type']) {
            requestOptions.contentType = headerParams['Content-Type'];
        }

        if (extraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, extraJQueryAjaxSettings);
        }

        if (this.defaultExtraJQueryAjaxSettings) {
            requestOptions = (<any>Object).assign(requestOptions, this.defaultExtraJQueryAjaxSettings);
        }

        let dfd = $.Deferred();
        $.ajax(requestOptions).then(
            (data: any, textStatus: string, jqXHR: JQueryXHR) =>
                dfd.resolve(jqXHR, data),
            (xhr: JQueryXHR, textStatus: string, errorThrown: string) => {
                    if (xhr.status == 422)
                    {
                        dfd.reject(new models.ValidationErrorsException(<models.ValidationErrors>xhr.responseJSON))
                    }

                    else
                    {

                        dfd.reject(errorThrown)
                    }
            }
        );
        return dfd.promise();
    }

}
