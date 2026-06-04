import { describe, expect, it } from '@jest/globals';

import {
  GhostLayout,
  GhostText,
  GhostCircle,
  GhostImage,
  GhostBox,
} from '../index';

describe('GhostLayout exports', () => {
  it('exports GhostLayout', () => {
    expect(GhostLayout).toBeDefined();
  });

  it('exports GhostText', () => {
    expect(GhostText).toBeDefined();
  });

  it('exports GhostCircle', () => {
    expect(GhostCircle).toBeDefined();
  });

  it('exports GhostImage', () => {
    expect(GhostImage).toBeDefined();
  });

  it('exports GhostBox', () => {
    expect(GhostBox).toBeDefined();
  });
});
