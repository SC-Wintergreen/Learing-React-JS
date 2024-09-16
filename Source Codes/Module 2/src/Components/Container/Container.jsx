import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Cards from "../Cards/Cards";

const Container = ({}) => {
  return (
    <section className="container-xl">
      <div className="row">
        <div className="col">
          <Cards
            cricketerName="Virat Kohli"
            cricketerImage="https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png"
            cricketerNationality="Indian"
            cricketerRole="Top Order Batsman"
            testRuns="8848"
            t20IRuns="4500"
            odiRuns="13496"
            active={true}
          />
        </div>
        <div className="col">
          <Cards
            cricketerName="Joe Root"
            cricketerImage="https://pbs.twimg.com/media/FxdKcJ7WAAEkk6W?format=jpg&name=large"
            cricketerNationality="English"
            cricketerRole="Top Order Batsman"
            testRuns="12402"
            odiRuns="6506"
            t20IRuns="1046"
            active={true}
          />
        </div>
        <div className="col">
          <Cards
            cricketerName="Steve Smith"
            cricketerImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVvgIxoJNK-UGI4yjsvYYVRyjgivG2gCTQA&s"
            cricketerNationality="Australian"
            cricketerRole="Top Order Batsman"
            testRuns="9685"
            odiRuns="5446"
            t20IRuns="1094"
            active={true}
          />
        </div>
        <div className="col">
          <Cards
            cricketerName="Chris Gayle"
            cricketerImage="https://c.ndtvimg.com/2021-10/sh9iqsjg_chris-gayle_625x300_16_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            cricketerNationality="West Indies"
            cricketerRole="Opener Batsman"
            testRuns="7214"
            odiRuns="10480"
            t20IRuns="1899"
          />
        </div>
      </div>
    </section>
  );
};

export default Container;
