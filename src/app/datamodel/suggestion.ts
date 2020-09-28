import { Stage } from './stage'
import { Vote } from './vote'

export interface Suggestion {
    title: string,
    id: string,
    description: string,
    vote: Vote,
    stages: Stage[]
}