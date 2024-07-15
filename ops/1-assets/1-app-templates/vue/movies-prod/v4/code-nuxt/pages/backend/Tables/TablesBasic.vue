<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Tables
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-1 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>The <code>.table </code> class adds basic styling to a table.</p>
            <b-collapse id="collapse-1" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-1" class="text-white">
                    <code>
&lt;b-table :items="items"&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Table Head Options
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-2 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Similar to tables and dark tables, use the modifier classes <code class="highlighter-rouge">.thead-light</code> or <code class="highlighter-rouge">.thead-dark</code> to make <code class="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.</p>
            <b-collapse id="collapse-2" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-2" class="text-white">
                    <code>
&lt;b-table :items="items" head-variant="dark"&gt;&lt;/b-table&gt;
&lt;b-table :items="items" head-variant="light"&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" head-variant="dark" />
            <b-table :items="items" head-variant="light" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Borderless table
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-3 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Add <code class="highlighter-rouge">.table-borderless</code> for a table without borders.</p>
            <b-collapse id="collapse-3" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-3" class="text-white">
                    <code>
&lt;b-table :items="items" borderless&gt;&lt;/b-table&gt;
&lt;p&gt;&lt;code class="highlighter-rouge"&gt;.table-borderless&lt;/code&gt; can also be used on dark tables.&lt;/p&gt;
&lt;b-table :items="items" table-variant="dark" borderless&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" borderless />
            <p><code class="highlighter-rouge">.table-borderless</code> can also be used on dark tables.</p>
            <b-table :items="items" table-variant="dark" borderless />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Small table
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-4 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Add <code class="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.</p>
            <b-collapse id="collapse-4" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-4" class="text-white">
                    <code>
&lt;b-table small :items="items"&gt;&lt;/b-table&gt;
&lt;b-table small :items="items" table-variant="dark"&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table small :items="items" />
            <b-table small :items="items" table-variant="dark" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Captions
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-5 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>A <code class="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
            <b-collapse id="collapse-5" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-5" class="text-white">
                    <code>
&lt;b-table :items="items"&gt;
  &lt;template v-slot:table-caption&gt;List of users&lt;/template&gt;
&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items">
              <template v-slot:table-caption>
                List of users
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6" sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Table Dark
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-6 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>You can also invert the colors—with light text on dark backgrounds—with <code class="highlighter-rouge">.table-dark</code>.</p>
            <b-collapse id="collapse-6" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-6" class="text-white">
                    <code>
&lt;b-table :items="items" table-variant="dark"&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" table-variant="dark" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Striped rows
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-7 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Use <code class="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
            <b-collapse id="collapse-7" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-7" class="text-white">
                    <code>
&lt;b-table :items="items" striped&gt;&lt;/b-table&gt;
&lt;b-table :items="items" table-variant="dark" striped&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" striped />
            <b-table :items="items" table-variant="dark" striped />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Hoverable rows
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-8 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Add <code class="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code class="highlighter-rouge">&lt;tbody&gt;</code>.</p>
            <b-collapse id="collapse-8" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-8" class="text-white">
                    <code>
&lt;b-table :items="items" hover&gt;&lt;/b-table&gt;
&lt;b-table :items="items" table-variant="dark" hover&gt;&lt;/b-table&gt;
&lt;script&gt;
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
    }
  }
}
&lt;/script&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table :items="items" hover />
            <b-table :items="items" table-variant="dark" hover />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Contextual classes
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-9 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Use contextual classes to color table rows or individual cells.</p>
            <b-collapse id="collapse-9" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-9" class="text-white">
                    <code>
&lt;b-table-simple&gt;
  &lt;b-thead&gt;
    &lt;b-th&gt;Variant&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
  &lt;/b-thead&gt;
  &lt;b-tbody&gt;
    &lt;b-tr variant="active"&gt;
      &lt;b-th&gt;Active&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;Default&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="primary"&gt;
      &lt;b-th&gt;Primary&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="secondary"&gt;
      &lt;b-th&gt;Secondary&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="success"&gt;
      &lt;b-th&gt;Success&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="danger"&gt;
      &lt;b-th&gt;Danger&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="warning"&gt;
      &lt;b-th&gt;Warning&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr variant="info"&gt;
      &lt;b-th&gt;Info&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
  &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;
