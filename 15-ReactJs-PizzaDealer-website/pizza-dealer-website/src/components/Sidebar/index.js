import React from 'react'
import {SidebarContainer,Icon,SidebarLink,SidebarMenu,SidebarRoute,SidebarBtnWrap,CloseIcon} from './SidebarElements';

function Sidebar({isOpen,toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
                <SidebarMenu>
                    <SidebarLink to="/">Pizzas</SidebarLink>
                    <SidebarLink to="/">Desserts</SidebarLink>
                    <SidebarLink to="/">Full Menu</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SidebarBtnWrap>
            </Icon>
        </SidebarContainer>
    )
}

export default Sidebar
