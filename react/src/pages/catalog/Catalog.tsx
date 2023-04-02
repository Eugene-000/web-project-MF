import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesApi } from '../../api/categories'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { useActions } from '../../hooks/useAction'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ICategory } from '../../models/selectList'
import { CatalogMain } from './components/catalogMain/CatalogMain'

export const Catalog: React.FC = () => {

  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const {items, error, isLoading} = useTypedSelector(state => state.items);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    {
      id: '',
      name: 'Категории',
    }
  );
  const {getItems} = useActions();

  const { category_id } = useParams();
  
  useEffect(() => {
    if (category_id === 'all') {
      setSelectedCategory(
        {
          id: '',
          name: 'Категории',
        }
      );
      getItems();
    } else {
      getItems(category_id);
    }
  }, [category_id])

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await CategoriesApi.getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);


  const handleClickCategory = (id: string, categoryName: string) => {
    setSelectedCategory(
      {
        id: id,
        name: categoryName,
      }
    );
  }

  return (
    <>
      <Header banner={false}/>
      <CatalogMain 
        selectedCategory={selectedCategory} 
        categories={categories} 
        items={items} 
        handleClickCategory={handleClickCategory}/>
      <Footer />
    </>
  )
}
