<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Content>
      <template>
        <div style="color:red;">
          <h3>v-slot:default (템플릿에 안 담았을 때)</h3>
          <p>
            여기에다가 원하는 HTML코드를 넣으면 Content 컴포넌트의 slot부분에 들어갑니다.<br>
            여러줄의 코드를 넣어도 관계가 없습니다.
          </p>
        </div>
      </template>

      <!-- 아래는 <template v-slot:body>의 숏버전입니다. -->
      <template #body>
        <div style="color:blue;">
          <h3>v-slot:body (일치하는 슬롯명의 템플릿에 담았을 때)</h3>
          <p>
            여기처럼 템플릿안에 v-slot옵션을 지정해 Content과 연결하면 특정부분별 slot지정이 가능해요.<br>
            만일 위와같이 아무것도 아닌 애들 역시 template안에 담고 싶다면 v-slot:default로 담아주면 됩니다.
          </p>
        </div>
      </template>
    </Content>

  </div>
</template>

<script>
import Content from '@/components/Content.vue'

export default {
  components: {
    Content,
  },
}
</script>
