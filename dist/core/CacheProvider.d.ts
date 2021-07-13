declare class WebCache {
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => string | undefined;
    removeItem: (key: string) => void;
}
export default WebCache;
