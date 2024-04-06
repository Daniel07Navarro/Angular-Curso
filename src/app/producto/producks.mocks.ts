export const productList: Product[] = [
    {id: 1, name:'Lavandina',precio:10, descripcion:'Lavandina de 1 litro'},
    {id: 2, name:'Detergente',precio:20, descripcion:'Saca todo tipo de grasa'},
    {id: 3, name:'Limpia vidrio',precio:8, descripcion: 'Tus vidrios estaran nuevos'},
    {id: 4, name:'Quita grasa',precio:2},
    {id: 5, name:'Perfume',precio:8, descripcion:'Tu casa olera a rosas'}
]

export interface Product{
    id: number;
    name: string;
    precio: number;
    descripcion?: string;
}