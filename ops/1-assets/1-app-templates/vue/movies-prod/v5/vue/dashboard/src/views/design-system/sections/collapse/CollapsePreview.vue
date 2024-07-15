<template>
  <div class="bd-example">
    <p>
      <b-button v-b-toggle.collapseExample variant="primary mt-2" href="#"> Link with href </b-button>{{ ' ' }} <b-button v-b-toggle.collapseExample variant="primary mt-2">Button with data-bs-target</b-button>{{ ' ' }}
      <b-button v-b-toggle.collapseWidthExample variant="primary mt-2">Toggle width collapse</b-button>
    </p>
    <b-collapse id="collapseExample">
      <div class="card card-body">Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
    </b-collapse>
    <div>
      <b-collapse id="collapseWidthExample" class="collapse-horizontal">
        <div class="card card-body" style="width: 300px">This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.</div>
      </b-collapse>
      <p>
        <b-button v-b-toggle.multiCollapseExample1 variant="primary mt-2" href="#"> Toggle first Elements </b-button>
        {{ ' ' }}
        <b-button v-b-toggle.multiCollapseExample2 variant="primary mt-2">Toggle second Elements</b-button>
        {{ ' ' }}
        <b-button v-b-toggle="['multiCollapseExample1', 'multiCollapseExample2']" variant="primary mt-2">Toggle both Elements</b-button>
      </p>
      <b-row>
        <b-col>
          <b-collapse id="multiCollapseExample1" class="multi-collapse">
            <div class="card card-body">Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
          </b-collapse>
        </b-col>
        <div class="col">
          <b-collapse id="multiCollapseExample2" class="multi-collapse">
            <div class="card card-body">Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.</div>
          </b-collapse>
        </div>
      </b-row>
    </div>
  </div>
</template>
