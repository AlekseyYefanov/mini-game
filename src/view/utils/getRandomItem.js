export const getRandomItem = (previousChoices, cellCount) => {
    const allIds = Array.from({ length: cellCount }, (_, index) => index);
  
    const availableIds = allIds.filter((id) => !previousChoices.includes(id));
  
    if (availableIds.length === 0) {
      previousChoices.length = 0;
      return getRandomItem(previousChoices, cellCount);
    }
  
    const randomIndex = Math.floor(Math.random() * availableIds.length);
    const chosenId = availableIds[randomIndex];
  
    previousChoices.push(chosenId);
  
    return chosenId;
  }

