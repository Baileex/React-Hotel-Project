const filterHotels = (hotels, checkedList) => {
  let filteredHotels = hotels.filter(hotel => {
    for (let i = 0; i <= checkedList.length; i++) {
      if (hotel.facilities.includes(checkedList[i])) {
        return hotel;
      };
    } 
  });
  return filteredHotels;
};

module.exports = { filterHotels };
