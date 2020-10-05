import { Stage } from './stage';
import { Vote } from './vote';

export class Suggestion {
    title: string;
    id: string;
    description: string;
    vote: Vote;
    stages: Stage[];
    createdDate: string;
    lastUpdatedDate: string;
}
