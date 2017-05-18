// *** WARNING: this file was generated by the Lumi IDL Compiler (CLIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {ClientCertificate} from "./clientCertificate";
import {LoggingLevel, MethodSetting} from "./method";
import {RestAPI} from "./restAPI";

export class Deployment extends lumi.Resource implements DeploymentArgs {
    public readonly name: string;
    public restAPI: RestAPI;
    public description?: string;
    public stageDescription?: StageDescription;
    public stageName?: string;

    constructor(name: string, args: DeploymentArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        if (args.restAPI === undefined) {
            throw new Error("Missing required argument 'restAPI'");
        }
        this.restAPI = args.restAPI;
        this.description = args.description;
        this.stageDescription = args.stageDescription;
        this.stageName = args.stageName;
    }
}

export interface DeploymentArgs {
    restAPI: RestAPI;
    description?: string;
    stageDescription?: StageDescription;
    stageName?: string;
}

export interface StageDescription {
    cacheClusterEnabled?: boolean;
    cacheClusterSize?: string;
    cacheDataEncrypted?: boolean;
    cacheTTLInSeconds?: number;
    cachingEnabled?: boolean;
    clientCertificate?: ClientCertificate;
    dataTraceEnabled?: boolean;
    description?: string;
    loggingLevel?: LoggingLevel;
    methodSettings?: MethodSetting[];
    metricsEnabled?: boolean;
    stageName?: string;
    throttlingBurstLimit?: number;
    throttlingRateLimit?: number;
    variables?: {[key: string]: string};
}


