import JsCookie from "js-cookie";

class WebCache {
  public setItem = (key: string, value: string) => {
    JsCookie.set(key, value);
  };

  public getItem = (key: string) => {
    return JsCookie.get(key);
  };

  public removeItem = (key: string) => {
    JsCookie.remove(key);
  };
}

export default WebCache;
