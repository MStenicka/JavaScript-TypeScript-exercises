'use strict';
const leftList = document.getElementById('leftList');
const rightList = document.getElementById('rightList');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
const removeBtn = document.getElementById('removeBtn');
const rightBtn = document.getElementById('rightBtn');

let selectedIndex = 0;

function updateListItems() {
  const leftItems = Array.from(leftList.children);
  const rightItems = Array.from(rightList.children);

  leftItems.forEach((item, index) => {
    item.classList.toggle('selected', index === selectedIndex);
  });

  rightItems.forEach((item) => {
    item.classList.remove('selected');
  });
}

function moveUp() {
  if (selectedIndex > 0) {
    const selectedItem = leftList.children[selectedIndex];
    // leftList.removeChild(selectedItem);
    // leftList.insertBefore(selectedItem, leftList.children[selectedIndex - 1]);
    selectedIndex--;
    updateListItems();
  }
}

function moveDown() {
  const leftItems = Array.from(leftList.children);
  if (selectedIndex < leftItems.length - 1) {
    const selectedItem = leftList.children[selectedIndex];
    // leftList.removeChild(selectedItem);
    // leftList.insertBefore(
    //   selectedItem,
    //   leftList.children[selectedIndex + 1].nextSibling,
    // );
    selectedIndex++;
    updateListItems();
  }
}

function removeSelectedItem() {
  if (leftList.children.length > 0) {
    const selectedItem = leftList.children[selectedIndex];
    leftList.removeChild(selectedItem);
    selectedIndex = 0;
    updateListItems();
  }
}

function moveRight() {
  if (leftList.children.length > 0) {
    const selectedItem = leftList.children[selectedIndex];
    rightList.appendChild(selectedItem);
    selectedIndex = 0;
    updateListItems();
  }
}

upBtn.addEventListener('click', moveUp);
downBtn.addEventListener('click', moveDown);
removeBtn.addEventListener('click', removeSelectedItem);
rightBtn.addEventListener('click', moveRight);

updateListItems();
