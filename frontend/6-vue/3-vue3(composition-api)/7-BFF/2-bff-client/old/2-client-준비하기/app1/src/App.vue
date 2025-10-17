<template>
  <div id="app">
    <header class="App-header">
      <h1>Company Management</h1>
      <nav>
        <ul>
          <li><router-link to="/roles" active-class="active" class="nav-link">Roles</router-link></li>
          <li><router-link to="/teams" active-class="active" class="nav-link">Teams</router-link></li>
          <li><router-link to="/people" active-class="active" class="nav-link">People</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
  /* 글로벌 스타일 : 태그별 스타일 */
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 스타일 리셋 */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* 예전 버전 브라우져를 위한 HTML5 디스플레이 리셋 */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 하위 컴포넌트들의 스타일 */
  .component {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .component aside {
    flex-shrink: 0;
    width: 320px;
    height: calc(100vh - 64px);
    background-color: #333;
    overflow-y: scroll;
  }

  .component .contents {
    flex-grow: 1;
    height: 100%;
    overflow-y: scroll;
    padding: 20px;
  }

  .component .contents .inputContainer {
    display: inline-block;
    padding: 32px;
    margin: 4px;
    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 8px;
  }

  .component .contents .inputContainer td {
    padding: 4px 8px;
  }

  .component .contents .inputContainer td input {
    border: 1px solid #ccc;
    height: 20px;
    line-height: 20px;
  }

  .component .contents .inputContainer td input[type=number] {
    width: 44px;
  }

  .component .contents .inputContainer td select {
    border: 1px solid #ccc;
    height: 24px;
    line-height: 24px;
  }

  .component .contents .inputContainer ul {
    width: 300px;
    margin-top: 12px;
  }

  .component .contents .inputContainer ul li {
    display: inline-block;
    margin: 0 6px 6px 0;
    padding: 6px 8px;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
    text-transform: capitalize;
  }

  .component .contents .inputContainer ul li .count {
    display: inline-block;
    color: white;
    background-color: dodgerblue;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 4px;
    margin: 0 6px;
  }

  .component .contents .inputContainer ul li .increase {
    cursor: pointer;
  }

  .component .contents .inputContainer .buttons {
    margin-top: 24px;
    text-align: center;
  }

  .component .contents .inputContainer .buttons button {
    margin-right: 8px;
    padding: 8px 24px;
    cursor: pointer;
  }

  .component aside {
    color: white;
  }

  .component aside>ul>li {
    padding: 16px 20px;
    border-bottom: 2px solid #555;
  }

  .component aside .teamItemTitle {
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
  }

  .component aside .teamMembers {
    margin-top: 8px;
    padding-left: 6px;
    color: #BBB;
  }

  .component aside .teamMembers li {
    padding: 10px 4px;
    border-bottom: 1px solid #444;
    cursor: pointer;
  }

  .component aside .teamMembers li:last-child {
    border-bottom: 0;
  }

  .component aside .face {
    display: inline-block;
    width: 32px;
  }

  .component aside .bloodType {
    display: inline-block;
    width: 28px;
    margin-right: 20px;
    padding: 4px 0;
    text-align: center;
    font-size: 0.9em;
    font-weight: bold;
    color: #777;
    background-color: #222;
    border-radius: 4px;
  }

  .component aside .peopleName {
    cursor: pointer;
  }

  .component aside .roleItem {
    text-transform: capitalize;
    cursor: pointer;
  }

  .component aside .roleItem span {
    display: inline-block;
    width: 32px;
  }

  .component .contents .roleWrapper {
    display: inline-block;
    margin: 8px;
    padding: 16px 24px;
    border-radius: 8px;
    background-color: white;
    border: 2px solid #ddd
  }

  .component .contents .roleWrapper h2 {
    font-size: 1.8em;
    margin-bottom: 6px;
    text-transform: capitalize;
  }

  .component .contents .roleWrapper .requirement {
    margin-bottom: 24px;
    color: gray;
  }

  .component .contents .roleWrapper .requirement span {
    color: dodgerblue;
    text-transform: capitalize;
  }

  .component .contents .roleWrapper h3 {
    color: #555;
    font-size: 1.2em;
    margin: 16px 0 8px 0;
  }

  .component .contents .roleWrapper li {
    display: inline-block;
    margin: 0 6px 6px 0;
    padding: 6px;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  /* App 스타일 */
  body {
    background-color: #eee;
  }

  header {
    height: 64px;
    line-height: 64px;
    background-color: white;
  }  

  h1 {
    display: inline-block;
    font-size: 1.6em;
    margin: 0 24px;
  }

  nav {
    display: inline-block;
  }

  nav ul {
    display: flex;
    flex-direction: row;
  }

  nav ul li {
    margin-left: 16px;
    cursor: pointer;
  }

  nav ul li .nav-link {
    color: black;
    text-decoration: none;
  }

  nav ul li .nav-link:hover {
    color: dodgerblue;
    text-decoration: underline;
  }

  nav ul li .router-link-exact-active {
    color: dodgerblue;
    text-decoration: underline;
  }

  main {
    height: calc(100vh - 64px);
    overflow: hidden;
  }
</style>
