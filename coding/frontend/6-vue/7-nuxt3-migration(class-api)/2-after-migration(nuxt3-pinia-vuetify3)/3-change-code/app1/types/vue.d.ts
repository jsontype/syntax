import { Store } from "vuex";
import type { RootState } from "~/store";

declare module "vue" {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}

// vue-facing-decorator를 위한 추가 선언
declare module "vue-facing-decorator" {
  interface Vue {
    $store: Store<RootState>;
    [key: string]: any; // 클래스 멤버 접근 허용
  }
}

// ComponentPublicInstance 확장
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
