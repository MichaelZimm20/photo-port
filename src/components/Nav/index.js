import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // };

    // const handleClick = () => {
    //     console.log("click handled")
    //   }

    // props object 
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props

    // useEffect Hook
    // first argument is the callback function
    // Second argument is an array with a single element, currentCategory.  directs the hook to re-render the component on changes to the value of this state
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    },[currentCategory]);
    
    return (
        <header>
            <h2>
                <a data-testid="link" href='/'>
                    <span role='img' aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row px-1'>
                    <li className='mx-2'>
                        <a data-testid="about" href='#about'>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;