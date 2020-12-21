import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiClothes } from 'react-icons/gi';
import { VscListOrdered } from 'react-icons/vsc';

import { GiLaptop } from 'react-icons/gi';
import { ImMobile } from 'react-icons/im';
import { GiMonclerJacket } from 'react-icons/gi';
import { BsSpeaker } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';
import { AiFillCar } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

import {
  fetchAllProductsAction,
  filterByCategoryAction,
} from '../../redux/actions/productActions';

const CategoriesWithLogo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, []);

  return (
    <div class='mt-12 flex justify-around flex-wrap bg-gray-100 border-1 rounded-full border-gray-300'>
      <ReactTooltip />
      <div
        data-type='info'
        data-tip='All Products'
        onClick={() => dispatch(fetchAllProductsAction(''))}>
        <VscListOrdered class=' text-gray-400 text-6xl cursor-pointer ' />
      </div>
      <div
        data-type='warning'
        data-tip='Fashion'
        onClick={() => dispatch(filterByCategoryAction('Fashion'))}>
        <GiClothes class=' text-gray-400 text-7xl border cursor-pointer rounded-full p-1' />
      </div>
      <div
        data-type='error'
        data-tip='Laptops and Accessories'
        onClick={() =>
          dispatch(filterByCategoryAction('Laptops and Accessories'))
        }>
        <GiLaptop class=' text-gray-400 text-6xl pt-2  cursor-pointer ' />
      </div>
      <div
        data-type='dark'
        data-tip='Phone Accessories'
        onClick={() => dispatch(filterByCategoryAction('Phone Accessories'))}>
        <ImMobile class=' text-gray-400 text-7xl border  cursor-pointer p-2' />
      </div>

      <div
        data-type='info'
        data-tip='Gents'
        onClick={() => dispatch(filterByCategoryAction('Gents'))}>
        <GiMonclerJacket class=' text-gray-400 text-7xl  cursor-pointer rounded-full p-3' />
      </div>
      <div
        data-type='warning'
        data-tip='Home Appliances'
        onClick={() => dispatch(filterByCategoryAction('Home Appliances'))}>
        <BsSpeaker class=' text-gray-400 text-7xl   p-3 cursor-pointer' />
      </div>

      <div
        data-type='error'
        data-tip='Hot Deals'
        onClick={() => dispatch(filterByCategoryAction('Hot Deals'))}>
        <BiRun class=' text-gray-400 text-7xl cursor-pointer  p-3' />
      </div>
      <div
        data-type='success'
        data-tip='Auto Parts'
        onClick={() => dispatch(filterByCategoryAction('Auto Parts'))}>
        <AiFillCar class=' text-gray-400 text-7xl cursor-pointer p-3' />
      </div>
    </div>
  );
};

export default CategoriesWithLogo;
