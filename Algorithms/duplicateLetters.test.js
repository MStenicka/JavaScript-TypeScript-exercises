import { dup } from './duplicateLetters';

describe('duplicate letters', () => {
  test('should remove duplicate letters', () => {
    expect(
      dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
    ).toEqual(['codewars', 'picaniny', 'hubububo']);
  });
});
