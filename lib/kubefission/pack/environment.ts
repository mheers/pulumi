// *** WARNING: this file was generated by the Lumi IDL Compiler (CLIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Environment extends lumi.Resource implements EnvironmentArgs {
    public readonly name: string;
    public runContainerImageURL: string;

    constructor(name: string, args: EnvironmentArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        if (args.runContainerImageURL === undefined) {
            throw new Error("Missing required argument 'runContainerImageURL'");
        }
        this.runContainerImageURL = args.runContainerImageURL;
    }
}

export interface EnvironmentArgs {
    runContainerImageURL: string;
}


