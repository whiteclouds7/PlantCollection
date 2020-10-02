import { ISucculent } from "./ISucculent";

export class Succulent implements ISucculent {
  private _description!: string;
  private _id!: number;
  private _imgSrc!: string;
  private _name!: string;
  private _shortDescription!: string;
  private _type!: string;
  private _water!: number;
  private _sun!: number;

  get water(): number {
    return this._water;
  }

  set water(value: number) {
    this._water = value;
  }

  get sun(): number {
    return this._sun;
  }

  set sun(value: number) {
    this._sun = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get imgSrc(): string {
    return this._imgSrc;
  }

  set imgSrc(value: string) {
    this._imgSrc = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
