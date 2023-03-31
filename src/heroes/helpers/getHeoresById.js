import { heroes } from "../data/heroes"


export const getHeoresById = (id) => {

    return heroes.find(heroe=>heroe.id===id)

}
