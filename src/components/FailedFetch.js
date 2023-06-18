import error from '../images/error.png';

function FailedFetch() {

  return (
    <div className="container min-h-screen w-screen flex items-center flex-col justify-center mx-auto">
      <h2 className="font-semibold text-2xl text-center text-red-900 font-serif">Parece que algo deu errado. Por favor, recarregue a página e tente novamente.</h2>
      <img
        src={error}
        className="w-1/6 mt-[4%]"
        alt='Círculo vermelho simbolizando que algo deu errado'
      />
    </div>
  );
}

export default FailedFetch;

