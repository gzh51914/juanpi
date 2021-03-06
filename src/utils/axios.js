
import axios from "axios";
//线上服务器地址(我关掉服务器后ip会变，所以要时常更改)           //VueCLI代理标识
axios.defaults.withCredentials = true;//让ajax携带cookie
let baseURL = process.env.NODE_ENV === "production" ? "http://127.0.0.1/" : "/juanpi";
const instance = axios.create({
    baseURL: baseURL,  //如果配置了Vue 的反向代理，直接写代理标识即可    123.207.86.251  127.0.0.1
    // timeout: 1000,//请求发生延迟时间
    // headers: {
    //     "X": "12312",  //配置发送时，附加在请求头上的信息
    // }
})

// /*  底部导航接口 */
let baseURL2 = process.env.NODE_ENV === "production" ? "http://127.0.0.1/" : "/inp";
const instance2 = axios.create({
    baseURL: baseURL2,
})
export { instance, instance2 };