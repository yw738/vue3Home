// import DataArr from "@/assets/public.js";

let list = [];

export let getUrlarr = () => {
  let aaa = [];
  list.forEach((v) => {
    if (v.children) {
      v.children.forEach((s) => {
        aaa.push(...s.data.map((f) => f.url));
      });
    } else if (v?.data) {
      aaa.push(...v.data.map((a) => a.url));
    } else {
      aaa.push(v.url);
    }
  });
  return aaa;
};
