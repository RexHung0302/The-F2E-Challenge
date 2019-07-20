import LineChart from '../../components/chart/chart.vue'

export default {
    name: "index",
    components: {
        LineChart,
    },
    data() {
        return {
            isMenuShow: false,
            isTodoDropShow: true,
            isDoneDropShow: false,
            isMenuTodoShow: false,
            isMenuAnalyticsShow: false,
            isMenuRingtonesShow: false,
            newTodo: null,
            lists: [
                { 'id': 1, 'index': 1, 'content': 'The First Thing To Do Today.', 'isDone': false },
                { 'id': 2, 'index': 2, 'content': 'The Second Thing To Do Today.', 'isDone': false },
                { 'id': 3, 'index': 3, 'content': 'The Third Thing To Do Today.', 'isDone': true },
                { 'id': 4, 'index': 4, 'content': 'The Forth Thing To Do Today.', 'isDone': false },
                { 'id': 5, 'index': 5, 'content': 'The Fiveth Thing To Do Today.', 'isDone': true }
            ],
            className: {
                todo: 'index__leftMenuList-item',
                analytics: 'index__leftMenuList-item',
                ringtones: 'index__leftMenuList-item'
            },
            // 鈴聲選擇
            workSelected: '0',
            workOptions: [
                { text: 'NONE', value: '0' },
                { text: 'Default', value: '1' },
                { text: 'ALARM', value: '2' },
                { text: 'ALERT', value: '3' },
                { text: 'BEEP', value: '4' },
                { text: 'BELL', value: '5' },
                { text: 'BIRD', value: '6' },
                { text: 'BUGLE', value: '7' },
                { text: 'DIGITAL', value: '8' },
                { text: 'DROP', value: '9' },
                { text: 'HORN', value: '10' },
                { text: 'MUSIC', value: '11' },
                { text: 'RING', value: '12' },
                { text: 'WARNING', value: '13' },
                { text: 'WHISTLE', value: '14' }
            ],
            breakSelected: '0',
            breakOptions: [
                { text: 'NONE', value: '0' },
                { text: 'Default', value: '1' },
                { text: 'ALARM', value: '2' },
                { text: 'ALERT', value: '3' },
                { text: 'BEEP', value: '4' },
                { text: 'BELL', value: '5' },
                { text: 'BIRD', value: '6' },
                { text: 'BUGLE', value: '7' },
                { text: 'DIGITAL', value: '8' },
                { text: 'DROP', value: '9' },
                { text: 'HORN', value: '10' },
                { text: 'MUSIC', value: '11' },
                { text: 'RING', value: '12' },
                { text: 'WARNING', value: '13' },
                { text: 'WHISTLE', value: '14' }
            ],
            // Chart
            chartApi: {
                labels: ['19/07/20', '19/07/21', '19/07/22', '19/07/23', '19/07/24', '19/07/25', '19/07/26'],
                datasets: [{
                    label: 'Tomato Count',
                    backgroundColor: '#fff',
                    data: [16, 5, 10, 18, 20, 7, 24]
                }],
            },
        }
    },
    methods: {
        // 新增 todo
        addTodoHandler: function() {
            if (this.newTodo === null || this.newTodo === '') return;
            this.lists.push({ 'id': this.lists.length + 1, 'content': this.newTodo, 'isDone': false });
            this.newTodo = null;
        },
        // 打開 menu 選單
        dropMenuHandler: function(type) {

            this.isMenuShow = this.isMenuShow == false ? true : false

            this.selectMenuList(type);
        },
        // 選擇 list
        selectMenuList: function(type) {

            this.className = {
                todo: 'index__leftMenuList-item',
                analytics: 'index__leftMenuList-item',
                ringtones: 'index__leftMenuList-item',
            }

            this.isMenuTodoShow = false;
            this.isMenuAnalyticsShow = false;
            this.isMenuRingtonesShow = false;

            switch (type) {
                case 'todo':
                    this.className.todo += ' index__leftMenuList-item--active';
                    this.isMenuTodoShow = true;
                    break;
                case 'analytics':
                    this.className.analytics += ' index__leftMenuList-item--active';
                    this.isMenuAnalyticsShow = true;
                    break;
                case 'ringtones':
                    this.className.ringtones += ' index__leftMenuList-item--active';
                    this.isMenuRingtonesShow = true;
                    break;
            }
        },
        checkDone: function(obj) {
            return obj.isDone === true;
        },
    },
    computed: {
        // 尚未完成的
        nonDoneLists: function() {

            var vm = this;

            var mynonDoneLists = [];

            vm.lists.map(function(obj) {

                if (obj.isDone === false) {

                    mynonDoneLists.push(obj);
                }
            })

            return mynonDoneLists;
        },
        // 已完成的
        doneLists: function() {

            var vm = this;

            var myDoneLists = [];

            vm.lists.map(function(obj) {

                if (obj.isDone === true) {
                    myDoneLists.push(obj);
                }
            })

            return myDoneLists;
        }
    }
}