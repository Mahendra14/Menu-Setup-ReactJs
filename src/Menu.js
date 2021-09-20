import React from 'react';

const Menu = ({items}) => {
  return <div class="section-center">
  {items.map((menuItem) => {
    const {id,title,img,desc,price} = menuItem;
    return (
      <article class="menu-item" key={id}>
        <img src={img} alt={title} class="photo" />
        <div class="item-info">
          <header>
            <h4>{title}</h4>
            <h4 class="price">${price}</h4>
          </header>
          <p class="item-text">{desc}</p>
        </div>
      </article>
    );
  })}
</div>;
};

export default Menu;
