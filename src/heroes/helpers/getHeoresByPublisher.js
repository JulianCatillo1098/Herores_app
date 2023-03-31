import { heroes } from "../data/heroes";

export const getHeroresBYpublisher= ( publisher )=>{
    const valedarPublisher = ['DC Comics','Marvel Comics']
    if (!valedarPublisher.includes(publisher)){
        throw new Error(`el ${publisher} no conicide con nigunada busqueda`)
    }
    return heroes.filter(heroe=>heroe.publisher===publisher)
}

