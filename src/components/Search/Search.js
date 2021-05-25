import React from "react";
import Input from "../Input/Input";
import SearchImage from "../../assets/search.svg";

import * as classes from "./Search.module.css";

const Search = (props) => {
  return (
    <div className={classes.Search}>
      <Input
        placeholder="Search Notes...."
        handleChange={props.onSearchTextEnter}
        inputClassName={classes.SearchInput}
        inputStyle={{
          backgroundImage: `url(${SearchImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px 8px",
        }}
      />
    </div>
  );
};

export default React.memo(Search);
