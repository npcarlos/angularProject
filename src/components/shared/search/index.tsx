import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import "./search.scss";
import { SearchItem } from "./search-item";
import DynamicIcons from "../DynamicIcons";

export const SearchComponent = () => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const [openedSearchInputText, openSearchInputText] = useState(true);

  const wrapperRef = useRef<HTMLHeadingElement>(null);

  const handleOnBlur = () => {
    if (!focused) {
      setFocused(!focused);
    }
  };

  const handleOnClickOut = useCallback(
    (e: any) => {
      if (
        wrapperRef?.current &&
        !wrapperRef.current.contains(e.target) &&
        focused
      ) {
        setFocused(!focused);
      }
    },
    [focused]
  );

  useEffect(() => {
    window.addEventListener("click", (e) => handleOnClickOut(e));

    return window.removeEventListener("click", (e) => handleOnClickOut(e));
  }, [handleOnClickOut]);

  const handleText = (event: any) => {
    setText(event.target.value || "");
  };

  const showHideSearchField = (event: any) => {
    openSearchInputText(!openedSearchInputText);
    console.log("Abierto", openedSearchInputText);
  };

  let searchIcon = "AiOutlineSearch";
  let stylesSearchField = ["hidden"];
  if (openedSearchInputText) {
    searchIcon = "MdSearchOff";
    stylesSearchField = ["ah-nav-search"];
  }
  return (
    <>
      <span onClick={showHideSearchField}>
        <DynamicIcons iconName={searchIcon} size={30} />
      </span>
      <div ref={wrapperRef} className={stylesSearchField.join(" ")}>
        <InputGroup>
          <Form.Control
            aria-describedby="basic-addon2"
            aria-label="Artistas, lugares..."
            autoComplete="off"
            className="ah-nav-search__input"
            name="search"
            placeholder="Artistas, lugares..."
            value={text}
            onChange={handleText}
            onClick={() => handleOnBlur()}
          />
        </InputGroup>
        {focused && (
          <div className="ah-combobox-search">
            <SearchItem q={text} />
          </div>
        )}
      </div>
    </>
  );
};
