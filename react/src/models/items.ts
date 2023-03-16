export interface IItem {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    category_id: number,
    colors: string[],
    sizes: string[]
}