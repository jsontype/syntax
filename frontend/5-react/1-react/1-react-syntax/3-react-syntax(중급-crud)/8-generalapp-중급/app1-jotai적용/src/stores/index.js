// atom: jotai의 상태를 정의하는 함수
import { atom } from "jotai"

export const store = {
  countAtom: atom(0),
  moviesAtom: atom([]),
  todosAtom: {
    todos: atom([]),
    todosKey: atom(0),
  },
  newsAtom: atom([]),
}
