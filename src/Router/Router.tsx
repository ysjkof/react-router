import { ReactElement, ReactNode, useEffect, useState } from 'react';

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
    function isMatchPathname(firstPath: string, secondPath: string) {
      return firstPath === secondPath;
    }
    function selectElement(pathname: string) {
      if (!Array.isArray(children)) {
        setRenderElement(
          isMatchPathname(children.props.path, pathname)
            ? children
            : ERR_NOT_FOUND
        );
        return;
      }
      setRenderElement(
        children.find((route) => isMatchPathname(route.props.path, pathname)) ||
          ERR_NOT_FOUND
      );
    }

    function changeRenderElement() {
      const { state: pathname } = window.history;
      if (!pathname || prevPathname === pathname) return;
      prevPathname = pathname;
      selectElement(pathname);
    }

    function init() {
      selectElement(window.location.pathname);
      window.addEventListener('popstate', changeRenderElement);
    }

    init();
    return () => window.removeEventListener('popstate', changeRenderElement);
  }, []);

  return <>{renderElement}</>;
}
