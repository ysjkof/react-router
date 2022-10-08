import {
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { navigate } from './utils';

type RouterNode = ReactElement<{ path: string }>;
interface RooterProps {
  children: RouterNode | RouterNode[];
}

export function Router({ children }: RooterProps) {
  let prevPathname = '';
  const ERR_NOT_FOUND = '페이지를 찾을 수 없습니다.';
  const [renderElement, setRenderElement] = useState<ReactNode | undefined>(
    children
  );

  useEffect(() => {
    function selectElement(pathname: string) {
      if (!Array.isArray(children)) {
        const isMatchPathname = children.props.path === pathname;
        setRenderElement(isMatchPathname ? children : ERR_NOT_FOUND);
        return;
      }

      const element = children.find((route) => route.props.path === pathname);
      setRenderElement(element || ERR_NOT_FOUND);
    }
    selectElement(window.location.pathname);

    function checkRoutes() {
      const { state } = window.history;
      if (!state || prevPathname === state) return;
      prevPathname = state;
      selectElement(state);
    }

    function handleClickAnchor(event: globalThis.MouseEvent) {
      event.preventDefault();
      const { tagName, href } = event.target as HTMLAnchorElement;
      if (href && tagName === 'A') {
        const { origin } = location;
        const { pathname } = new URL(href, origin);
        navigate(pathname);
      }
    }

    document.body.addEventListener('click', handleClickAnchor);
    window.setInterval(checkRoutes);

    return () => document.body.removeEventListener('click', handleClickAnchor);
  }, []);

  return <>{renderElement}</>;
}
