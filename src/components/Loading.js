import loading from '../images/loading.gif';

function Loading() {

  return (
 
        <div className="container min-h-screen w-screen flex items-center flex-col justify-around mx-auto">
          <h1 className="font-semibold text-3xl text-center text-red-900 font-serif">Carregando...</h1>
          <img src={loading} alt='Livro virando as páginas'/>
        </div>
 
  );
}

export default Loading;

