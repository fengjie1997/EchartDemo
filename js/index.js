// 柱形图模块 使用立即执行函数目的为了方式变量污染
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置选项 和数据
  var option = {
    //   修改柱子颜色
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // grid决定我们的柱状图的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "9"
        },
        // 不显示x轴的线
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // y轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 柱子的宽度
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };

  // 3. 把配置选项给 实例对象
  myChart.setOption(option);
  // 让我们的图表适配屏幕宽度
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
})();

// 柱形图bar2
(function () {
  var myColor = ["#1089E7", "#F57474", "#662244", "#889933", "#998822", "#56D0E3"]
  var myChart = echarts.init(document.querySelector(".bar2 .chart"))
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴信息
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ['html', 'css', 'javascript', 'node', 'vue', 'webpack'],
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        }
      },
      {
        data: [700, 600, 500, 300, 200, 100],
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff"
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 39, 34, 49, 17, 63],
      //  修改第一组柱
        barCategoryGap: 20,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function (params) {
              return myColor[params.dataIndex]
            }
          }
        },
        label: {
          show: true,
          position: 'inside',
          // {c}自动解析数据data的数据
          formatter: "{c}%"
        },
        yAxisIndex: 0
      },
      {
        name: '框',
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100],
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        yAxisIndex: 1
      }
    ]
  };
  myChart.setOption(option);
  // 让我们的图表适配屏幕宽度
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
})();

// 折线图1
(function () {
  var yearData = [{
    year: '2020',
    data: [[22, 33, 44, 55, 66, 77, 88, 99, 110],[11, 45, 43, 22, 55, 54, 34, 78, 92]]
  }, {
    year: '2021',
    data: [[32, 12, 53, 59, 101, 203, 141, 123, 22],[47, 78, 98, 24, 51, 67, 89, 35, 63]]

  }]
  var myChart = echarts.init(document.querySelector(".line .chart"))
  var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      borderColor: '#012f4a'
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd',
        fontSize: '7'
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data: yearData[0].data[0],
        smooth: true
      },
      {
        name: '新增游客',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
  $('.line h2').on('click', 'a', function() {
    var obj = yearData[$(this).index()]
    console.log(obj, $(this).index())
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    myChart.setOption(option)
  })
})();

// 折线图2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));
  var option = {
      tooltip: {
          trigger: 'axis',
      },
      legend: {
        top: '0%',
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        textStyle: {
          color: 'rgba(255, 255, 255, .7)',
          fontSize: '12'
        }
      },
      grid: {
          left: '10',
        top: '30',
          right: '10%',
          bottom: '10%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                  color: 'rgba(255, 255, 255, .6)',
                  fontSize: '12'
                }
            },
            axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, .1)'
                }
            },
            splitLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, .1)'
                }
            }
          }
      ],
      yAxis: [
          {
              type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: '12'
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .2)'
              }
            }
          }
      ],
      series: [
          {
              name: '邮件营销',
              type: 'line',
              smooth: true,
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.9)"
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.9)"
                      }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
              },
              emphasis: {
                  focus: 'series'
              },
            lineStyle: {
              color: '#0184d5',
              Width: 2
            },
              data: [120, 132, 101, 134, 90, 230, 210],
            symbol: 'circle',
            symbolSize: 12,
            showSymbol: false,
          //  设置拐点颜色以及边框
            itemStyle: {
                color: '#0184d5',
              borderColor: 'rgba(221, 220, 107, .1)',
              borderWidth: 12
            }
          },
          {
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(1, 132, 213, 0.9)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(1, 132, 213, 0.9)"
                    }
                  ],
                  false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
              name: '联盟广告',
              type: 'line',
              emphasis: {
                  focus: 'series'
              },
            lineStyle: {
                color: 'red',
              width: 2
            },
              data: [220, 182, 191, 234, 290, 330, 310]
          }
      ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
      //   让我们图表调用resize方法
      myChart.resize();
    });
})();

// 饼图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"))

  var option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '0%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255, 255, 255, .5)',
        fontSize: '12'
      }
    },
    series: [
      {
        name: '佛门修行',
        type: 'pie',
        // 修改饼图的大小
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: true
        },
        labelLine: {
          show: true
        },
        data: [
          {value: 1, name: '金刚境'},
          {value: 4, name: '大金刚境'},
          {value: 6, name: '四凡罗汉'},
          {value: 10, name: '十地菩萨'},
          {value: 1, name: '等觉佛陀'}
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });

})();

// 南丁格尔饼形图
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'))
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: '0',
      itemHeight: 10,
      itemWidth: 10,
      itemStyle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, .5)'
      },
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    color: ['red', 'green', 'yellow', 'blue', 'pink', 'orange', 'coffee', 'brown'],

    series: [
      {
        name: '地区分布',
        type: 'pie',
        radius: [10, 70],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 图形的连接线
        labelLine: {
          length: 6,
          length2: 8
        },
        data: [
          {value: 30, name: 'rose 1'},
          {value: 28, name: 'rose 2'},
          {value: 26, name: 'rose 3'},
          {value: 24, name: 'rose 4'},
          {value: 22, name: 'rose 5'},
          {value: 20, name: 'rose 6'},
          {value: 18, name: 'rose 7'},
          {value: 16, name: 'rose 8'}
        ]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
})();
// map地图航线模块
(function() {
  // 1. 实例化
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2.指定配置
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "西安" }, { name: "北京", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "拉萨", value: 100 }]
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }]
  ];

  var YCData = [
    [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
    [{ name: "银川" }, { name: "广州", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }]
  ];

  var planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData]
  ].forEach(function(item, i) {
    series.push(
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: "red", //arrow箭头的颜色
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "lines",
          zlevel: 2,
          symbol: ["none", "arrow"],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + " Top3",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}"
            }
          },
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            },
            emphasis: {
              areaColor: "#2B91B7"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
              params.data.fromName +
              ">" +
              params.data.toName +
              "<br />" +
              params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#142957",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    //   让我们图表调用resize方法
    myChart.resize();
  });
})();

