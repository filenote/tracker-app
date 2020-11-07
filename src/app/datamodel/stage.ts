export class Stage {
    name: string;
    stage: number;
    enabled: boolean;
    canceled?: boolean;

    constructor(name: string, enabled: boolean = false, canceled: boolean = false) {
        this.name = name;
        this.stage = 0;
        this.enabled = enabled;
        this.canceled = canceled;
    }
}
