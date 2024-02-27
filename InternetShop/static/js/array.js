function associativeMain() {
    const staffList = document.getElementById("staff-list");
    const initialsInput = document.getElementById("initials");
    const phoneInput = document.getElementById("phone");
    const searchInput = document.getElementById("initials_search");
  
    const staffMap = new Map();
  
    const associativeForm = document.forms.namedItem("associative-form");
    const searchForm = document.forms.namedItem("search-form");
  
    searchForm.onsubmit = (e) => {
      e.preventDefault();
  
      const result = document.getElementById("result");
      const search = getValueAndClear(searchInput);
  
      const дибильник = staffMap.get(search);
      result.textContent = дибильник ? дибильник : "Телефон не найден";
    };
  
    associativeForm.onsubmit = (e) => {
      e.preventDefault();
  
      const initials = getValueAndClear(initialsInput);
      const phone = getValueAndClear(phoneInput);
  
      if (staffMap.has(initials)) {
        return;
      }
  
      staffMap.set(initials, phone);
      const staffListItem = document.createElement("li");
      console.log(`${initials} -> ${phone}`);
      staffListItem.textContent = `${initials} -> ${phone}`;
      staffList.appendChild(staffListItem);
    };
  }
  
  function getValueAndClear(inputElement) {
    const value = inputElement.value;
    inputElement.value = "";
    return value;
  }
  
  associativeMain();
  