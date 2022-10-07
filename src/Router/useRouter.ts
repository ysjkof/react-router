import { navigate } from './utils';

export const useRouter = () => {
  function push(url: string) {
    navigate(url);
  }

  return { push };
};
