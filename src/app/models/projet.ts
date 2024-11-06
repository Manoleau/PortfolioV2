import { Competence } from "./competence"

export interface Projet {
    nom: string
    git: string
    site?: string
    pret: boolean
    description: string
    image: string
    competences: Competence[]
}
