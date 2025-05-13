import React,{useState} from "react";
import WishForm from "./WishForm";
import WishItems from "./WishItems";

const WishList = () => {

  const [list,setList] = useState([]);

  const addItem = (new_item) => {
    setList([...list,new_item]);
  }
  
  return <div>
          <WishForm add={addItem}/>  {/* Sibling 1 */}
          <WishItems list={list}/>   {/* Sibling 2 */}
        </div>;
};

export default WishList;
