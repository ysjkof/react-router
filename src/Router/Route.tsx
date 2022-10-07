import { ReactNode } from 'react';

interface RooteProps {
  path: string;
  component: ReactNode;
}

export function Route({ component }: RooteProps) {
  return <>{component}</>;
}
