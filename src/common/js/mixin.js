import {
    mapGetters
} from "vuex";

export const playlistMixin = {
    computed: {
        ...mapGetters(['playList'])
    },
    mounted() {
        this.handlePlayList(this.playList)
    },
    // keep-alive切换时触发
    activated() {
        this.handlePlayList(this.playList)
    },
    watch: {
        playList(newValue) {
            this.handlePlayList(newValue)
        }
    },
    methods: {
        handlePlayList() {
            throw new Error('component 必须要实现 handlePlayList()')
        }
    },
}