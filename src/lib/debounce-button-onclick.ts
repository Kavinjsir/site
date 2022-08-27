export function simpleDebounce(func: () => void, timeout = 200) {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this), timeout);
  };
}

export function debounceLead(func: () => void, timeout = 200) {
  let timer: NodeJS.Timeout | undefined;

  const handler = () => {
    if (!timer) {
      func.apply(this);
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };

  return handler;
}
