import { Qualite } from "./qualite"

export interface Hero {
    prenom: string
    nom: string
    profession: string
    photo: string
    description: string
    personnalite: string
    qualite: Qualite[]
}
