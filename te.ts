/**
 * socket 连接返回的所有数据 对应 的实体类  环境 。。。
 *
 * @interface Surroundings
 */
 interface Surroundings {

    /**
     *
     * 宽度1 
     * @type {number}
     * @memberof Surroundings
     */
    width1: number,

    /**
     *宽度2 
     *
     * @type {number}
     * @memberof Surroundings
     */
    width2: number,

    /**
     * 设备监控右侧显示的百分比
     *
     * @type {number}
     * @memberof Surroundings
     */
    width3 : number ,
    /**
     *光照 ， 最大值 1000
     *
     * @type {string}
     * @memberof Surroundings
     */
    ray: string;

    /**
     *
     * 光照最大值
     * @type {number}
     * @memberof Surroundings
     */
    rayMax: number;
    /**
     *光照，百分比 ， 最大 222
     *
     * @type {number}
     * @memberof Surroundings
     */
    rayPercentage: number;
    /**
     *光照，百分比 ， 最大 119.845
     *
     * @type {number}
     * @memberof Surroundings
     */
    rayPercentage1: number;
    /**
     *
     *湿度 ， 最大值 100
     * @type {string}
     * @memberof Surroundings
     */
    hum: string;
    /**
     *湿度，百分比 ， 最大 222
     *
     * @type {number}
     * @memberof Surroundings
     */
    humPercentage: number;
    /**
    *湿度，中间比较小的  ， 百分比 ， 最大 222
    *
    * @type {number}
    * @memberof Surroundings
    */
    humPercentage1: number;

    /**
     *
     * 湿度最大值
     * @type {number}
     * @memberof Surroundings
     */
    humMax: number;
    /**
     *
     *温度， 最大值 40
     * @type {string}
     * @memberof Surroundings
     */
    spe: string;
    /**
     *
     *温度，百分比 ， 最大 222
     * @type {number}
     * @memberof Surroundings
     */
    spePercentage: number;
    /**
     *
     *温度，中间的第二个 。 百分比 ， 最大 222
     * @type {number}
     * @memberof Surroundings
     */
    spePercentage1: number;

    /**
     *
     * 温度最大值
     * @type {number}
     * @memberof Surroundings
     */
    speMax: number;
    /**
     *
     *电压 ， 最大值 260
     * @type {string}
     * @memberof Surroundings
     */
    voitage: string;
    /**
     *显示的电压 百分比
     *
     * @type {number}
     * @memberof Surroundings
     */
    voitagePercentage: number;

    /**
     *显示的电压 中间的第二个 百分比
     *
     * @type {number}
     * @memberof Surroundings
     */
    voitagePercentage1: number;

    /**
     *显示的电压 设备管理右侧显示的百分比
     *
     * @type {number}
     * @memberof Surroundings
     */
    voitagePercentage2: number;
    /**
     *
     * 电压最大值
     * @type {number}
     * @memberof Surroundings
     */
    voitageMax: number;
    /**
     *电流， 最大值 0.300
     *
     * @type {string}
     * @memberof Surroundings
     */
    electric: string;
    /**
     *
     *电流百分比 ， 最大 222
     * @type {number}
     * @memberof Surroundings
     */
    electricPercentage: number;
    /**
    *
    *电流百分比 ，中间的第二个 
    * @type {number}
    * @memberof Surroundings
    */
    electricPercentage1: number;
    /**
    *
    *电流百分比 ，设备右侧显示的
    * @type {number}
    * @memberof Surroundings
    */
   electricPercentage2: number;

    /**
     *
     * 电流最大值
     * @type {number}
     * @memberof Surroundings
     */
    electricMax: number;
    /**
     *
     *功率， 最大值 20
     * @type {string}
     * @memberof Surroundings
     */
    power: string;
    /**
     *
     *功率百分比 ， 最大 222
     * @type {number}
     * @memberof Surroundings
     */
    powerPercentage: number;
    /**
    *
    *功率百分比 中间的第二个 
    * @type {number}
    * @memberof Surroundings
    */
    powerPercentage1: number;
    /**
    *
    *功率百分比 设备管理右侧第三个
    * @type {number}
    * @memberof Surroundings
    */
   powerPercentage2: number;

    /**
     *
     * 功率最大值
     * @type {number}
     * @memberof Surroundings
     */
    powerMax: number;
    /**
     *
     * 运行开始时间
     * @type {string}
     * @memberof Surroundings
     */
    startTime: string;
    /**
     *
     *运行结束时间
     * @type {string}
     * @memberof Surroundings
     */
    stopTime: string;

    /**
     *
     *绿灯 "true" =  亮   "false" =  灭
     * @type {string}
     * @memberof Surroundings
     */
    green: string;
    /**
     *红灯 "true" =  亮   "false" =  灭
     *
     * @type {string}
     * @memberof Surroundings
     */
    red: string;
    /**
     *黄灯 "true" =  亮   "false" =  灭
     *
     * @type {string}
     * @memberof Surroundings
     */
    yellow: string;

    /**
     *
     * 转速 每分钟
     * @type {string}
     * @memberof Surroundings
     */
    speed: string;

    /**
     *最大转速
     *
     * @type {number}
     * @memberof Surroundings
     */
    speedMax: number;

    /**
     *
     * 最大转速第三个百分比的值
     * @type {number}
     * @memberof Surroundings
     */
    speedPercentage2 : number ;
    /**
     *
     * 设备状态 "true" =  开启   "false" =  关闭
     * @type {string}
     * @memberof Surroundings
     */
    deviceStatus: string;
    
    /**
     * 正/反 转动 "true" = 正转动   "false" = 反向转动
     *
     * @type {string}
     */
    foreward:string ;
    /**
     *转动模式  "true" = 自动   "false" = 手动
     *
     * @type {string}
     */
    manual:string ;
}