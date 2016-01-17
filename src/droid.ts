interface PhysicalProperties {
    height: number;
    weight: number;
    fitsInSlot: string;
    driveType: string;
}

export class Droid {
    seriesName: string;
    producer: string;
    physicalProperties: PhysicalProperties;

    constructor() {
        this.seriesName = "RX Series";
        this.producer = "Industrial Automaton";
        this.physicalProperties = {
            height: 1.09,
            weight: undefined,
            fitsInSlot: "Starship",
            driveType: "Three Wheel"
        };
        
    }
    
    public editable():boolean {
        return false;
    }
}