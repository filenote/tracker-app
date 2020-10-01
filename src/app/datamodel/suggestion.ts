import { Stage } from './stage';
import { Vote } from './vote';
import { stringify } from '@angular/compiler/src/util';
import { STRING_TYPE } from '@angular/compiler';
import { createDirective } from '@angular/compiler/src/core';

export class Suggestion {
    title: string;
    id: string;
    description: string;
    vote: Vote;
    stages: Stage[];
    createdDate: string;
    lastUpdatedDate: string;
}
