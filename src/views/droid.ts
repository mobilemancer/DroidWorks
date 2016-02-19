import {computedFrom} from 'aurelia-binding';

export class Droid {
    seriesName: string;
    producer: string;
    height: number;
    weight: number;
    powerSource: string;
    equipment: Array<string>;

    constructor() {
        console.log("constructor hit");
        this.seriesName = "R2 Series Astromech";
        this.producer = "Industrial Automaton";
        this.height = 1.09;
        this.weight = 32;
        this.powerSource = "Electron Battery";
        this.equipment = ["Buzz saw",
            "Electric pike",
            "Fusion welder",
            "Data probe",
            "Power recharge coupler",
            "Booster rockets",
            "Holoprojector",
            "Motorized, all-terrain treads",
            "Retractable third leg"]; 
    }

    public canEdit(): boolean {
        console.log("CanEdit hit");
        console.log(this.equipment);
        return true;
    }

    public changeEditable(): void {
        this._editable = !this._editable;
        console.log("editable changed to: " + this._editable);
    }

    public _editable = false;
    @computedFrom('_editable')
    get editable(): boolean {
        console.log("editable hit");
        return this._editable;
    }


}