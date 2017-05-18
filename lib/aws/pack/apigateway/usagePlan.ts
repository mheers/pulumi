// *** WARNING: this file was generated by the Lumi IDL Compiler (CLIDL). ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

import {RestAPI} from "./restAPI";
import {Stage} from "./stage";

export let QuotaDayPeriod: QuotaPeriod = "DAY";
export let QuotaMonthPeriod: QuotaPeriod = "MONTH";
export let QuotaWeekPeriod: QuotaPeriod = "WEEK";

export interface APIStage {
    api?: RestAPI;
    stage?: Stage;
}

export type QuotaPeriod =
    "DAY" |
    "MONTH" |
    "WEEK";

export interface QuotaSettings {
    limit?: number;
    offset?: number;
    period?: QuotaPeriod;
}

export interface ThrottleSettings {
    burstRateLimit?: number;
    rateLimit?: number;
}

export class UsagePlan extends lumi.Resource implements UsagePlanArgs {
    public readonly name: string;
    public apiStages?: APIStage[];
    public description?: string;
    public quota?: QuotaSettings;
    public throttle?: ThrottleSettings;
    public usagePlanName?: string;

    constructor(name: string, args: UsagePlanArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        this.apiStages = args.apiStages;
        this.description = args.description;
        this.quota = args.quota;
        this.throttle = args.throttle;
        this.usagePlanName = args.usagePlanName;
    }
}

export interface UsagePlanArgs {
    apiStages?: APIStage[];
    description?: string;
    quota?: QuotaSettings;
    throttle?: ThrottleSettings;
    usagePlanName?: string;
}


