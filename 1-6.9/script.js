// 1
function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      console.log(arguments)
      return func.apply(this, arguments);
    }
    wrapper.calls = [];

    return wrapper;
}

// 2 
function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
}

// 3 debounce - обертка, чтобы вызывать функцию не более одного раза в ".." мс
function debounce(f, ms) {

    let isReady = false;
  
    return function() {
      if (isReady) return;
  
      f.apply(this, arguments);
  
      isReady = true;
  
      setTimeout(() => isReady = false, ms);
    };
}
// 4
function throttle(func, ms) {

    let isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { 
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); 
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; 
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
}

