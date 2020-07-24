import { atom } from "recoil";

export const users = atom({
    key: "users",
    default: [] 
});
  
export const view = atom({
    key: "view",
    default: "home",
});
  