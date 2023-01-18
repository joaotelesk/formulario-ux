type UserProps = {
  data: {
    quest1: string;
    quest2: string;
    quest3: string;
    quest4: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export default function ReviewForm({ data, updateFieldHandler }: UserProps) {
  return (
    <>
      <div className="flex-colum text-start desktop:w-96 mobile:w-64">
        <div>
          <label htmlFor="quest1">
            1 - Você pode descrever sua agenda atual e como equilibrar suas
            responsabilidades com utilização de redes sociais(linkedin,
            instagram, discord,…etc)?
          </label>
          <textarea
            name="quest1"
            id="quest1"
            className="input h-32"
            placeholder="Ex.: [Reena] Trabalho como paramédica, pratico musculação como atividade física e levo minha filha para o treino de futebol de terça e quinta-feira à noite, exceto quando sou convocada no trabalho sem aviso prévio. Meu ex-companheiro e eu dividimos a responsabilidade de levar e buscar a Caitlyn do treino, mas com minha agenda imprevisível, às vezes fica difícil de acessar acessar algumas redes sociais tendo vista essa agenda imprevisível. Às vezes quando estou esperando alguma mensagem ou ao longo do dia, quando fico ociosa  no expediente, tenho acesso acabo vendo informações no instagram ou abro linkedin para ver se possuo alguma notificação. Mas no geral não possuo muito tempo, então muitas vezes eu acabo deixando de lado só acessar quando recebo alguma notificação"
            required
            value={data.quest1 || ""}
            onChange={(e) => updateFieldHandler("quest1", e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="quest2">
            2 - Com que frequência você acessa as redes sociais? Quando você
            acessa e por qual motivo?
          </label>
          <textarea
            name="quest2"
            id="quest2"
            className="input h-32"
            placeholder="Ex.: [Reena] Como eu estava dizendo, às vezes só acessar quando recebo alguma notificação e por isso muitas vezes não interajo com aplicativos de rede sociais.
Há muitos dias em que não tenho tempo para acessar e por isso quando entro ja é para procurar algo específico ou para adicionar ou para mandar alguma mensagem para alguém, mas eu também procuro inteirar nos assunto da minha área no linkedin quando tenho algum tempo livre, geralmente faço isso nas noites de terça e quinta. Minhas sextas-feiras estão sempre ocupadas, então acho que acesso de três a quatro vezes por semana para fazer isso e esporadicamente quando tenho tempo livre durante o trabalho. O principal motivo é que não tenho tempo para ficar horas fazendo isso e na maioria das vezes as informações são futilidades tirando as buscas que faço no linkedin. 
"
            required
            value={data.quest2 || ""}
            onChange={(e) => updateFieldHandler("quest2", e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="quest3">
            3 - Quais desafios você enfrenta nesse processo? Como você se sente
            com isso?
          </label>
          <textarea
            name="quest3"
            id="quest3"
            className="input h-32"
            placeholder="Ex.: [Reena] Quando os sites possuem muitas funcionalidades você acaba perdendo muito tempo e passa horas do dia sem fazer nada só vendo imagens fúteis ou discussões que não levam a nada. Por causa da minha dislexia, é mais difícil encontrar informações, então leva muito mais tempo, principalmente em uma tela pequena de smartphone. Acho isso frustrante porque o objetivo é agregar valor, se conectar e trocar experiências, principalmente quando busco focar na minha área de atuação. Além disso, me faz sentir um pouco insegura com minha dislexia. "
            required
            value={data.quest3 || ""}
            onChange={(e) => updateFieldHandler("quest3", e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="quest4">
            4 - Você acha que esses desafios poderiam ser resolvidos de alguma
            outra maneira?
          </label>
          <textarea
            name="quest4"
            id="quest4"
            className="input h-32"
            placeholder="Ex.: [Reena] Embora eu nem sempre precise de um leitor de tela, é bom ter essa opção, principalmente quando os sites têm muito texto. Sites compatíveis com leitores de tela tornam a experiência mais prazerosa e eu preciso fazer menos esforço. É sempre bom quando os aplicativos e sites me fazem sentir incluída, e eu sou mais propensa a continuar a usá-los quando isso acontece. Então, no geral, eu acho que é importante que um aplicativo seja compatível com leitor de tela."
            required
            value={data.quest4 || ""}
            onChange={(e) => updateFieldHandler("quest4", e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
