import React from 'react';

function Nav() {

    function categorySelected(name) {
        console.log(`${name} clicked`)
    };

    const handleClick = () => {
        console.log("click handled")
      }
    const categories = [
        {
            name: 'Commercial',
            description: 'Photos of grocery stores, food trucks, and other commerical projects',
        },
        { name: 'Portraits', description: 'Portraits of people in my life' },
        { name: 'Food', description: 'Delicious delicacies' },
        { name: 'Landscape', description: ' Fields, farmhouses, waterfalls, and the beauty of nature', },
    ];

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
                        <a data-testid="about" href='#about' onClick={() => handleClick()}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => handleClick()}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className='mx-1' key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;