&lt;p&gt;Regular table background variants are not available with the dark table, however, you may use &lt;a href="https://getbootstrap.com/" target="_blank"&gt;text or background utilities&lt;/a&gt; to achieve similar styles.&lt;/p&gt;
&lt;b-table-simple table-variant="dark"&gt;
  &lt;b-thead&gt;
    &lt;b-th&gt;#&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
  &lt;/b-thead&gt;
  &lt;b-tbody&gt;
    &lt;b-tr class="bg-primary"&gt;
      &lt;b-th&gt;1&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;2&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr class="bg-success"&gt;
      &lt;b-th&gt;3&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;4&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr class="bg-info"&gt;
      &lt;b-th&gt;5&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;6&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr class="bg-warning"&gt;
      &lt;b-th&gt;7&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;8&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr class="bg-danger"&gt;
      &lt;b-th&gt;9&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
  &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table-simple>
              <b-thead>
                <b-th>Variant</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
              </b-thead>
              <b-tbody>
                <b-tr variant="active">
                  <b-th>Active</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>Default</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="primary">
                  <b-th>Primary</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="secondary">
                  <b-th>Secondary</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="success">
                  <b-th>Success</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="danger">
                  <b-th>Danger</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="warning">
                  <b-th>Warning</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr variant="info">
                  <b-th>Info</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <p>Regular table background variants are not available with the dark table, however, you may use <a href="https://getbootstrap.com/" target="_blank">text or background utilities</a> to achieve similar styles.</p>
            <b-table-simple table-variant="dark">
              <b-thead>
                <b-th>#</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
              </b-thead>
              <b-tbody>
                <b-tr class="bg-primary">
                  <b-th>1</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>2</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr class="bg-success">
                  <b-th>3</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>4</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr class="bg-info">
                  <b-th>5</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>6</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr class="bg-warning">
                  <b-th>7</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>8</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr class="bg-danger">
                  <b-th>9</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </template>
        </iq-card>
      </b-col>
      <b-col sm="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">
              Responsive tables
            </h4>
          </template>
          <template v-slot:headerAction>
            <a v-b-toggle.collapse-10 class="text-primary float-right" role="button">
              <i class="ri-code-s-slash-line" />
            </a>
          </template>
          <template v-slot:body>
            <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code class="highlighter-rouge">.table</code> with <code class="highlighter-rouge">.table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code class="highlighter-rouge">.table-responsive{-sm|-md|-lg|-xl}</code>.</p>
            <b-collapse id="collapse-10" class="mb-2">
              <div class="card">
                <kbd class="bg-dark">
                  <pre id="table-10" class="text-white">
                    <code>
&lt;b-table-simple responsive&gt;
  &lt;b-thead&gt;
    &lt;b-th&gt;#&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
    &lt;b-th&gt;Heading&lt;/b-th&gt;
  &lt;/b-thead&gt;
  &lt;b-tbody&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;1&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;2&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
    &lt;b-tr&gt;
      &lt;b-th&gt;3&lt;/b-th&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
      &lt;b-td&gt;Cell&lt;/b-td&gt;
    &lt;/b-tr&gt;
  &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;
</code></pre>
                </kbd>
              </div>
            </b-collapse>
            <b-table-simple responsive>
              <b-thead>
                <b-th>#</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
                <b-th>Heading</b-th>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-th>1</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>2</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
                <b-tr>
                  <b-th>3</b-th>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                  <b-td>Cell</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../assets/app/app'
export default {
  layout: 'BackendLayout',
  name: 'TablesBasic',
  data () {
    return {
      items: [
        { '#': '1', first: 'Mark', last: 'Otto', handle: '@mdo' },
        { '#': '2', first: 'Jacob', last: 'Thornton', handle: '@fat' },
        { '#': '3', first: 'Larry', last: 'the Bird', handle: '@twitter' }
      ]
      // items1: [
      //   { '#': '1' , heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell' },
      //   { '#': '2' , heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell' },
      //   { '#': '3' , heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell', heading: 'Cell' }
      // ]
    }
  },
  mounted () {
    core.index()
  }
}
</script>
