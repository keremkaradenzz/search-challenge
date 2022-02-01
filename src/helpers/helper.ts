export function sort(array: any[], index: number) {
  let newArr = array.sort(function (a, b) {
        return a[index].localeCompare(b[index]);
  });
  return newArr;
}

/**
 * @Description  this function select input value according to list
 * @Param       list ,  sortValue
 * @Returns     object
 * @Author      Kerem Karadeniz
 */
export function sortList(list: Array<any>, sortValue: any) {
  let sortedList: any;
  if (sortValue === "sortYearDesc") {
    sortedList = sort(list, 3);
    sortedList = sortedList.reverse();
  } else if (sortValue === "sortYearAsc") {
    sortedList = sort(list, 3);
  } else if (sortValue === "sortNameDesc") {
    sortedList = sort(list, 0);
    sortedList = sortedList.reverse();
  } else if (sortValue === "sortNameAsc") {
    sortedList = sort(list, 0);
  }
  return sortedList;
}
