import React, {Component} from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import {connect} from "react-redux";
import WithRestoService from "../hoc/with-resto-service";

import './menu-list.scss';

class MenuList extends Component {

  componentDidMount() {
    const {RestoService} = this.props;
    RestoService.getMenuItems()
      .then(res => console.log(res))
  }

  render() {

    //список элементов меню
    const {menuItems} = this.props;

    return (
      <ul className="menu__list">
        {
          menuItems.map(menuItem =>{
            return(
              <MenuListItem key={menuItem.id} menuItem={menuItem}/>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    menuItems: state.menu
  }
}

const mapDispatchToProps = ()=>{

}

export default WithRestoService()(connect(mapStateToProps)(MenuList));