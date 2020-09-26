import { Stage } from './stage'

export interface Suggestion {
    title: string,
    description: string,
    stages: Stage[]
}