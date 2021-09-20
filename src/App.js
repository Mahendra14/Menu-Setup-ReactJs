import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);
  
  //for sake of manual updating the data
  const filterItems = (catergory) => {
    if(catergory === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === catergory);
    setMenuItems(newItems);
  }
  return <main>
    <section class="menu section">
      <div class="title">
      <h2>Our Menu</h2>
      <div class="underline"></div>
      </div>
      <Categories filterItems = {filterItems}/>
      <Menu items={menuItems}/>

    </section>
  </main>;
}

export default App;
