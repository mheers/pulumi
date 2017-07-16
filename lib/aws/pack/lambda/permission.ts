// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

/* tslint:disable:ordered-imports variable-name */
import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

import {ARN} from "../types";
import {Function} from "./function";

export class Permission extends lumi.NamedResource implements PermissionArgs {
    public readonly action: string;
    public readonly function: Function;
    public readonly principal: string;
    public readonly sourceAccount?: string;
    public readonly sourceARN?: ARN;

    public static get(id: lumi.ID): Permission {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Permission[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: PermissionArgs) {
        super(name);
        if (lumirt.defaultIfComputed(args.action, "") === undefined) {
            throw new Error("Missing required argument 'action'");
        }
        this.action = args.action;
        if (lumirt.defaultIfComputed(args.function, "") === undefined) {
            throw new Error("Missing required argument 'function'");
        }
        this.function = args.function;
        if (lumirt.defaultIfComputed(args.principal, "") === undefined) {
            throw new Error("Missing required argument 'principal'");
        }
        this.principal = args.principal;
        this.sourceAccount = args.sourceAccount;
        this.sourceARN = args.sourceARN;
    }
}

export interface PermissionArgs {
    readonly action: string;
    readonly function: Function;
    readonly principal: string;
    readonly sourceAccount?: string;
    readonly sourceARN?: ARN;
}

