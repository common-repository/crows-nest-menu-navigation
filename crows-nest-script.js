// v 1.9.3
document.addEventListener("DOMContentLoaded", function(event) {
  // querySelecting
  const focusablePrimaryMenuElements= document.querySelectorAll(`${primaryMenuSelector}`);
  const mainContentElement = document.querySelector(`${mainContentSelector}`)
  mainContentElement.setAttribute("tabindex", "-1");
  const menuEntire = document.querySelector(`${wholeMenuSelector}`);
  const dropDownElements = document.querySelectorAll(`${dropDownSelector}`);
  const focusableSecondaryMenuElements= document.querySelectorAll(`${secondaryMenuItemSelector}, ${primaryMenuSelector}`);
  
  // Destructuring
  const focusablePrimary = [...focusablePrimaryMenuElements];
  const dropDowns = [...dropDownElements];
  const focusableSecondary = [...focusableSecondaryMenuElements];
  
  // check for aria-expanded attribute and add if needed
  for (let i=0;i<dropDowns.length; i++) {
    if (dropDowns[i].hasAttribute("aria-expanded") == false) {
      dropDowns[i].setAttribute("aria-expanded","false");
      dropDowns[i].addEventListener("focus", () => {
        toggleAriaExpanded();
      })
      dropDowns[i].addEventListener("blur", () => {
        toggleAriaExpanded();
      })
    };
  }


  // Event Listeners
  for (i=0;i<focusablePrimary.length;i++) {
    focusablePrimary[i].addEventListener("focus", () => {
      listenForKeystrokes();
      recordPrimaryIndex();
    })
    focusablePrimary[i].addEventListener("click", () => {
      removeInstructions();
    })
    focusablePrimary[i].addEventListener("blur", () => {
      ignoreKeystrokes();
    });
    focusablePrimary[focusablePrimary.length-1].addEventListener("focus", () => {
      listenForFocusOut();
    })
    focusablePrimary[focusablePrimary.length-1].addEventListener("blur", () => {
      ignoreFocusOut();
    })
  }
  
  document.addEventListener("click", (evt) => {
    const flyoutEl = menuEntire;
    let targetEl = evt.target; // clicked element      
    do {
      if(targetEl == flyoutEl) {
        // This is a click inside, does nothing, just return.
        return;
      }
      // Go up the DOM
      targetEl = targetEl.parentNode;
    } while (targetEl);
    // This is a click outside.      
    removeInstructions();
  });
  
  focusablePrimary[0].addEventListener("focus", () => {
    popupInstructions();
    listenForAnyFocusOut();
  });
  focusablePrimary[focusablePrimary.length-1].addEventListener("focus", () => {
    listenForAnyFocusOut();
  });
  focusableSecondary[focusableSecondary.length-1].addEventListener("focus", () => {
    popupInstructions();
    listenForAnyFocusOut(); 
  })
  for (i=0;i<focusableSecondary.length;i++) {
    focusableSecondary[i].addEventListener("focus", () => {
      listenForVerticalKeystrokes();
      listenForLateralKeystrokes();
    })
    focusableSecondary[i].addEventListener("click", () => {
      removeInstructions();
    })
    focusableSecondary[i].addEventListener("blur", () => {
      ignoreVerticalKeystrokes();
      ignoreLateralKeystrokes();
    });
  }
  // visual instructions
  const navInstructions = document.createElement('div');
  navInstructions.id = "nav-instructions";
  navInstructions.style.color=`${instructionsColor}`;
  navInstructions.style.top=`${fromTopLocation}`;
  navInstructions.textContent = "Use the arrow keys to navigate the menu. To enter the page, use the right arrow key from the last main menu item or press escape at any time.";
  let dropdownLabel = document.createElement('span');
  dropdownLabel.id = "dropdown-label"
  dropdownLabel.style.display = "none";
  dropdownLabel.textContent = "dropdown menu";
  navInstructions.append(dropdownLabel);
  
  // add unique IDs and aria-labeledby to dropdowns
  for (let i=0;i<dropDowns.length;i++) {
    dropDowns[i].id = "dropdown-" + (i+1);
    dropDowns[i].setAttribute("aria-labelledby","dropdown-"+(i+1)+" dropdown-label");
  }
  
  // Functions
  // recording primary index
  function recordPrimaryIndex() {
    primaryIndex = focusablePrimary.indexOf(document.activeElement);
  };
  // instructions
  function popupInstructions(){
    menuEntire.prepend(navInstructions);
    // remove in 2.0
    const navInstructionExtra = document.querySelectorAll('#nav-instructions');
    let navInstructionsExtra = [...navInstructionExtra];
    if (navInstructionsExtra[1]) {
      navInstructionsExtra[1].remove();
    }
  }
  function removeInstructions(){
    let instructions = document.querySelector('#nav-instructions');
    if (instructions){
      instructions.remove();
    }
  }
  // keystroke listeners
  function listenForKeystrokes(){
    document.addEventListener("keydown", handleMenuFocusTransfer);
  }
  function ignoreKeystrokes() {
    document.removeEventListener("keydown", handleMenuFocusTransfer);
  }
  function listenForVerticalKeystrokes(){
    document.addEventListener("keydown", handleMenuFocusTransferVertical);
  }
  function ignoreVerticalKeystrokes() {
    document.removeEventListener("keydown", handleMenuFocusTransferVertical);
  }
  function listenForFocusOut() {
    document.addEventListener("keydown", handleMenuFocusOut);
  }
  function ignoreFocusOut() {
    document.removeEventListener("keydown", handleMenuFocusOut);
  }
  function listenForAnyFocusOut() {
    document.addEventListener("keydown", handleAnyFocusOut);
  }
  function removeAnyFocusOut(){
    document.removeEventListener("keydown", handleAnyFocusOut);
  }
  function listenForLateralKeystrokes() {
    document.addEventListener("keydown", handleLateralFocusTransfer);
  }
  function ignoreLateralKeystrokes() {
    document.removeEventListener("keydown", handleLateralFocusTransfer);
  }
  // moving focus
  function handleMenuFocusTransfer(e){
    const index = focusablePrimary.indexOf(document.activeElement);
    let nextIndex = 0;
    if (e.keyCode === 37) {
      // left arrow
      e.preventDefault();
      nextIndex= index > 0 ? index-1 : 0;
      focusablePrimaryMenuElements[nextIndex].focus();
    }
    else if (e.keyCode === 39) {
      // right arrow
      e.preventDefault();
      nextIndex= index < focusablePrimary.length ? index+1 : index;
      focusablePrimaryMenuElements[nextIndex].focus();
    }
  }
  function handleMenuFocusTransferVertical(e){
    const verticalIndex = focusableSecondary.indexOf(document.activeElement);
    
    let nextIndex = 0;
    
    if (e.keyCode === 38) {
      // up arrow
      e.preventDefault();
      nextIndex= verticalIndex > 0 ? verticalIndex-1 : 0;
      focusableSecondaryMenuElements[nextIndex].focus();
    }
    else if (e.keyCode === 40) {
      // down arrow
      e.preventDefault();
      nextIndex= verticalIndex+1 < focusableSecondary.length ? verticalIndex+1 : verticalIndex;
      focusableSecondaryMenuElements[nextIndex].focus();
    }
  }
  function handleLateralFocusTransfer(e){
    let nextIndex = 0;
    if (e.keyCode === 37) {
      // left arrow
      e.preventDefault();
      nextIndex= primaryIndex > 0 ? primaryIndex-1 : 0;
      focusablePrimaryMenuElements[nextIndex].focus();
    }
    else if (e.keyCode === 39) {
      // right arrow
      e.preventDefault();
      nextIndex= primaryIndex < focusablePrimary.length ? primaryIndex+1 : primaryIndex;
      focusablePrimaryMenuElements[nextIndex].focus();
    }
  }
  function handleAnyFocusOut(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      removeAnyFocusOut();
      removeInstructions();
      mainContentElement.focus();
    }
  }
  function handleMenuFocusOut(e) {
    if (e.keyCode === 39) {
      e.preventDefault();
      removeInstructions();
      mainContentElement.focus();
    }
  }

  function toggleAriaExpanded() {
    let active = document.activeElement;
    for (let i=0; i<dropDownElements.length; i++) {
      if (dropDownElements[i] == active) {
        dropDownElements[i].setAttribute("aria-expanded", "true")
      } else {
        dropDownElements[i].setAttribute("aria-expanded", "false");
      }
    }
  }
});