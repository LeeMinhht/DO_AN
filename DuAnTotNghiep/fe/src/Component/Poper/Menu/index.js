import PropTypes from 'prop-types';
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import {Wrapper as ProperWrapper} from '~/Component/Poper'

import Header from "./Header";
import MenuItems from './MenuItems'
import styles from './Menu.module.scss';
import { useState } from "react";


const cx = classNames.bind(styles);
const defaultFn = () =>{}

function Menu({children, items = [],hideOnClick = false,onChange = defaultFn}) {

    const [history,setHistory] = useState([{data : items}]);
    const current = history[history.length - 1];

    const renderItems = () =>{
        return current.data.map((item,index) => {
          const isParent = !!item.children;

          return  <MenuItems key={index} data={item} onClick={() => {

            if(isParent){
              setHistory(prev =>[...prev,item.children]);
            }else{
              onChange(item)
            }
            
              window.scrollTo(0, 0);
            
          
          }}></MenuItems>
        })
    }

    const handleBack = () =>{
      setHistory(prev => prev.slice(0,prev.length - 1));
    };

    const renderResult = (attrs) => (
      <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
        <ProperWrapper className = {cx('menu-popper')}>

          {history.length > 1 && <Header title={current.title}

          onBack={handleBack}>

          </Header>}
          <div className={cx('menu-body')}>{renderItems()}</div>
        </ProperWrapper>
      </div>
    );
     
    
    //khi hover chuột ra ngoài menu thì quay trở về menu bậc 1(menu gốc)
    const handleResetToFirstPage = () => setHistory(prev => prev.slice(0,1))

    return ( 
        <Tippy
          trigger="click"
          interactive
          placement="bottom-end"
          delay={[0, 500]}
          // hideOnClick = {hideOnClick}
          offset={[12, 8]}
          render={renderResult}
          // onHide={handleResetToFirstPage}
        >

          {children}
          </Tippy>
    );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Menu;