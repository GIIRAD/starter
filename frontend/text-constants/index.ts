/* eslint-disable max-lines */
const SHARED_TEXT_CONSTANTS = Object.freeze({
  'test': 'test',
});

type Keys = keyof typeof SHARED_TEXT_CONSTANTS ;

export default SHARED_TEXT_CONSTANTS;
export type { Keys };
