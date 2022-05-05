import React from 'react'
import styledComponents from 'styled-components'

export const Header = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <Wrapper>
      {/* <div className='header-item'> <i className='fas fa-bars' /> Header </div> */}
      <HeaderItem onClick={() => setSidebarToggle(!sidebarToggle)}>
        <i className="fas fa-bars" />
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-border-all" />
        <span>Dashboard</span>
      </HeaderItem>

      <HeaderItem>
        <i className="fas fa-images" />
        <span>Collections</span>
      </HeaderItem>
      
      <Placeholder />
      <HeaderItem>
        <Profile>
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="profile pic" />
        </Profile>
      </HeaderItem>
    </Wrapper>
   )
}

const Wrapper = styledComponents.div `
  display: flex;
  height: 70px;
  align-items: center;
  background-color: #20212d;
  padding: 0 20px;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  box-shadow: 0px 4px 15px 0px #121212;
  position: sticky; // nav bar will stay at the top even when scrolling webpage
  top: 0; // nav bar will stay at the top even when scrolling webpage
`
const HeaderItem = styledComponents.div `
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    transition: 0.3s;
    cursor: pointer;
  }
`
const Placeholder = styledComponents.div `
  flex: 1; // take as much space as you need
`
const Profile = styledComponents.div `
  display: flex;
  align-items: center;

  img {
      height: 30px;
      border-radius: 50%;
    }
`