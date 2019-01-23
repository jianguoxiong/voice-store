import axios from 'axios';
export const baseUrl = '/api/thinkphp/public/index.php/api/index'
export const baseImgUrl = 'http://www.91qzb.com/'
//首页轮播
export const banner = (mstr) => { 
    return axios.post(`${baseUrl}/ad`, {
        mstr:mstr
    }).then(res => res.data); 
};
//首页购物车
export const cart = (mstr) => { 
    return axios.post(`${baseUrl}/cart`, {
        mstr:mstr
    }).then(res => res.data); 
};
//首页导航
export const indexNav = (mstr) => { 
    return axios.post(`${baseUrl}/classify`, {
        mstr:mstr
    }).then(res => res.data); 
};
//首页分类商品展示栏
export const classify = (mstr) => { 
    return axios.post(`${baseUrl}/module`, {
        mstr:mstr
    }).then(res => res.data); 
};
