import { FeatureComment } from 'src/app/datamodel/feature-comment';
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
    currentStage: number;
    comments: FeatureComment[];
    isCanceled?: boolean;
}
