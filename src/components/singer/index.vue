<template>
  <div class="singer">
    <ListView :data="singers"
              v-if="singers.length">
    </ListView>
  </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import ListView from 'base/listview/index'
export default {
  data () {
    return {
      singers: []
    }
  },
  created () {
    // 获取歌手列表
    this._getSingerList()
  },
  methods: {
    _getSingerList () {
      const hot = -100
      getSingerList(hot).then(res => {
        this.singers = res.singerList.data.singerlist
      })
    }
  },
  components: {
    ListView,
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer
  position fixed
  top 88px
  bottom 0
  width 100%
</style>