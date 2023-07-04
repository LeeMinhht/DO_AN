import { useState, useEffect, useRef} from "react";

import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,

  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import * as searchService from '~/services/searchService'
import styles from './search.module.scss'
import { Wrapper as ProperWrapper } from "~/Component/Poper";
import AccountItem from "~/Component/AccountItem";
import { useDebounce } from "~/hook";
import axiosClient from "~/scrips/healper/axiosClient";


const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);

    const debounced = useDebounce(searchValue,500)

    const inputRef =useRef()

    useEffect(() => {
      if(!debounced.trim()){ // dùng tream để có thể tìm kiếm với space
        setSearchResult([]);
        return;
      }

      setLoading(true);
      
        axiosClient.get(`http://localhost:8080/vehicle/searchByVehicleName/${encodeURIComponent(debounced)}`)
          .then((response) => {
            const data = response;
            
            setSearchResult(data)
            setLoading(false);
          })
          .catch(() => {
            console.log('không tìm thấy vehicle')
          });
        

      // fetApi();
      
    },[debounced]);

    const handleHileResult = () =>{
        setShowResult(false);
    }

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleChange = (e) => {
      const searchValue = e.target.value;

      if(!searchValue.startsWith(' ')){
        setSearchValue(searchValue)
      }
      
    }


  return (

    // Using a wrapper <div> or <span> tag around the reference element solves 
    // this by creating a new parentNode context
    <div className={cx("search-container")}>
      <HeadlessTippy
        visible={showResult && searchResult.length >0}
        interactive
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <ProperWrapper>
  
              <h4 className={cx("search-title")}>Kết Quả</h4>
              {searchResult.map((result) =>(
                <AccountItem key={result.id} data= {result}></AccountItem>
              ))}
  
            </ProperWrapper>
          </div>
        )}
        onClickOutside={handleHileResult}
      >
        
        
        <div className={cx("search")}>
          <input
              ref={inputRef}
              value={searchValue}
              type="text"
              placeholder="Tìm kiếm theo tên xe"
              spellCheck={false}
              onChange={handleChange}
              onFocus={() =>setShowResult(true)}
          />
          {!!searchValue && !loading && (
              <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
              </button>
          )}
          {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
  
          <button className={cx("search-btn")} onMouseDown={e => e.preventDefault}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
