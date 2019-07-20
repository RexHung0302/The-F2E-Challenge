<template lang="pug">
  .index.row#indexPage
    // 左邊區塊
    transition(name="slide")
      .index__leftPart.col-8(v-if="!isMenuShow")
        .index__leftPartBox
          // ADD Input
          .index__leftPartMissionInsideBox.text-left
            input.index__leftPartBox-input.index__leftPartBox-input--active(v-model.trim="newTodo" placeholder="ADD A NEW MISSION" @keyup.enter="addTodoHandler")
            font-awesome-icon.index__leftPartBox-plus.index__leftPartBox-plus--active(:icon="['fa', 'plus']" @click="addTodoHandler")
          .index__leftPartTitleBox(v-if="nonDoneLists.length")
            .index__leftPartTitleBox-leftPart
              .index__leftPartTitleBox-leftPart-circleIcon(@click="nonDoneLists[0].isDone = nonDoneLists[0].isDone == false ? true : false")
            .index__leftPartTitleBox-rightPart
              .index__leftPartTitleBox-rightPart-title(v-if="nonDoneLists")
                span {{ nonDoneLists[0].content }}
              .index__leftPartTitleBox-rightPart-tomatoBox
                img.index__leftPartTitleBox-rightPart-tomatoImg(src="../../assets/img/tomato.png")
                img.index__leftPartTitleBox-rightPart-tomatoImg(src="../../assets/img/tomato.png")
                img.index__leftPartTitleBox-rightPart-tomatoImg(src="../../assets/img/tomato.png")
          .index__leftPartTitleBox(v-if="!nonDoneLists.length")
            span.index__leftPartTitleBox-remindText.font-weight-bold You Need Add A Task.     
          .index__leftPartTimeBox(v-if="nonDoneLists.length")
            .index__leftPartTime.index__leftPartTime--active 25:00
          .index__leftPartTodoListBox
            .index__leftPartTodoList(v-for="todos in nonDoneLists.slice(1,3)" :key="todos.id")
              .circleIcon.d-inline-block(v-if="!todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
              .circleIcon.circleIcon-done.d-inline-block(v-if="todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
              transition(name="fade")
                span.index__leftPartTodoSpan(v-if="!todos.isDone") {{ todos.content }}
                span.index__leftPartTodoSpan.index__leftPartTodoSpan--done(v-else) {{ todos.content }}
              font-awesome-icon.index__leftPartPlayIcon(:icon="['fa', 'play-circle']")
            .index__leftPartTodoMore(v-if="nonDoneLists.length > 3")
              span.index__leftPartTodoMore-span(v-if="!isMenuShow" @click="dropMenuHandler('todo')") More
        .index__TimeBox.position-absolute
            .timeBox.position-relative
              .timeBox__insideBox.position-relative
                .timeBox__buttonBox.position-relative
                  .timeBox__buttonBox-button.position-relative
                    .timeBox__buttonBox-endButton.position-absolute
    // Menu 區塊
    transition(name="fade")
    .index__leftMenuPart.position-relative.col-9(v-if="isMenuShow")
      .row.no-gutters.pl-4
        .index__leftMenuPartBox.col-6
          ul.index__leftMenuList.text-left
            li(:class="className.todo" @click="selectMenuList('todo')")
              font-awesome-icon.pr-3(:icon="['fas', 'list-ul']")
              span TO-DO LIST
            li(:class="className.analytics" @click="selectMenuList('analytics')")
              font-awesome-icon.pr-3(:icon="['fas', 'chart-bar']")
              span ANALYTICS
            li(:class="className.ringtones" @click="selectMenuList('ringtones')")
              font-awesome-icon.pr-3(:icon="['fas', 'music']")
              span RINGTONES
        // TO-DO List
        transition(name="menuItemFade")
          .index__leftContentPartBox.position-relative.col-6(v-if="isMenuTodoShow")
            // ADD Input
            .index__leftContentPartMissionInsideBox.text-left.w-100
              input.index__leftContentPartBox-input.index__leftContentPartBox-input--active(v-model.trim="newTodo" placeholder="ADD A NEW MISSION" @keyup.enter="addTodoHandler")
              font-awesome-icon.index__leftContentPartBox-plus.index__leftContentPartBox-plus--active(:icon="['fa', 'plus']" @click="addTodoHandler")
              .index__leftContentPartBox-todoListsBox.position-relative
                .position-relative
                  b-button.index__leftContentPartBox-todoListsItem.text-left.font-weight-bold(block v-b-toggle="'todoLists'" @click="isTodoDropShow = isTodoDropShow == false ? true : false") TO-DO
                  // 下拉時出現
                  transition(name="todoDropTurnDown")
                    font-awesome-icon.index__leftContentPartBox-todoListsIcon.position-absolute(:icon="['fas', 'caret-down']" v-if="isTodoDropShow")
                  // 隱藏選單時出現
                  transition(name="todoDropTurnUp")
                    font-awesome-icon.index__leftContentPartBox-todoListsIcon.position-absolute(:icon="['fas', 'caret-up']" v-if="!isTodoDropShow")
                  // TO-DO  
                  b-collapse.index__leftContentPartBox-todoListsItemContent.position-relative(id="todoLists" visible)
                    .index__leftContentPartBox-todoLists.position-relative
                      .index__leftContentPartTodoList(v-for="todos in nonDoneLists" :key="todos.id")
                        .index__leftContentPartCircleIcon.d-inline-block(v-if="!todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
                        .index__leftContentPartCircleIcon.index__leftContentPartCircleIcon-done.d-inline-block(v-if="todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
                        transition(name="fade")
                          span.index__leftContentPartTodoSpan(v-if="!todos.isDone") {{ todos.content }}
                          span.index__leftContentPartTodoSpan.index__leftContentPartTodoSpan--done(v-else) {{ todos.content }}
                        font-awesome-icon.index__leftContentPartPlayIcon(:icon="['fa', 'play-circle']")
                // Done TO-DO 
                .position-relative 
                  b-button.index__leftContentPartBox-todoListsItem.text-left.font-weight-bold.mt-5(block v-b-toggle="'doneTodoLists'" @click="isDoneDropShow = isDoneDropShow == false ? true : false") DONE
                  // 下拉時出現
                  transition(name="doneTodoDropTurnDown")
                    font-awesome-icon.index__leftContentPartBox-todoListsIcon.position-absolute(:icon="['fas', 'caret-down']" v-if="!isDoneDropShow")
                  // 隱藏選單時出現
                  transition(name="doneTodoDropTurnUp")
                    font-awesome-icon.index__leftContentPartBox-todoListsIcon.position-absolute(:icon="['fas', 'caret-up']" v-if="isDoneDropShow")
                  b-collapse.index__leftContentPartBox-todoListsItemContent.position-relative(id="doneTodoLists")
                    .index__leftContentPartBox-todoLists.position-relative
                      .index__leftContentPartTodoList(v-for="(todos,index) in doneLists" :key="index")
                        .index__leftContentPartCircleIcon.d-inline-block(v-if="!todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
                        .index__leftContentPartCircleIcon.index__leftContentPartCircleIcon-done.d-inline-block(v-if="todos.isDone" @click="todos.isDone = todos.isDone == false ? true : false")
                        transition(name="fade")
                          span.index__leftContentPartTodoSpan(v-if="!todos.isDone") {{ todos.content }}
                          span.index__leftContentPartTodoSpan.index__leftContentPartTodoSpan--done(v-else) {{ todos.content }}
                        font-awesome-icon.index__leftContentPartPlayIcon(:icon="['fa', 'play-circle']") 
        // ANALYTICS
        transition(name="menuItemFade")
          .index__leftContentPartBox.position-relative.col-6(v-if="isMenuAnalyticsShow")
            .index__analyticsBox.position-relative.w-100
              .index__itemTitle.font-weight-bold.text-left FOCUS TIME
              .row.no-gutters.text-left.pt-3.pb-5
                .col-6
                  h5.mb-0 TODAY
                  span.index__itemTomatoNum.font-weight-bold 20
                  span.index__itemTomatoText.font-weight-bold.pl-2 / TOMATO
                .col-6
                  h5.mb-0 WEEK
                  span.index__itemTomatoNum.font-weight-bold 108
                  span.index__itemTomatoText.font-weight-bold.pl-2 / TOMATO
              .index__itemTitle.font-weight-bold.text-left CHART
        // RINGTONES
        transition(name="menuItemFade")
          .index__leftContentPartBox.position-relative.col-6(v-if="isMenuRingtonesShow")
            .index__ringtonesBox.position-relative.w-100
              .index__itemTitle.font-weight-bold.text-left.pb-3 WORK
              b-form-radio-group.pt-4.pb-5(
                v-model="selected"
                :options="options" 
                plain
                name="plain-inline")
              .index__itemTitle.font-weight-bold.text-left.pb-3 BREAK
              b-form-radio-group.pt-4(
                v-model="selected"
                :options="options"
                plain
                name="plain-inline2")      
    // 右邊區塊          
    transition(name="fade")
      .index__rightPart.col
        div.row.w-100.h-100
          .index__rightPartIconBox
            .index__rightPartIconBox-icon(v-if="!isMenuShow" @click="dropMenuHandler('todo')")
              font-awesome-icon(:icon="['fas', 'list-ul']")
              span.mi.mi-face
            .index__rightPartIconBox-icon(v-if="!isMenuShow" @click="dropMenuHandler('analytics')")  
              font-awesome-icon(:icon="['fas', 'chart-bar']")
            .index__rightPartIconBox-icon(v-if="!isMenuShow" @click="dropMenuHandler('ringtones')")  
              font-awesome-icon(:icon="['fas', 'music']")
            .index__rightPartIconBox-icon(v-if="isMenuShow" @click="isMenuShow = isMenuShow == false ? true : false")
              font-awesome-icon(:icon="['fas', 'times']" size="lg")
          .index__rightPartTextBox.font-weight-bold
            span.index__rightPartTextBox-span.w-100.h-100 POMODORO 
      
</template>

<script src="./index.js"></script>
