import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState([]);

  return <main>
    <section class="menu section">
      <div class="title">
      <h2>Our Menu</h2>
      <div class="underline"></div>
      </div>
      <Categories />
      <Menu items={menuItems}/>

    </section>
  </main>;
}

export default App;
