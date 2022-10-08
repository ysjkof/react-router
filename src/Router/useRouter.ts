export const useRouter = () => {
  function push(path: string) {
    window.history.pushState(path, '', path);
    window.dispatchEvent(new Event('popstate'));
  }

  return { push };
};
