export const getString = (key: string) => {
  return localStorage.getItem(key);
};

export const setString = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const getObject = <T>(key: string) => {
  const raw = localStorage.getItem(key);
  return raw ? (JSON.parse(raw) as T) : null;
};

export const setObject = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const remove = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
