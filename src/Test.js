import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";

const Test = () => {
  const [cities, setCities] = useState([]);
    
  useEffect(() => {
    onSnapshot(collection(db, "cities"), (snapshot) =>
      setCities(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      <h2>firebase</h2>
      <ul>
        {cities?.map((item) => 
           <li key={item.name}>{item.name}</li>
        )}
      </ul>
    </div>
  );
};

export default Test;

// d9Dy5cHmv2BFS6bD5Et74RaVcBxuYFob70qoBzaqdcuazwSX   token
// dGE4SVOVbW1Q2pygiFAlmws4   password
// 1//0cn61OtldW5fXCgYIARAAGAwSNwF-L9IrMeSOiIfGEI1lxdI_tciKv33SZmPO0PrvF9sgakW4m1OUzuFK7iMfKWf9RMtRRy9dr9s     CI TOKEN