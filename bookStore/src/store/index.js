import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '../store/mutations'
import actions from '../store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
     bar:false,
     font_panel:false,
     font_icon:false,
     bg_color:1,
     bg_night:false,
     fz_size:18,
     curChapter:1,
     windowHeight:'',
     list_panel:false,
     curBookDetailId:1,
     curBookContentId:1,
  },
  mutations,
  actions

})
