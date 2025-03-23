function findMatching(drivers, searchString) {
    // Convert the search string to lowercase for case-insensitive comparison
    const lowerSearchString = searchString.toLowerCase();
  
    // Filter the drivers array to find matches
    const matchingDrivers = drivers.filter(driver => 
      driver.toLowerCase().includes(lowerSearchString)
    );
  
    return matchingDrivers;
  }
  
 
  const drivers = ["John", "Jane", "Alice", "Bob", "Charlie"];
  let searchString = "a";
  
  console.log(findMatching(drivers, searchString)); // Output: ["Jane", "Alice", "Charlie"]



  function fuzzyMatch(drivers, searchString) {
    // Convert the search string to lowercase for case-insensitive comparison
    const lowerSearchString = searchString.toLowerCase();
  
    // Filter the drivers array to find names that start with the search string
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(lowerSearchString)
    );
  
    return matchingDrivers;
  }

  console.log(fuzzyMatch(drivers,j))



  function matchName(drivers, searchString) {
    // Convert the search string to lowercase for case-insensitive comparison
    const lowerSearchString = searchString.toLowerCase();
  
    // Filter the drivers array to find objects where the name matches the search string
    const matchingDrivers = drivers.filter(driver =>
      driver.name.toLowerCase() === lowerSearchString
    );
  
    return matchingDrivers;
  }

  const driverobjs = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Alice", hometown: "Chicago" },
    { name: "Bob", hometown: "Houston" },
    { name: "Charlie", hometown: "Miami" }
  ];
  
  const searchStr = "jane";
  
  console.log(matchName(driverobjs, searchStr)); 