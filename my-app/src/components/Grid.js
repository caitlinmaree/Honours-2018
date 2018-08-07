// import React from "react";
// import ImagesLoaded from 'react-images-loaded';
//
//
//
// export class Grid extends React.Component {
//   componentDidMount(){
//   function resizeGridItem ( item ) {
//      var grid = document.getElementsByClassName("gallery-wrapper")[0];
//      var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//      var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//      var rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//      item.style.gridRowEnd = "span "+rowSpan;
//   }
//
//   function resizeAllGridItems(){
//      var allItems = document.getElementsByClassName("item");
//      for( var i = 0; i < allItems.length; i ++){
//         resizeGridItem(allItems[i]);
//      }
//   }
//
//   window.onload = resizeAllGridItems();
//
//   window.addEventListener("resize", resizeAllGridItems);
//
//   var allItems = document.getElementsByClassName("item");
//   for(var i=0;i<allItems.length;i++){
//       imagesLoaded(allItems[i], resizeInstance)
//   }
//
//   function resizeInstance(instance){
//      var item = instance.elements[0];
//      resizeGridItem(item);
//   }
//  }
// }
