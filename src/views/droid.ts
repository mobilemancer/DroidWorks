interface PhysicalProperties {
    height: number;
    weight: number;
    fitsInSlot: string;
    powerSource: string;
    equipment: Array<string>;
}

export class Droid {
    seriesName: string;
    producer: string;
    physicalProperties: PhysicalProperties;

    constructor() {
        console.log("constructor hit");
        this.seriesName = "R2 Series Astromech";
        this.producer = "Industrial Automaton";
        this.physicalProperties = {
            height: 1.09,
            weight: 32,
            fitsInSlot: "Starship",
            powerSource: "?",
            equipment: ["Buzz saw",
                "Electric pike",
                "Fusion welder",
                "Data probe",
                "Power recharge coupler",
                "Booster rockets",
                "Holoprojector",
                "Motorized, all-terrain treads",
                "Retractable third leg"]
        };
    }

    public canEdit(): boolean {
        console.log("CanEdit hit");
        return true;
    }

    public changeEditable(): void {
        this._editable = !this._editable;
        console.log("editable changed to: " + this._editable);
    }

    public _editable = false;
    get editable(): boolean {
        console.log("editable hit");
        return this._editable;
    }


}