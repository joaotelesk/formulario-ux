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
          <p>
            Nome: <span className="text-slate-400">{data.name}</span>
          </p>
          <p>
            Idade: <span className="text-slate-400">{data.birth}</span>
          </p>
          <p>
            Cidade: <span className="text-slate-400">{data.city}</span>
          </p>

          <p>
            Questão 1:
            <span className="text-slate-400">{data.quest1}</span>
          </p>
          <p>
            Questão 2: <span className="text-slate-400">{data.quest2}</span>
          </p>
          <p>
            Questão 3: <span className="text-slate-400">{data.quest3}</span>
          </p>
          <p>
            Questão 4: <span className="text-slate-400">{data.quest4}</span>
          </p>
        </div>
      </div>
    </>
  );
}
