/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
// let baseUrl = 'https://753p8745p2.zicp.fun'; 
// //let routerMode = 'hash';
// let baseImgPath;

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'https://753p8745p2.zicp.fun';
//     baseImgPath = '/img/';
// }else{
// 	baseUrl = '//elm.cangdu.org';
//     baseImgPath = '//elm.cangdu.org/img/';
// }

// let baseUrl = 'http://192.168.43.128:8082'; 
// //let routerMode = 'hash';
// let baseImgPath;

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = 'http://172.26.187.174:8082';
//     baseImgPath = '/img/';
// }else{
// 	baseUrl = '//elm.cangdu.org';
//     baseImgPath = '//elm.cangdu.org/img/';
// }
export {
	baseUrl,
	routerMode,
	baseImgPath
}