import React, { useState } from "react";
import Right from "./RightSide.module.css";
import RightLast from "./RightLast";
import Search from "../Search/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WhoToFollow from "./WhoToFollow";
import Heading from "./Heading";

export default function RightSide() {
  const [notInterested, setNotInterested] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(2);

  const data = [
    {
      id: 1,
      Trending: "Trending In India",
      name: "#FunctionUp Student Promoting Twitter",
      Tweets: "10,565 tweets",
    },
    {
      id: 2,
      Trending: "Bussiness and finance Trending",
      name: "#InvestigateAGIgreenpac",
      Tweets: "2,014 Tweets",
    },
    {
      id: 3,
      Trending: "Entertainment -Trending",
      name: "#Leo",
      Tweets: "16.9K Tweets",
    },
    {
      id: 4,
      Trending: "Trending In India",
      name: "#Patnametro",
      Tweets: "1,667 Tweets",
    },
    {
      id: 5,
      Trending: "Entertainment -Trending",
      name: "#Leo",
      Tweets: "16.9K Tweets",
    },
    {
      id: 6,
      Trending: "Bussiness and finance Trending",
      name: "#InvestigateAGIgreenpac",
      Tweets: "2,014 Tweets",
    },
    {
      id: 7,
      Trending: "Trending In India",
      name: "#FunctionUp Student Promoting Twitter",
      Tweets: "10,565 tweets",
    },
  ];
  const handleNotInterested = (id) => {
    setNotInterested([...notInterested, id]);
  };

  const showMore = () => {
    setItemsToShow(filteredData.length);
  };

  const showLess = () => {
    setItemsToShow(2);
  };

  const filteredData = data.filter((item) => !notInterested.includes(item.id));

  return (
    <div className={Right.start}>
      <div>
        <Search />
        <section className={Right.firstComp}>
          <div className={Right.firstcontainer}>
            <Heading />
          </div>
          <div className={Right.datapart}>
            {filteredData.slice(0, itemsToShow).map((wid, ind) => (
              <div key={ind}>
                <ul>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{wid.Trending}</span>
                    <p>
                      <MoreHorizIcon onClick={() => setSelectedItem(ind)} />
                    </p>
                    <div>
                      {selectedItem === ind && (
                        <span
                          onClick={() => handleNotInterested(wid.id)}
                          className={Right.not_intrested}
                        >
                          Not interested
                        </span>
                      )}
                    </div>
                  </li>
                  <li>{wid.name}</li>
                  <li>{wid.Tweets}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className={Right.btnPart}>
          {filteredData.length > 2 && itemsToShow < filteredData.length ? (
        <button onClick={showMore}>Show More</button>
      ) : (
        <button onClick={showLess}>Show Less</button>
      )}
          </div>
        </section>
        <div>
          <WhoToFollow />
        </div>
        <div>
          <RightLast />
        </div>
      </div>
    </div>
  );
}
