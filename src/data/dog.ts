export default interface Dog  {
    id?:string;
    name: string;
    species: string;
    favFoods: Array<string>; // or string[]
    birthYear: number;
}
