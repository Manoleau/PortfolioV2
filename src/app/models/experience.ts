import { Competence } from "./competence"

export interface Experience {
    dateDebut: Date
    dateFin: Date | null
    lien: string
    titre: string
    description: string
    entreprise: string
    competences: Competence[]
}
