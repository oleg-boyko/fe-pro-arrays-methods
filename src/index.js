import { goods } from './goods.js';


/**
 * @param {string} brand
 * @returns {*}
 */
   const brandFilter = (brand) => {
   return goods.filter((goodBrand) => goodBrand.brand === brand); 
   };

/**
 * @param {string} color
 * @returns {*}
 */
   const colorFilter = (color) => {
   return goods.filter((goodColor) => goodColor.color === color); 
   };

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
return goods.filter((goodModel) => goodModel.model === model); 
};

/**
 * @param {number} memory
 * @returns {*}
 */
    const memoryFilter = (memory) => {
    return goods.filter((goodMemory) => goodMemory.memory === memory); 
    };

/**
 * @param {number} price
 * @returns {*}
 */
    const priceFilter = (price) => {
    return goods.filter((goodPrice) => goodPrice.price === price); 
    };

/**
 * @param {string} country
 * @returns {*}
 */
    const countryFilter = (country) => {
    return goods.filter((goodCountry) => goodCountry.country === country); 
    };

/**
 * @param {string} os
 * @returns {*}
 */
   const osFilter = (os) => {
   return goods.filter((goodOs) => goodOs.os === os); 
   };

/**
 * @param {number} from
 * @param {number} to
 */
      const rangeFilter = (from, to) => {
      return goods.filter((good) => (good.price >= from && good.price <= to));
      }; 




let arrOfNumbers = [1, -4653, -3, 4, 5, 54, 684, 7, 8, 9, 10,];

    minNumber = (a, b) => {
        return a < b ? a : b
    };
console.log(arrOfNumbers.reduce(minNumber))



    const minPriceReducer = () => {
    minPrice = (a, b) => {
    return a.price < b.price ? a.price : b.price
    };
    return  goods.reduce(minPrice);  
    };


    const maxPriceReducer = () => {
    const maxPrice = goods.reduce((acc, cur) => {
    return Math.max(acc, cur.price);
     }, 0);
     return maxPrice;
     };

const toMaxSorter = () => {
  return goods.sort((a, b) => b.price - a.price);
};

const toMinSorter = () => {
  return goods.sort((a, b) => a.price - b.price);
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
