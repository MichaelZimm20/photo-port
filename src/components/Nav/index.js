import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    // props object 
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props

    // useEffect Hook
    // first argument is the callback function
    // Second argument is an array with a single element, currentCategory.  directs the hook to re-render the component on changes to the value of this stateg
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    
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
                        <a data-testid="about" href='#about' onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                                setContactSelected(false);
                                }}>
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