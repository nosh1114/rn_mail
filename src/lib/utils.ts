export function isUsingSmartphone(str: string): boolean {
    if (str.match(/iPhone|Android.+Mobile/)){
        return true;
    }
    else{
        return false;
    }
}