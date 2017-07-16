// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

/* tslint:disable:ordered-imports variable-name */
import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export let DedicatedTenancy: InstanceTenancy = "dedicated";
export let DefaultTenancy: InstanceTenancy = "default";
export let HostTenancy: InstanceTenancy = "host";

export type InstanceTenancy =
    "dedicated" |
    "default" |
    "host";

export class VPC extends lumi.NamedResource implements VPCArgs {
    public readonly cidrBlock: string;
    public readonly instanceTenancy?: InstanceTenancy;
    public enableDnsSupport?: boolean;
    public enableDnsHostnames?: boolean;

    public static get(id: lumi.ID): VPC {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): VPC[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: VPCArgs) {
        super(name);
        if (lumirt.defaultIfComputed(args.cidrBlock, "") === undefined) {
            throw new Error("Missing required argument 'cidrBlock'");
        }
        this.cidrBlock = args.cidrBlock;
        this.instanceTenancy = args.instanceTenancy;
        this.enableDnsSupport = args.enableDnsSupport;
        this.enableDnsHostnames = args.enableDnsHostnames;
    }
}

export interface VPCArgs {
    readonly cidrBlock: string;
    readonly instanceTenancy?: InstanceTenancy;
    enableDnsSupport?: boolean;
    enableDnsHostnames?: boolean;
}

