type UserProps = {
  data: {
    name: string;
    birth: string;
    city: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

export default function UserForm({ data, updateFieldHandler }: UserProps) {
  return (
    <>
      <div className="flex-colum text-start desktop:w-96 mobile:w-64">
        <label htmlFor="name" className="">
          Nome:
        </label>
        <input
          type="text"
          name="nome"
          id="name"
          placeholder="Ex.: Renata"
          className="input"
          required
          value={data.name}
          minLength={3}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
        <div className="flex text-start gap-3 mt-6">
          <div>
            <label htmlFor="birth">Aniversário</label>
            <input
              type="date"
              name="birth"
              id="birth"
              className="input"
              required
              min="1930-01-01"
              max="2002-12-31"
              value={data.birth || ""}
              onChange={(e) => updateFieldHandler("birth", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">Cidade/Estado</label>
            <input
              type="text"
              name="city"
              id="city"
              className="input"
              placeholder="Ex.: Fortaleza/CE"
              required
              min={3}
              value={data.city || ""}
              onChange={(e) => updateFieldHandler("city", e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
