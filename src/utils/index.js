
export const debounce = (func, timer) => {
  let timeoutId;
  return function(...args){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args)
    }, timer)
  }
}