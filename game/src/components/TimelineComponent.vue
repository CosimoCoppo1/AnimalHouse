<template>
  <div class="container">
    <ul class="timeline" v-for="(step, index) in this.steps" :key="index">
      <li :class="index % 2 != 0 ? 'timeline__inverted' : ''">
        <div class="timeline__image">
          <img
            class="rounded-circle img-fluid"
            :src="`${image}`"
            :alt="step.alt"
          />
        </div>
        <div class="timeline__panel">
          <div class="timeline__content">
            <h4>{{ step.year }}</h4>
            <h4 class="subheading">{{ step.intro }}</h4>
          </div>
          <div class="timeline__body">
            <p class="text-muted">{{ step.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TimelineComponent",
  data() {
    return {
      image: [
        "../assets/bg-video.jpg",
        "../assets/bg-video.jpg",
        "../assets/bg-video.jpg",
        "../assets/bg-video.jpg",
      ],
      steps: [
        {
          alt: "..",
          year: "2018-2019",
          intro: "Una birra tra amici",
          description: "bla bla",
        },
        {
          alt: "..",
          year: "2019-2020",
          intro: "Il progetto",
          description: "bla bla",
        },
        {
          alt: "..",
          year: "2020-2023",
          intro: "Il sogno",
          description: "bla bla",
        },
        {
          alt: "..",
          year: "",
          intro: "",
          description: "bla bla",
        },
      ],
    };
  },
};
</script>

<style>
.timeline {
  position: relative;
  padding: 0;
  list-style: none;
}
.timeline:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  margin-left: -1.5px;
  content: "";
  background-color: #e9ecef;
}
.timeline > li {
  position: relative;
  min-height: 50px;
  margin-bottom: 50px;
}
.timeline > li:after,
.timeline > li:before {
  display: table;
  content: " ";
}
.timeline > li:after {
  clear: both;
}
.timeline > li .timeline__panel {
  position: relative;
  float: right;
  width: 100%;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li .timeline__panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li .timeline__panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li .timeline__image {
  position: absolute;
  z-index: 100;
  left: 0;
  width: 80px;
  height: 80px;
  margin-left: 0;
  text-align: center;
  color: #fff;
  border: 7px solid #e9ecef;
  border-radius: 100%;
  background-color: #fed136;
}
.timeline > li .timeline__image h4 {
  font-size: 10px;
  line-height: 14px;
  margin-top: 12px;
}
.timeline > li.timeline__inverted > .timeline__panel {
  float: right;
  padding: 0 20px 0 100px;
  text-align: left;
}
.timeline > li.timeline__inverted > .timeline__panel:before {
  right: auto;
  left: -15px;
  border-right-width: 15px;
  border-left-width: 0;
}
.timeline > li.timeline__inverted > .timeline__panel:after {
  right: auto;
  left: -14px;
  border-right-width: 14px;
  border-left-width: 0;
}
.timeline > li:last-child {
  margin-bottom: 0;
}
.timeline .timeline__content h4 {
  margin-top: 0;
  color: inherit;
}
.timeline .timeline__content h4.subheading {
  text-transform: none;
}
.timeline .timeline__body > p,
.timeline .timeline__body > ul {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .timeline:before {
    left: 50%;
  }
  .timeline > li {
    min-height: 100px;
    margin-bottom: 100px;
  }
  .timeline > li .timeline__panel {
    float: left;
    width: 41%;
    padding: 0 20px 20px 30px;
    text-align: right;
  }
  .timeline > li .timeline__image {
    left: 50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
  }
  .timeline > li .timeline__image h4 {
    font-size: 13px;
    line-height: 18px;
    margin-top: 16px;
  }
  .timeline > li.timeline__inverted > .timeline__panel {
    float: right;
    padding: 0 30px 20px 20px;
    text-align: left;
  }
}
</style>
