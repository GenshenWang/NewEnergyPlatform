/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    char1();
    char2();
    char3();
    char4();

    char5();
    char6();
    char7();
    char8();



//统计分析图
function char1() {

    var myChart = echarts.init($("#char1")[0]);

    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            textStyle : {
                color : '#ffffff',

            },
            data:['直流','交流','其他']
        },

        calculable : false,
        series : [
            {
                name:'车类型',
                type:'pie',
                radius : ['40%', '70%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            show : true
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '20',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:90, name:'直流'},
                    {value:20, name:'交流'},
                    {value:10, name:'其他'}

                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}

function char2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('char2'));  
    option = {
        // backgroundColor: "#404A59",
        color: ["#036BC8", "#5EBEFC", "#2EF7F3"],
    
        title: [{
            text: '',
            left: '1%',
            top: '6%',
            textStyle: {
                color: '#fff'
            }
        }, {
            text: '',
            left: '83%',
            top: '6%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            x: 300,
            top: '7%',
            textStyle: {
                color: '#ffd285',
            },
            data: ['2016年', '2017年', '2018年']
        },
        grid: {
            left: '1%',
            right: '28%',
            top: '16%',
            bottom: '6%',
            containLabel: true
        },
        toolbox: {
            "show": false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
        },
        yAxis: {
            "axisLine": {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [{
            name: '',
            smooth: true,
            type: 'line',
            symbolSize: 9,
              symbol: 'circle',
            data: [90, 50, 39, 50, 120, 82, 80, 89, 92, 80, 102, 77]
        }, {
            name: '',
            smooth: true,
            type: 'line',
            symbolSize: 9,
              symbol: 'circle',
            data: [70, 50, 50, 87, 90, 80, 70, 77, 86, 94, 96, 99]
        }, {
            name: '',
            smooth: true,
            type: 'line',
            symbolSize: 9,
              symbol: 'circle',
            data: [100, 112, 80, 132, 60, 70, 90, 131, 121, 102, 95, 105 ]
        }, 
        {
            type: 'pie',
            center: ['83%', '33%'],
            radius: ['30%', '35%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 335,
                name: '销售分析',
                itemStyle: {
                    normal: {
                        color: '#FF7E45'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#ffd285',
                            fontSize: 14
    
                        }
                    }
                }
            }, {
                value: 180,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#ffd285',
                        },
                        formatter: '\n销售渠道'
                    }
                }
            }]
        },
    
    
        {
            type: 'pie',
            center: ['83%', '72%'],
            radius: ['30%', '35%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 435,
                name: '销售分析',
                itemStyle: {
                    normal: {
                        color: '#4834CB'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
    
                        }
                    }
                }
            }, {
                value: 100,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#fff'
    
    
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff',
                        },
                        formatter: '\n销售方向'
                    }
                }
            }]
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


function char3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('char3'));
    var data = [70, 55, 30, 25, 15];
    var titlename = ['滨江', '余杭', '拱墅', '闲林', '上城'];
    var valdata = [70, 40, 66, 79, 50];
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    option = {
        title: {
            text: '',
            x: 'center',
            textStyle: {
                color: '#FFF'
            },
            left: '6%',
            top: '10%'
        },
        //图标位置
        grid: {
            top: '20%',
            left: '32%'
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: (value, index) => {
                    return [

                        `{lg|${index+1}}  ` + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 10,
                        height: 15
                    },
                }
            },


        }, {
            show: false,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        }, ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // window.addEventListener("resize", function () {
    //     myChart.resize();
    // });
} 


function char4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('char4'));
    var data = [70, 55, 30, 25, 15];
    var titlename = ['国网', '特来电', '星星充电', '万马', '车电网'];
    var valdata = [70, 40, 66, 79, 50];
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    option = {
        title: {
            text: '',
            x: 'center',
            textStyle: {
                color: '#FFF'
            },
            left: '6%',
            top: '10%'
        },
        //图标位置
        grid: {
            top: '20%',
            left: '32%'
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: (value, index) => {
                    return [

                        `{lg|${index+1}}  ` + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 10,
                        height: 15
                    },
                }
            },


        }, {
            show: false,
            inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        }, ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // window.addEventListener("resize", function () {
    //     myChart.resize();
    // });
} 


function char5() {
    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({

      color:["#87cefa","#ff7f50",],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
           data : ['厦门第一医院','厦门中山医院',],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}条"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'厦门第一医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76,88,99,101,102]
          },
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[25, 10, 30, 55, 32.1, 35, 80, 65, 76,90,102,110,120]
          }
      ]
    });
}

function char6() {
    var lineChart = echarts.init(document.getElementById('lineChart2'));
    lineChart.setOption({

      color:["#87cefa","#ff7f50",],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
           data : ['厦门第一医院','厦门中山医院',],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}条"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'厦门第一医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76,88,99,101,102]
          },
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[25, 10, 30, 55, 32.1, 35, 80, 65, 76,90,102,110,120]
          }
      ]
    });
}

function char7() {
    var lineChart = echarts.init(document.getElementById('lineChart3'));
    lineChart.setOption({

      color:["#87cefa","#ff7f50",],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
           data : ['厦门第一医院','厦门中山医院',],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}条"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'厦门第一医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76,88,99,101,102]
          },
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[25, 10, 30, 55, 32.1, 35, 80, 65, 76,90,102,110,120]
          }
      ]
    });
}

function char8() {
    var lineChart = echarts.init(document.getElementById('lineChart4'));
    lineChart.setOption({

      color:["#87cefa","#ff7f50",],
      legend: {
          y : '260',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },
           data : ['厦门第一医院','厦门中山医院',],
      },
      calculable : false,
      tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}条"
      },
      yAxis: [
            {
                type: 'value',
                axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },

                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : ['00:00','2:00','4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00'],
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
            }
        ],
        grid:{
                left: '5%',
                right: '5%',
                bottom: '20%',
                containLabel: true
        },
        series : [
          {
              name:'厦门第一医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76,88,99,101,102]
          },
          {
              name:'厦门中山医院',
              type:'line',
              smooth:true,
              itemStyle: {
                  normal: {
                      lineStyle: {
                          shadowColor : 'rgba(0,0,0,0.4)'
                      }
                  }
              },
              data:[25, 10, 30, 55, 32.1, 35, 80, 65, 76,90,102,110,120]
          }
      ]
    });
}



})
