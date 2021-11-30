<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header">广东省疫情动态跟踪评价系统</el-header>
      <el-container class="body-container">
        <el-container class="main-container">
          <el-main class="main">
            <el-card shadow="hover" class="grid-part" id="header1">
              <h4>广东省疫情情况</h4>
              <div class="subtitle">数据更新至 2021.11.28</div>
              <el-row>
                <el-col :span="6">
                  <increment
                    title="现有确诊"
                    :currentNumber="55"
                    :changeNumber="+13"
                    color="#ff6a57"
                  />
                </el-col>
                <el-col :span="6">
                  <increment
                    title="无症状"
                    :currentNumber="25"
                    :changeNumber="+5"
                    color="#e86d48"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="现有疑似"
                    :currentNumber="3"
                    :changeNumber="0"
                    color="#ec9217"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="现有重症"
                    :currentNumber="5"
                    :changeNumber="-1"
                    color="#545499"
                /></el-col>
              </el-row>
              <el-row>
                <el-col :span="6">
                  <increment
                    title="累计确诊"
                    :currentNumber="16700"
                    :changeNumber="+13"
                    color="#e83132"
                  />
                </el-col>
                <el-col :span="6">
                  <increment
                    title="境外输入"
                    :currentNumber="2400"
                    :changeNumber="+7"
                    color="#476da0"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="累计治愈"
                    :currentNumber="12879"
                    :changeNumber="+13"
                    color="#10aeb5"
                /></el-col>
                <el-col :span="6">
                  <increment
                    title="累计死亡"
                    :currentNumber="200"
                    :changeNumber="+0"
                    color="#4d5054"
                /></el-col>
              </el-row>
            </el-card>
            <el-card shadow="hover" class="map-part" id="header2">
              <h4>疫情预测地图</h4>
              <div class="subtitle">截至2021.11.28广东省疫情分布情况</div>
              <div class="map-wrapper">
                <iframe
                  src="static/map.html"
                  frameborder="0"
                  class="map"
                  scrolling="no"
                ></iframe>
              </div>
            </el-card>
            <el-card shadow="hover" class="line-part" id="header3">
              <h4>广东省近期新增人数趋势图</h4>
              <v-chart class="chart" :option="option" />
            </el-card>
            <el-card shadow="hover" class="timeline-map-part" id="header4">
              <h4>疫情时间线预测地图</h4>
              <div class="map-wrapper">
                <iframe
                  src="static/timeline_map.html"
                  frameborder="0"
                  class="map"
                  scrolling="no"
                ></iframe>
              </div>
            </el-card>
          </el-main>
          <el-footer class="footer">
            <div class="footer-content">积极防护，保护自己，戴口罩，勤洗手</div>
          </el-footer>
        </el-container>
        <el-aside class="aside">
          <el-affix class="affix" :offset="110">
            <el-menu class="menu" active-text-color="#303133">
              <el-menu-item index="1" @click="returnTop(1)">
                <span class="menu-item">疫情情况</span>
              </el-menu-item>
              <el-menu-item index="2" @click="returnTop(2)">
                <span class="menu-item">预测地图</span>
              </el-menu-item>
              <el-menu-item index="3" @click="returnTop(3)">
                <span class="menu-item">新增趋势</span>
              </el-menu-item>
              <el-menu-item index="4" @click="returnTop(4)">
                <span class="menu-item">预测时间线</span>
              </el-menu-item>
            </el-menu>
          </el-affix>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import { ref, defineComponent } from "vue";
import Increment from "../components/Increment.vue";

use([
  CanvasRenderer,
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
]);

export default defineComponent({
  name: "Home",
  components: {
    Increment,
  },
  data() {
    return {
      titles: [],
    };
  },
  methods: {
    returnTop: function (index) {
      document.querySelector("#header" + index).scrollIntoView(true);
    },
  },
  setup() {
    const option = ref({
      xAxis: {
        type: "category",
        data: [
          "11-20",
          "11-21",
          "11-22",
          "11-23",
          "11-24",
          "11-25",
          "11-26",
          "11-27",
          "11-28",
          "11-29",
          "11-30",
          "12-01",
          "12-02",
          "12-03",
          "12-04",
          "12-05",
          "12-06",
          "12-07",
        ],
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        show: true,
        trigger: "item",
        triggerOn: "mousemove|click",
        axisPointer: {
          type: "line",
        },
        showContent: true,
        alwaysShowContent: false,
        showDelay: 0,
        hideDelay: 100,
        textStyle: {
          fontSize: 16,
        },
        borderWidth: 0,
        padding: 5,
      },
      series: [
        {
          data: [
            32, 34, 38, 40, 46, 50, 55, 60, 55, 60, 56, 52, 46, 44, 40, 36, 32,
            26,
          ],
          type: "line",
          smooth: true,
        },
      ],
    });
    return { option };
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 1200px;

  .container {
    width: 100%;
    height: 100%;
    padding: 0 150px;

    .header {
      /* background-color: yellow; */
      /* background: rgb(198, 226, 255); */
      margin: 10px 20px 0px 20px;
      border-radius: 5px;
      font-size: 24px;
      font-weight: 700;
      line-height: 80px;
      height: 80px;
    }

    .body-container {
      .aside {
        /* background-color: blue; */
        width: 250px;
        .affix {
          .menu {
            /* background-color: rgb(217, 236, 255); */
            border: 2px solid #f2f6fc;
            border-radius: 5px;
            .menu-item {
              font-size: 16px;
              /* border-bottom: 2px solid rgb(160, 207, 255); */
            }
          }
        }
      }
      .main-container {
        .main {
          .grid-part {
            .subtitle {
              font-size: 14px;
              color: #999;
              margin: 5px 0;
            }

            .el-row {
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
            }
            .el-col {
              border-radius: 4px;
            }
            .bg-purple-dark {
              background: #99a9bf;
            }
            .bg-purple {
              background: #d3dce6;
            }
            .bg-purple-light {
              background: #e5e9f2;
            }
            .grid-content {
              border-radius: 4px;
              min-height: 36px;
            }
          }
          .map-part {
            margin-top: 10px;
            .subtitle {
              font-size: 14px;
              color: #999;
              margin: 5px 0;
            }
            .map-wrapper {
              position: relative;
              width: 100%;
              height: 700px;
              transform: scale(0.8);
              .map {
                position: absolute;
                top: -150px;
                left: -10px;
                width: 100%;
                height: 900px;
              }
            }
          }
          .line-part {
            margin-top: 10px;
            height: 650px;
            .chart {
              height: 600px;
              width: 950px;
            }
          }
          .timeline-map-part {
            margin-top: 10px;
            .map-wrapper {
              margin-top: 10px;
              position: relative;
              width: 100%;
              height: 580px;
              .map {
                position: absolute;
                left: 60px;
                top: 30px;
                transform: scale(1.1);
                width: 100%;
                height: 640px;
              }
            }
          }
        }
        .footer {
          /* background-color: green; */
          border: 2px solid #c0c4cc;
          border-radius: 5px;
          margin: 20px;
          height: 80px;
          text-align: center;
          .footer-content {
            line-height: 80px;
            height: 100%;
            font-size: 20px;
          }
        }
      }
    }
  }

  /* .map-wrapper {
    width: 400px;
    height: 300px;

    .map {
      transform: scale(0.7);
    }
  } */
}
</style>