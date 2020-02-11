import Vue from 'vue'
import Vuex from 'vuex'
var _ = require('lodash');

const Swal = require('sweetalert2');

const axios = require('axios');
const masksApiURL = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        masksApiData: [],
        storeList: [],                      // 藥局清單, 有做 filter 都會在這個 Data
        center: [24.1447929, 120.6361618],  // 目前中心位置
    },
    mutations: {
        // 一開始取的口罩的API
        setMasksApiData(state, data = []) {
            let newArray = [];
            _.forEach(data.features, function(item, index){
                let newData = {
                    type: item.type,
                    properties: item.properties,
                    geometry: {
                        type: item.geometry.type,
                        coordinates: item.geometry.coordinates.reverse()
                    }
                }
                newArray.push(newData);
            });
            state.masksApiData = newArray;
            state.storeList = newArray;
            // console.log(state.masksApiData, '打完API了');
            Swal.close();
        },
        // 輸入關鍵字
        setStoreList(state, input = {}) {
            let keywordText = input.keywordText;
            let maskCondition = input.maskCondition;
            // 先宣告一個新陣列
            let newStoreList = [];
            // 0 沒關鍵字沒口罩條件, 1有關鍵字沒口罩條件, 2沒關鍵字有口罩條件, 3有關鍵字有口罩條件
            let situation = '0';
            // 如果沒有輸入且沒勾選口罩條件就回覆原本的
            if((keywordText === '' || keywordText === null || keywordText === undefined) && maskCondition.length === 0) {
                situation = '0';
            } else if ((keywordText !== '' || keywordText !== null || keywordText !== undefined) && maskCondition.length === 0) {
                situation = '1';
            } else if ((keywordText === '' || keywordText === null || keywordText === undefined) && maskCondition.length !== 0) {
                situation = '2';
            } else {
                situation = '3';
            }

            // 是否有勾選口罩條件, 所有口罩, 成人口罩, 兒童口罩
            let targetAllMask = false;
            let targetAdultMask = false;
            let targetChildMask = false;
            // 口罩目標, 0所有口罩, 1成人口罩, 2兒童口罩, 3都沒勾
            let targetSituation = '0';

            // 判斷情況
            switch(situation) {
                // 沒關鍵字沒口罩條件
                case '0':
                    newStoreList = _.cloneDeep(state.masksApiData);
                    break;
                // 有關鍵字沒口罩條件
                case '1':
                    _.findIndex(state.masksApiData, function(item){
                        // 判斷關鍵字
                        if(item.properties.name.match(keywordText) || item.properties.address.match(keywordText) || item.properties.county.match(keywordText) || item.properties.town.match(keywordText) || item.properties.cunli.match(keywordText)) {
                            newStoreList.push(item);
                        }
                    })
                    break;
                // 沒關鍵字有口罩條件
                case '2':
                    _.findIndex(maskCondition, function(key){
                        if(key == '1') targetAllMask = true;
                        if(key == '2') targetAdultMask = true;
                        if(key == '3') targetChildMask = true;
                    });

                    if(targetAllMask === true || (targetAdultMask === true && targetChildMask === true)) {
                        targetSituation = '0';
                    } else if(targetAllMask === false && targetAdultMask === true && targetChildMask === false) {
                        targetSituation = '1';
                    } else if (targetAllMask === false && targetAdultMask === false && targetChildMask === true) {
                        targetSituation = '2';
                    } else {
                        targetSituation = '3';
                    }

                    _.findIndex(state.masksApiData, function(item){
                        // 判斷口罩條件
                        if(targetSituation === '0') {
                            if(item.properties.mask_adult > 0 || item.properties.mask_child > 0 ){
                                newStoreList.push(item);
                            }
                        } else if(targetSituation === '1') {
                            if(item.properties.mask_adult > 0) {
                                newStoreList.push(item);
                            }
                        } else if(targetSituation === '2') {
                            if(item.properties.mask_child > 0) {
                                newStoreList.push(item);
                            }
                        } else {
                            newStoreList.push(item);
                        }
                    })
                    break;
                // 有關鍵字有口罩條件的
                case '3':
                    _.findIndex(maskCondition, function(key){
                        if(key == '1') targetAllMask = true;
                        if(key == '2') targetAdultMask = true;
                        if(key == '3') targetChildMask = true;
                    });

                    if(targetAllMask === true || (targetAdultMask === true && targetChildMask === true)) {
                        targetSituation = '0';
                    } else if(targetAllMask === false && targetAdultMask === true && targetChildMask === false) {
                        targetSituation = '1';
                    } else if (targetAllMask === false && targetAdultMask === false && targetChildMask === true) {
                        targetSituation = '2';
                    } else {
                        targetSituation = '3';
                    }

                    _.findIndex(state.masksApiData, function(item){
                        // 判斷口罩條件
                        if(targetSituation === '0') {
                            if((item.properties.name.match(keywordText) || item.properties.address.match(keywordText) || item.properties.county.match(keywordText) || item.properties.town.match(keywordText) || item.properties.cunli.match(keywordText)) && (item.properties.mask_adult > 0 || item.properties.mask_child > 0)){
                                newStoreList.push(item);
                            }
                        } else if(targetSituation === '1') {
                            if((item.properties.name.match(keywordText) || item.properties.address.match(keywordText) || item.properties.county.match(keywordText) || item.properties.town.match(keywordText) || item.properties.cunli.match(keywordText)) && item.properties.mask_adult > 0) {
                                newStoreList.push(item);
                            }
                        } else if(targetSituation === '2') {
                            if((item.properties.name.match(keywordText) || item.properties.address.match(keywordText) || item.properties.county.match(keywordText) || item.properties.town.match(keywordText) || item.properties.cunli.match(keywordText)) && item.properties.mask_child > 0) {
                                newStoreList.push(item);
                            }
                        } else {
                            newStoreList.push(item);
                        }
                    })
                    break;
                default:
                    newStoreList = _.cloneDeep(state.masksApiData);
                    break;
            }

            state.storeList = newStoreList;
            // 跳轉至搜尋的第一個商店位置
            state.center = [newStoreList[0].geometry.coordinates[0], newStoreList[0].geometry.coordinates[1]]
        },
        // 更改中心位置
        setCenterLoction(state, input = [24.1447929, 120.6361618]) {
            state.center = [input[0], input[1]];
        },
    },
    actions: {
        // 取得口罩 API
        async getMasksApi({commit}){
            axios.get(masksApiURL)
                .then(function (response) {
                    // handle success
                    commit('setMasksApiData', response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        // 輸入關鍵字搜尋
        searchStore({commit}, input){
            commit('setStoreList', input);
        },
        // 設定目前位置
        setCenterLoction({commit}, input){
            commit('setCenterLoction', input);
        },
    }
})