// *** WARNING: this file was generated by the Lumi IDL Compiler (CLIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {InlinePolicy, Policy} from "./policy";

export class Group extends lumi.Resource implements GroupArgs {
    public readonly name: string;
    public readonly groupName?: string;
    public managedPolicies?: Policy[];
    public path?: string;
    public policies?: InlinePolicy;

    constructor(name: string, args: GroupArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        this.groupName = args.groupName;
        this.managedPolicies = args.managedPolicies;
        this.path = args.path;
        this.policies = args.policies;
    }
}

export interface GroupArgs {
    readonly groupName?: string;
    managedPolicies?: Policy[];
    path?: string;
    policies?: InlinePolicy;
}


