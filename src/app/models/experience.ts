import { Competence } from "./competence"

export interface Experience {
    dateDebut: Date
    dateFin: Date | null
    titre: string
    description: string
    entreprise: string
    competences: Competence[]
}
