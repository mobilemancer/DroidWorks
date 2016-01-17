interface PhysicalProperties {
    height: number;
    weight: number;
    fitsInSlot: string;
    driveType: string;
    equipment: Array<string>;
}

export class Droid {
    seriesName: string;
    producer: string;
    physicalProperties: PhysicalProperties;

    constructor() {
        this.seriesName = "R2 Series Astromech";
        this.producer = "Industrial Automaton";
        this.physicalProperties = {
            height: 1.09,
            weight: 32,
            fitsInSlot: "Starship",
            driveType: "Three Wheel",
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
    

    public editable(): boolean {
        return false;
    }
}