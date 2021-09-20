import React from 'react';

const Categories = ({filterItems}) => {
  return <div class="btn-container">
    <button class="filter-btn" onClick = {() => {
      filterItems('all');
    }}>
      all
    </button>
    <button class="filter-btn" onClick = {() => {
      filterItems('breakfast');
    }}>
      breakfast
    </button>
  </div>;
};

export default Categories;
