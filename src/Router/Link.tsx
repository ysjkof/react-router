import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useRouter } from './useRouter';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ ...args }: LinkProps) {
  const { push } = useRouter();

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const { tagName, href } = event.target as HTMLAnchorElement;
    if (href && tagName === 'A') {
      const { origin } = location;
      const { pathname } = new URL(href, origin);
      push(pathname);
    }
  };
  return <a {...args} onClick={handleClick} />;
}
