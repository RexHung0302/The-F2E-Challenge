export default {
    name: "index",
    data() {
        return {
            isMenuShow: false,
            isTodoDropShow: true,
            isDoneDropShow: true,
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
            doneLists: [
                { 'id': 3, 'index': 3, 'content': 'The Third Thing To Do Today.', 'isDone': true },
                { 'id': 5, 'index': 5, 'content': 'The Fiveth Thing To Do Today.', 'isDone': true }
            ],
            className: {
                todo: 'index__leftMenuList-item',
                analytics: 'index__leftMenuList-item',
                ringtones: 'index__leftMenuList-item'
            },
            // 鈴聲選擇
            selected: [], // Must be an array reference!
            options: [
                { text: 'Orange', value: 'orange' },
                { text: 'Apple', value: 'apple' },
                { text: 'Pineapple', value: 'pineapple' },
                { text: 'Grape', value: 'grape' }
            ]
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
        }
    },
    computed: {
        // 取出第二個開始的前三個
        threeLists: function() {

            var threeLists = [];

            for (var i = 1; i < 4; i++) {
                threeLists.push(this.lists[i])
            }

            return threeLists;
        }
    }
};