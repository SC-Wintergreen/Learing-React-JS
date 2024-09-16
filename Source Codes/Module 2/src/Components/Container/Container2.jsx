import data from "../../Data/data";
import Cards from "../Cards/Cards";
const Container2 = () => {
  return (
    <section className="container-xl">
      <div className="row row-gap-2">
        {data.map((data) => (
          <div className="col">
            <Cards
              key={data.id}
              cricketerName={data.cricketerName}
              cricketerNationality={data.cricketerNationality}
              cricketerImage={data.cricketerImage}
              active={data.active}
              t20IRuns={data.t20IRuns}
              odiRuns={data.odiRuns}
              testRuns={data.testRuns}
              cricketerRole={data.cricketerRole}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Container2;
