type UserProps = {
  data: {
    name: string;
    birth: string;
    city: string;
    quest1: string;
    quest2: string;
    quest3: string;
    quest4: string;
  };
};

export default function ThanksForm({ data }: UserProps) {
  return (
    <>
      <div className="flex-colum desktop:w-96 mobile:w-64">
        <h2 className="mt-2 mb-2">Falta pouco...</h2>
        <p>A sua opinião é muito importante.</p>
        <p>Para concluir clique no botão de Enviar abaixo.</p>
        <h3 className="text-start">Aqui está o resumo da sua avaliação:</h3>
        <div className="text-start mt-4">
          <span>
            <p>Nome: {data.name}</p>
            <p>Idade: {data.birth}</p>
            <p>Cidade:{data.city}</p>
          </span>

          <span>
            <p>Questão 1: {data.quest1}</p>
            <p>Questão 2: {data.quest2}</p>
            <p>Questão 3: {data.quest3}</p>
            <p>Questão 4: {data.quest4}</p>
          </span>
        </div>
      </div>
    </>
  );
}
