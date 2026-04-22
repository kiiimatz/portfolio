// export { handle } from "@kiiimatz/fontrum/hooks";

import { createHandle } from "@kiiimatz/fontrum/hooks";

export const handle = createHandle([
  { class: "writer", font: "/fonts/writer-regular.ttf" },
	  { class: "writer-mx", font: "/fonts/writer-medium.ttf" },
	  { class: "sans", font: "/fonts/googlesans-medium.ttf" },
	  { class: "sans-bx", font: "/fonts/googlesans-bold.ttf" },
]);
