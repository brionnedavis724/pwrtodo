import React from 'react'
import styledComponents from 'styled-components'

export const Sidebar = ({ sidebarToggle, todoList }) => {
    return (
        <Wrapper style={{ width: `calc(100vw - (${sidebarToggle ? '300px' : '600px'}))` }}>
            <Title>{ 
            // when sidebar is toggled [true/open] title will be 'Collections'
            // when sidebar is not toggled [false/closed] title will be 'C'
            sidebarToggle ? 'Collections' : 'C' } </Title>

            <CategoryList>
                {todoList.map(category => (
                    // pass in 'key' when mapping through and rendering out multiple times
                    <Category key={category.name}>
                        <CategoryIcon // pass in the key values set for ea object coded in App.js 
                            style={{ backgroundColor: category.color }}>
                            <i className={category.icon} />
                        </CategoryIcon>
                        {/* when sidebar is toggled also[&&] display the icons of ea category */}
                        {sidebarToggle && <span>{category.name}</span>}
                    </Category> 
                ))}
            </CategoryList>
        </Wrapper>
    )
}

const Wrapper = styledComponents.div`
    // border: 1px solid pink;
    width: 70px;
    height: calc(100vh - 70px); // height of the window minus the height of the header
    background: #20212d;
    padding-left: 35px;
`

const Title = styledComponents.div`
    font-size: 30px;
    font-weight: 700;
    padding: 50px 0;
`

const CategoryList = styledComponents.div`
    // closes the gap between 'collections' title text and the actual list below it
    margin-top: -16px;
`

const Category = styledComponents.div`
    // border: 1px solid yellow;
    display: flex;
    align-items: center;
    margin: 4px -16px; // gap surrounding all the icons category text (negative margin value closes the gap)
    padding: 10px 16px; // gap in between each category icon/name
    border-radius: 4px;
    width: calc(100% - 32px); // width of the window minus the width of the category icons/name ; creates same amount of gap on left and right

    span {
        // border: 1px solid red;
        margin-left: 10px; // gap btwn category icon and category name 
        padding-top: 9px;
        font-weight: 500;
        font-size: 22px;
    }

    &:hover {
        background-color: #18181f;
        cursor: pointer;
    }
`

const CategoryIcon = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 4px;
`