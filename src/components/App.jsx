import React, { useEffect, useState } from "react";
import MonthsWrapper from "./MonthsWrapper";
import { getUsers } from "../utils/requests";
import Title from './Title'

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setData(data);
    })();
  }, []);

  return (
    <div className='app'>
      <Title/>
      <MonthsWrapper data={data} />
    </div>
  );
};

export default App;
