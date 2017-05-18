// *** WARNING: this file was generated by the Lumi IDL Compiler (CLIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {RestAPI} from "./restAPI";

export class Resource extends lumi.Resource implements ResourceArgs {
    public readonly name: string;
    public readonly parent: Resource;
    public readonly pathPart: string;
    public readonly restAPI: RestAPI;

    constructor(name: string, args: ResourceArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        if (args.parent === undefined) {
            throw new Error("Missing required argument 'parent'");
        }
        this.parent = args.parent;
        if (args.pathPart === undefined) {
            throw new Error("Missing required argument 'pathPart'");
        }
        this.pathPart = args.pathPart;
        if (args.restAPI === undefined) {
            throw new Error("Missing required argument 'restAPI'");
        }
        this.restAPI = args.restAPI;
    }
}

export interface ResourceArgs {
    readonly parent: Resource;
    readonly pathPart: string;
    readonly restAPI: RestAPI;
}


