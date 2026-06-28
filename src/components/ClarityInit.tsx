'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export default function ClarityInit() {
  useEffect(() => {
      Clarity.init('x8r0bwnt8e');
  }, []);

  return null;
}
