import { useRouter } from '../Router';

export default function Root() {
  const { push } = useRouter();

  const goAbout = () => {
    push('/about');
  };
  return (
    <div className="box">
      <h1>root</h1>
      <button type="button" onClick={goAbout}>
        Go About Button
      </button>
    </div>
  );
}
