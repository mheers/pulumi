// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

/* tslint:disable:ordered-imports variable-name */
import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

import {InternetGateway} from "./internetGateway";
import {VPC} from "./vpc";

export class VPCGatewayAttachment extends lumi.NamedResource implements VPCGatewayAttachmentArgs {
    public readonly vpc: VPC;
    public readonly internetGateway: InternetGateway;

    public static get(id: lumi.ID): VPCGatewayAttachment {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): VPCGatewayAttachment[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: VPCGatewayAttachmentArgs) {
        super(name);
        if (lumirt.defaultIfComputed(args.vpc, "") === undefined) {
            throw new Error("Missing required argument 'vpc'");
        }
        this.vpc = args.vpc;
        if (lumirt.defaultIfComputed(args.internetGateway, "") === undefined) {
            throw new Error("Missing required argument 'internetGateway'");
        }
        this.internetGateway = args.internetGateway;
    }
}

export interface VPCGatewayAttachmentArgs {
    readonly vpc: VPC;
    readonly internetGateway: InternetGateway;
}

