// *** WARNING: this file was generated by the Lumi IDL Compiler (LUMIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

/* tslint:disable:ordered-imports variable-name */
import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Application extends lumi.NamedResource implements ApplicationArgs {
    public readonly applicationName?: string;
    public description?: string;

    public static get(id: lumi.ID): Application {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Application[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args?: ApplicationArgs) {
        super(name);
        if (args !== undefined) {
            this.applicationName = args.applicationName;
            this.description = args.description;
        }
    }
}

export interface ApplicationArgs {
    readonly applicationName?: string;
    description?: string;
}

