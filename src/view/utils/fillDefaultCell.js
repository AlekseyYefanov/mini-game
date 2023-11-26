export const fillDefaultCell = (CELL_COUNT) => {
  
    const defaultCell = [];
    for (let index = 0; index < CELL_COUNT; index++) {
      defaultCell.push({
        id: `item_${index}`
      })
      
    }
  
    return defaultCell;
  }