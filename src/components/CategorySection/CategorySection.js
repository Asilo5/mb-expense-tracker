import React from 'react';
import './CategorySection.css';

const CategorySection = ({categories, addCategory}) => {
  console.log('Category', categories)

    return (
      <section className='category_section'>
          <h2>Category</h2>
          <div className='category_list'>
            {categories.map((category) => {
              return (
                <section style={{ backgroundColor:`${category.color}`}} className='category_'>
                    <p>{category.categoryTitle}</p>
                </section>
              );
            })}
            <button type='button'>+</button>
          </div>
      </section>
    )
};

export default CategorySection;