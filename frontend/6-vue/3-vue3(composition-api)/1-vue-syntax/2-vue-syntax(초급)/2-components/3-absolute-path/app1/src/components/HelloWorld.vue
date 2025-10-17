<template>
  <h1>
    <!--
      css 클래스 바인딩
      1. :class 조건식과 함께 사용하는 클래스로서,
        :class="secondary ? 'gray' : ''"로 쓸 수도 있고, 
        :class="secondary && 'gray'"로 넣을 수도 있겠다.
      1. 하지만 이런 경우 :class="{ 'gray': secondary, ... }"로
        불린 조건식을 뒤로 넣는 형태로 쓸 수 있고, 
        이러면 조건식 class가 여러개 있을 때 더 깔끔하다.
    -->
    <span :class="{ 'gray': secondary }">#{{ id }} {{ msg }} {{ username }} {{ mark }}</span>
  </h1>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

/**
 * Props의 타입 인터페이스 정의
 * 1. ?(Optional Chaning)가 붙은 것은 필수 프롭이 아니며, defualt 값이 없을 경우 undefined가 된다.
 * 1. interface Props와 type Props와의 차이점은 다음과 같다.
 * - interface Props {} 는 type Props = {}와 같지만 "="가 필요없다.
 * - 인터페이스는 interface는 확장 가능(extendable)한 반면, 타입 별칭은 확장 불가능(unextendable)하다.
 * 즉, 같은 이름의 interface를 여러 번 선언하면, 그것들이 자동으로 합쳐진다. (이를 선언 병합이라고 함)
 * 하지만 type 역시 인터섹션 타입을 사용하여 기존 타입을 결합할 순 있다. (예: type Person = Name & Age)
 * - Vue 컴포넌트의 prop 타입을 정의하는 경우, interface를 사용하는 것이 더 일반적이다.
 * Props가 보통 객체의 형태를 취하고 있기 때문이다.
 * type을 사용할 수도 있지만, 객체의 구조를 정의할 때는 interface를 사용하는 것이 더 관례적이다.
 */
interface Props {
  id: number;
  msg: string;
  username?: string;
  mark?: string;
  secondary?: boolean;
  hover?: boolean;
  click?: () => void;
}
/**
 * withDefaults를 사용하여 props의 기본값 설정
 * 1. msg 같이 ?가 없는 필수 프롭들은 default 값을 넣지 않는 것이 원칙이다.
 * 1. 여기서 defineProps<Props>의 Props 안에 직접 { msg: string, mark?: string }을 넣어도 된다.
 * 1. props.msg 형태로 props를 꺼내 사용해야 할 경우, const props = withDefaults...로 넣으면 된다.
 */
withDefaults(defineProps<Props>(), {
  name: 'Stranger',
  mark: '.',
  disabled: false,
  hover: false,
  click: () => {}
})
</script>

<style scoped>
.gray {
  color: gray;
}
</style>
