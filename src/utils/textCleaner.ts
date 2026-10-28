/**
 * Text formatting utility to fix glued words, normalize spacing,
 * and ensure responsive, non-overflowing text rendering.
 */

const COMMON_CONCATENATIONS: [RegExp, string][] = [
  [/oneofthefollowing/gi, 'one of the following'],
  [/Whichoneofthefollowing/gi, 'Which one of the following'],
  [/Which oneofthefollowing/gi, 'Which one of the following'],
  [/isCORRECTaboutthesetof/gi, 'is CORRECT about the set of'],
  [/isCORRECTabout/gi, 'is CORRECT about'],
  [/CORRECTabout/gi, 'CORRECT about'],
  [/thesetof/gi, 'the set of'],
  [/quantumnumbers/gi, 'quantum numbers'],
  [/quantumnumber/gi, 'quantum number'],
  [/thesameorbital/gi, 'the same orbital'],
  [/thesame/gi, 'the same'],
  [/Thesame/gi, 'The same'],
  [/Themagneticquantumnumbersofbothelectronsaredifferent/gi, 'The magnetic quantum numbers of both electrons are different'],
  [/arefoundinthenucleus/gi, 'are found in the nucleus'],
  [/Electronsmoveincircularorbitsaroundthenucleus/gi, 'Electrons move in circular orbits around the nucleus'],
  [/incircularorbits/gi, 'in circular orbits'],
  [/aroundthenucleus/gi, 'around the nucleus'],
  [/anorganicelectrolyte/gi, 'an organic electrolyte'],
  [/anelectrolyte/gi, 'an electrolyte'],
  [/nonelectrolyte/gi, 'non-electrolyte'],
  [/StrongandWeak/gi, 'Strong and Weak'],
  [/FirstRound/gi, 'First Round'],
  [/OnlineExam/gi, 'Online Exam'],
  [/OnlineExamm/gi, 'Online Exam'],
];

export function cleanExamText(text: string | undefined): string {
  if (!text) return '';

  let cleaned = text;

  for (const [pattern, replacement] of COMMON_CONCATENATIONS) {
    cleaned = cleaned.replace(pattern, replacement);
  }

  // Also separate camelCase glued English words if any, but preserve standard acronyms
  cleaned = cleaned.replace(/([a-z])([A-Z][a-z])/g, '$1 $2');

  return cleaned;
}
