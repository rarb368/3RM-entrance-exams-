import { Question } from '../../types';

import { APTITUDE_2018_QUESTIONS } from './aptitude2018';
import { APTITUDE_2017_QUESTIONS } from './aptitude2017';
import { APTITUDE_2016_QUESTIONS } from './aptitude2016';

export { APTITUDE_2017_QUESTIONS };

export const APTITUDE_QUESTIONS: Question[] = [
  ...APTITUDE_2018_QUESTIONS,
  ...APTITUDE_2017_QUESTIONS,
  ...APTITUDE_2016_QUESTIONS,
];
