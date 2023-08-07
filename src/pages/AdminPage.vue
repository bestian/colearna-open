<template lang="pug">
q-page.admin-page
  preview-class(:newClassImg="newClassImg", :myImg="myImg", :newImg="newImg", :newTitle="newTitle", :myPhotoURL="me && me.photoURL", :newZh="newZh", :newEn="newEn", :newT_Zh="newT_Zh", :newT_En="newT_En", :newLocation="newLocation", :newAddr="newAddr", :myName="myName", :newTags="newTags", @endPreview="previewC = false")
  .row.long-padded(v-if="!uid || !me || !isAdmin")
    h2.text-dark-green 您沒有管理員權限，請先登入
  .row.long-padded(v-else)
    h2.text-dark-green.fluid 管理員系統
    .col-2.col-sm-4.col-md-3.col-xs-12.flex-col.flex-start
      q-select.thin-only(v-model="action", :options="options_group1.concat(options_group2).concat(options_group3)", label="請選擇一項功能")
      q-list.rounded-borders.text-primary(bordered)
        q-item.admin-action.flex.flex-start-center(clickable, v-ripple, :class="{ active: action == o }", :active="action == o", @click="action = o", v-for="(o, j) in options_group1", :key="j")
          q-icon(name="person")

          | {{ o }}

          q-badge.margin(color="red", v-show="o == '新老師申請' && nn(requests).length > 0") {{ nn(requests).length }}
        q-separator(spaced)
        q-item.admin-action.flex.flex-start-center(clickable, v-ripple, :class="{ active: action == o }", :active="action == o", @click="action = o", v-for="(o, j) in options_group2", :key="j")
          q-icon(name="settings")

          | {{ o }}

          q-badge.margin(color="red", v-show="o == '課前通知' && countClassNotifications()") {{ countClassNotifications() }}
        q-separator(spaced)
        q-item.admin-action.flex.flex-start-center(clickable, v-ripple, :class="{ active: action == o }", :active="action == o", @click="action = o", v-for="(o, j) in options_group3", :key="j")
          q-icon(name="send")

          | {{ o }}

          q-badge.margin(color="red", v-show="o == '課前通知' && countClassNotifications()") {{ countClassNotifications() }}
    .col-10.col-sm-8.col-md-9.col-xs-12
      h4.text-dark-green.text-center.fluid(v-show="action") {{ action }}
      admin-list(v-if="action == '管理員名單'", :users="users", :showTeacher="showTeacher", showTeacherUser="showTeacherUser")
      teacher-list(v-if="action == '老師名單'", :users="users", :teachers="teachers", :requests="requests", :showTeacherUser="showTeacherUser", :showTeacher="showTeacher")
      new-teacher(v-if="action == '新老師申請'", :requests="requests", :users="users")
      send-email(:users="users", v-if="action == '發送Email'", @mailto="mailto")
      user-list(v-if="action == '用戶名單'", :users="users", @mailto="mailto")
      add-class(v-if="action == '手動新增課程'", :users="users", :classes="classes", :newImg="newImg", :newClassImg="newClassImg", :myImg="myImg")
      manage-class(v-if="action == '課程管理'", :users="users", :classes="classes", :newImg="newImg", :newClassImg="newClassImg", :myImg="myImg")


      q-card.editC-card(v-if="action == '課程管理' && editC !== ''")
        .col.flex-col.flex-center
          q-form.fluid
            .row.flex.flex-center
              .col.flex.flex-col
                q-img.small-img.margin(v-show="newImg", :src="newImg")
                .row.flex.flex-center
                  q-img.avatar.margin(v-show="newTeacherImg", :src="newTeacherImg")
            q-input.margin(outlined, rounded, v-model="newTitle", placeholder="課程名稱", hint="課程名稱")
            q-input.margin(outlined, rounded, v-model="newImg", placeholder="封面圖片網址", hint="封面圖片網址")
            q-input.margin(outlined, rounded, v-model="newTeacher", placeholder="開課老師", hint="開課老師")
            q-input.margin(outlined, rounded, v-model="newTid", placeholder="開課老師Id", hint="開課老師Id")
            q-input.margin(outlined, rounded, v-model="newTeacherImg", placeholder="老師大頭貼網址", hint="老師大頭貼網址")
            q-input.margin(type="textarea", outlined, rounded, v-model="newZh", placeholder="中文課程說明", hint="中文課程說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newEn", placeholder="英文課程說明", hint="英文課程說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_Zh", placeholder="中文教師簡介", hint="中文教師簡介")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_En", placeholder="英文教師簡介", hint="英文教師簡介")
            q-input.margin(outlined, rounded, v-model="newTags", placeholder="標籤", hint="標籤")
            q-input.margin(outlined, rounded, v-model="newLocation", placeholder="課程地點", hint="課程地點")
            q-input.margin(type="number", outlined, rounded, v-model="newMin", placeholder="最低人數", hint="最低人數", step="1", min="1")
            q-input.margin(type="number", outlined, rounded, v-model="newMax", placeholder="最高人數", hint="最高人數", step="1", min="1")
            q-input.margin(type="text", outlined, rounded, v-model="newOldPrice", placeholder="原價", hint="原價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newNewPrice", placeholder="售價", hint="售價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newPrice", placeholder="顯示價格", hint="顯示價格", step="10", min="0")
          .row.flex.flex-center
            q-btn.margin(color="primary", rounded, @click="updateC(editC)")
              q-icon(name="update")
              | 更新
            q-btn.margin(color="blue", rounded, @click="copyC()")
              q-icon(name="content_copy")
              | 複製
            q-btn.margin(color="red", rounded, @click="deleteC(editC)")
              q-icon(name="delete")
              | 刪除
      class-request(v-if="action == '新課程申請'", :classes="classes", @previewNewClass="previewNewClass", @approveC="approveC")
      new-colearnaevent
      q-card.editC-card(v-show="action == '新增活動'")
        .col.flex-col.flex-center
          q-form.fluid
            .row.flex.flex-center
              .col.flex.flex-col
                q-img.small-img.margin(v-show="newClassImg", :src="newClassImg")
                .row.flex.flex-center
                  q-img.avatar.margin(v-show="myImg", :src="myImg")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動Id
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newCid", placeholder="活動Id")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 老師
              q-select(filled, v-model="newTeacherid", :options="getOptions()", option-value="id", option-label="name", option-disable="inactive", emit-value, map-options, style="min-width: 250px; max-width: 300px")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動名稱
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newTitle", placeholder="活動名稱")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動封面圖網址
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newClassImg", placeholder="課程封面圖網址")
            q-form
              label.text-gray.margin.inline-block 中文活動說明
                span.red.star *
              q-input.margin(type="textarea", outlined, rounded, v-model="newZh", placeholder="中文活動說明")
            q-form
              label.text-gray.margin.inline-block 英文活動說明
              q-input.margin(type="textarea", outlined, rounded, v-model="newEn", placeholder="英文活動說明")
            q-form
              label.text-gray.margin.inline-block 中文教師簡介
                span.red.star *
              q-input.margin(type="textarea", outlined, rounded, v-model="newT_Zh", placeholder="中文教師簡介")
            q-form
              label.text-gray.margin.inline-block 英文教師簡介
              q-input.margin(type="textarea", outlined, rounded, v-model="newT_En", placeholder="英文教師簡介")
            q-form
              label.text-gray.margin 標籤
              q-input.margin(outlined, rounded, v-model="newTags", placeholder="標籤")
            q-form
              label.text-gray.margin 活動地點
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newLocation", placeholder="活動地點")
            q-form
              label.text-gray.margin.inline-block 活動地址
              q-input.margin(outlined, rounded, v-model="newAddr", placeholder="活動地址")
            q-form
              label.text-gray.margin.inline-block 活動連結(僅線上活動需填)
              q-input.margin(outlined, rounded, v-model="newHref", placeholder="活動連結(僅線上活動需填)")
            q-form
              .flex-col.fluid.flex-start
                label.text-gray.margin 活動日期/時間
                label.text-gray.margin(v-for="(c, k) in newClasses", :key="k") {{ c.d }}

                  | {{ c.t }}

                  q-btn.margin(rounded, @click="removeDateTime(k)", color="red", icon="event_available") 移除
                label.text-gray.margin {{ newDate }}

                  | {{ newTime }}
                  | ~
                  | {{ newEndTime }}

                  q-btn.margin(rounded, @click="addDateTime()", color="orange", icon="event_available") 加入
              .q-gutter-md.row.items-start
                q-date(v-model="newDate", color="purple")
                q-time(v-model="newTime", color="green")
                q-time(v-model="newEndTime", color="blue")
            q-form
              label.text-gray.margin.inline-block 最低人數
              q-input.margin(type="number", outlined, rounded, v-model="newMin", placeholder="最低人數", step="1", min="1")
            q-form
              label.text-gray.margin.inline-block 最高人數
              q-input.margin(type="number", outlined, rounded, v-model="newMax", placeholder="最高人數", step="1", min="1")
            q-form
              label.text-gray.margin.inline-block 原價
              q-input.margin(type="text", outlined, rounded, v-model="newOldPrice", placeholder="原價", hint="原價")
            q-form
              label.text-gray.margin.inline-block 原價
              q-input.margin(type="text", outlined, rounded, v-model="newNewPrice", placeholder="售價", hint="售價")
            q-form
              label.text-gray.margin.inline-block 顯示價格
                span.red.star *
              q-input.margin(type="text", outlined, rounded, v-model="newPrice", placeholder="顯示價格")
          .row.flex.flex-center
            q-btn.margin(color="blue", rounded, @click="previewClass()")
              q-icon(name="preview")
              | 預覽
            q-btn.margin(color="primary", rounded, @click="newE(newCid)")
              q-icon(name="upload")
              | 送出
      q-card.editC-card(v-if="action == '活動管理' && editE !== ''")
        .col.flex-col.flex-center
          q-form.fluid
            .row.flex.flex-center
              .col.flex.flex-col
                q-img.small-img.margin(v-show="newImg", :src="newImg")
                .row.flex.flex-center
                  q-img.avatar.margin(v-show="newTeacherImg", :src="newTeacherImg")
            q-input.margin(outlined, rounded, v-model="newTitle", placeholder="活動名稱", hint="活動名稱")
            q-input.margin(outlined, rounded, v-model="newImg", placeholder="封面圖片網址", hint="封面圖片網址")
            q-input.margin(outlined, rounded, v-model="newTeacher", placeholder="開課老師", hint="開課老師")
            q-input.margin(outlined, rounded, v-model="newTid", placeholder="開課老師Id", hint="開課老師Id")
            q-input.margin(outlined, rounded, v-model="newTeacherImg", placeholder="老師大頭貼網址", hint="老師大頭貼網址")
            q-input.margin(type="textarea", outlined, rounded, v-model="newZh", placeholder="中文活動說明", hint="中文活動說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newEn", placeholder="英文活動說明", hint="英文活動說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_Zh", placeholder="中文教師簡介", hint="中文教師簡介")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_En", placeholder="英文教師簡介", hint="英文教師簡介")
            q-input.margin(outlined, rounded, v-model="newTags", placeholder="標籤", hint="標籤")
            q-input.margin(outlined, rounded, v-model="newLocation", placeholder="活動地點", hint="活動地點")
            q-input.margin(type="number", outlined, rounded, v-model="newMin", placeholder="最低人數", hint="最低人數", step="1", min="1")
            q-input.margin(type="number", outlined, rounded, v-model="newMax", placeholder="最高人數", hint="最高人數", step="1", min="1")
            q-input.margin(type="text", outlined, rounded, v-model="newOldPrice", placeholder="原價", hint="原價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newNewPrice", placeholder="售價", hint="售價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newPrice", placeholder="顯示價格", hint="顯示價格", step="10", min="0")
          .row.flex.flex-center
            q-btn.margin(color="primary", rounded, @click="updateE(editE)")
              q-icon(name="update")
              | 更新
            q-btn.margin(color="blue", rounded, @click="copyE()")
              q-icon(name="content_copy")
              | 複製
            q-btn.margin(color="red", rounded, @click="deleteE()")
              q-icon(name="delete")
              | 刪除
      q-list(v-if="action == '課程管理'")
        q-item(v-for="(i, k) in classes", :key="k")
          q-checkbox(v-model="showClass[i.id]", label="顯示於網站", v-on:click="toggleClass(i.id)", style="width: 240px")
          a.fluid.text-center.flex.flex-col.flex-center.text-black(@click="startEditC(i.id)")
            img.avatar.round.margin(:src="i.img", :alt="i.title")

            | {{ i.title }}
      q-card.editC-card(v-show="action == '新增活動'")
        .col.flex-col.flex-center
          q-form.fluid
            .row.flex.flex-center
              .col.flex.flex-col
                q-img.small-img.margin(v-show="newClassImg", :src="newClassImg")
                .row.flex.flex-center
                  q-img.avatar.margin(v-show="myImg", :src="myImg")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動Id
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newCid", placeholder="活動Id")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 老師
              q-select(filled, v-model="newTeacherid", :options="getOptions()", option-value="id", option-label="name", option-disable="inactive", emit-value, map-options, style="min-width: 250px; max-width: 300px")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動名稱
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newTitle", placeholder="活動名稱")
            q-form.flex.flex-start-center.fluid.row
              label.text-gray.margin 活動封面圖網址
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newClassImg", placeholder="課程封面圖網址")
            q-form
              label.text-gray.margin.inline-block 中文活動說明
                span.red.star *
              q-input.margin(type="textarea", outlined, rounded, v-model="newZh", placeholder="中文活動說明")
            q-form
              label.text-gray.margin.inline-block 英文活動說明
              q-input.margin(type="textarea", outlined, rounded, v-model="newEn", placeholder="英文活動說明")
            q-form
              label.text-gray.margin.inline-block 中文教師簡介
                span.red.star *
              q-input.margin(type="textarea", outlined, rounded, v-model="newT_Zh", placeholder="中文教師簡介")
            q-form
              label.text-gray.margin.inline-block 英文教師簡介
              q-input.margin(type="textarea", outlined, rounded, v-model="newT_En", placeholder="英文教師簡介")
            q-form
              label.text-gray.margin 標籤
              q-input.margin(outlined, rounded, v-model="newTags", placeholder="標籤")
            q-form
              label.text-gray.margin 活動地點
                span.red.star *
              q-input.margin(outlined, rounded, v-model="newLocation", placeholder="活動地點")
            q-form
              label.text-gray.margin.inline-block 活動地址
              q-input.margin(outlined, rounded, v-model="newAddr", placeholder="活動地址")
            q-form
              label.text-gray.margin.inline-block 活動連結(僅線上活動需填)
              q-input.margin(outlined, rounded, v-model="newHref", placeholder="活動連結(僅線上活動需填)")
            q-form
              .flex-col.fluid.flex-start
                label.text-gray.margin 活動日期/時間
                label.text-gray.margin(v-for="(c, k) in newClasses", :key="k") {{ c.d }}

                  | {{ c.t }}

                  q-btn.margin(rounded, @click="deleteE()", color="red", icon="event_available") 移除
                label.text-gray.margin {{ newDate }}

                  | {{ newTime }}
                  | ~
                  | {{ newEndTime }}

                  q-btn.margin(rounded, @click="addDateTime()", color="orange", icon="event_available") 加入
              .q-gutter-md.row.items-start
                q-date(v-model="newDate", color="purple")
                q-time(v-model="newTime", color="green")
                q-time(v-model="newEndTime", color="blue")
            q-form
              label.text-gray.margin.inline-block 最低人數
              q-input.margin(type="number", outlined, rounded, v-model="newMin", placeholder="最低人數", step="1", min="1")
            q-form
              label.text-gray.margin.inline-block 最高人數
              q-input.margin(type="number", outlined, rounded, v-model="newMax", placeholder="最高人數", step="1", min="1")
            q-form
              label.text-gray.margin.inline-block 原價
              q-input.margin(type="text", outlined, rounded, v-model="newOldPrice", placeholder="原價", hint="原價")
            q-form
              label.text-gray.margin.inline-block 原價
              q-input.margin(type="text", outlined, rounded, v-model="newNewPrice", placeholder="售價", hint="售價")
            q-form
              label.text-gray.margin.inline-block 顯示價格
                span.red.star *
              q-input.margin(type="text", outlined, rounded, v-model="newPrice", placeholder="顯示價格")
          .row.flex.flex-center
            q-btn.margin(color="blue", rounded, @click="previewClass()")
              q-icon(name="preview")
              | 預覽
            q-btn.margin(color="primary", rounded, @click="newE(newCid)")
              q-icon(name="upload")
              | 送出
      q-card.editC-card(v-if="action == '活動管理' && editE !== ''")
        .col.flex-col.flex-center
          q-form.fluid
            .row.flex.flex-center
              .col.flex.flex-col
                q-img.small-img.margin(v-show="newImg", :src="newImg")
                .row.flex.flex-center
                  q-img.avatar.margin(v-show="newTeacherImg", :src="newTeacherImg")
            q-input.margin(outlined, rounded, v-model="newTitle", placeholder="活動名稱", hint="活動名稱")
            q-input.margin(outlined, rounded, v-model="newImg", placeholder="封面圖片網址", hint="封面圖片網址")
            q-input.margin(outlined, rounded, v-model="newTeacher", placeholder="開課老師", hint="開課老師")
            q-input.margin(outlined, rounded, v-model="newTid", placeholder="開課老師Id", hint="開課老師Id")
            q-input.margin(outlined, rounded, v-model="newTeacherImg", placeholder="老師大頭貼網址", hint="老師大頭貼網址")
            q-input.margin(type="textarea", outlined, rounded, v-model="newZh", placeholder="中文活動說明", hint="中文活動說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newEn", placeholder="英文活動說明", hint="英文活動說明")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_Zh", placeholder="中文教師簡介", hint="中文教師簡介")
            q-input.margin(type="textarea", outlined, rounded, v-model="newT_En", placeholder="英文教師簡介", hint="英文教師簡介")
            q-input.margin(outlined, rounded, v-model="newTags", placeholder="標籤", hint="標籤")
            q-input.margin(outlined, rounded, v-model="newLocation", placeholder="活動地點", hint="活動地點")
            q-input.margin(type="number", outlined, rounded, v-model="newMin", placeholder="最低人數", hint="最低人數", step="1", min="1")
            q-input.margin(type="number", outlined, rounded, v-model="newMax", placeholder="最高人數", hint="最高人數", step="1", min="1")
            q-input.margin(type="text", outlined, rounded, v-model="newOldPrice", placeholder="原價", hint="原價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newNewPrice", placeholder="售價", hint="售價", step="10", min="0")
            q-input.margin(type="text", outlined, rounded, v-model="newPrice", placeholder="顯示價格", hint="顯示價格", step="10", min="0")
          .row.flex.flex-center
            q-btn.margin(color="primary", rounded, @click="updateE(editE)")
              q-icon(name="update")
              | 更新
            q-btn.margin(color="blue", rounded, @click="copyE()")
              q-icon(name="content_copy")
              | 複製
            q-btn.margin(color="red", rounded, @click="deleteE()")
              q-icon(name="delete")
              | 刪除
      q-list(v-if="action == '活動管理'")
        q-item(v-for="(i, k) in colearna_events", :key="k") {{ i.id }}

          | {{ showColearna_events[i.id] }}

          q-checkbox(v-model="showColearna_events[i.id]", label="顯示於網站", v-on:click="toggleEvent(i.id)", style="width: 240px")
          a.fluid.text-center.flex.flex-center.text-black(@click="startEditC(i.id)")
            img.avatar.round.margin(:src="i.img", :alt="i.title")

            | {{ i.title }}
      .row.padded(v-if="action == '新增影音'")
        q-form.col-12.flex.flex-col
          span.red.star.down *
          q-input.margin.fluid(type="text", label="請先輸入影音的Id", v-model="newVid", placeholder="請先輸入影音的Id")
          q-input.margin.fluid(type="text", label="標題", v-model="newTitle", placeholder="標題(彈性)")
          q-input.margin.fluid(type="text", label="副標題", v-model="newSub", placeholder="副標題(彈性)")
          q-input.margin.fluid(type="text", label="內嵌連結", v-model="newSrc", placeholder="YouTube內嵌連結或iframe連結")
          q-btn(color="blue", icon="save", @click="createV(newVid)") 新增此影音
      .row.padded(v-if="action == '影音管理' && editV !== ''")
        q-form.col-12.flex.flex-col
          q-input.margin.fluid(type="text", label="標題", v-model="newTitle", placeholder="標題")
          q-input.margin.fluid(type="text", label="副標題", v-model="newSub", placeholder="副標題(彈性)")
          q-input.margin.fluid(type="text", label="內嵌連結", v-model="newSrc", placeholder="YouTube內嵌連結或iframe連結")
          q-btn(color="blue", icon="save", @click="saveV(newVid)") 更新此影音
      .q-pa-md.q-gutter-sm(v-if="action == '新增文章'")
        q-form.col-12.flex.flex-col
          span.red.star.down *
          q-input.margin.fluid(type="text", v-model="newAid", placeholder="請先輸入文章的Id")
          q-input.margin.fluid(type="text", label="標籤(請用逗號分隔)", v-model="newTags", placeholder="標籤(請用逗號分隔)")
          q-input.margin.fluid(type="text", label="標題(彈性)", v-model="newTitle", placeholder="標題(彈性)")
          q-input.margin.fluid(type="text", label="副標題(彈性)", v-model="newSub", placeholder="副標題(彈性)")
          q-input.margin.fluid(type="text", label="作者(彈性)", v-model="newAuthor", placeholder="作者(彈性)")
        q-editor(v-model="newA", :dense="$q.screen.lt.md", :toolbar=`[
                            [
                            {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify'],
                            },
                            ],
                            [
                            'bold',
                            'italic',
                            'strike',
                            'underline',
                            'subscript',
                            'superscript',
                            ],
                            ['token', 'hr', 'link', 'custom_btn'],
                            ['print', 'fullscreen'],
                            [
                            {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                            },
                            {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                            ],
                            },
                            {
                            label: $q.lang.editor.defaultFont,
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                            ],
                            },
                            'removeFormat',
                            ],
                            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                            ['undo', 'redo'],
                            ['viewsource'],
                            ]`, :fonts=`{
                          arial: 'Arial',
                          arial_black: 'Arial Black',
                          comic_sans: 'Comic Sans MS',
                          courier_new: 'Courier New',
                          impact: 'Impact',
                          lucida_grande: 'Lucida Grande',
                          times_new_roman: 'Times New Roman',
                          verdana: 'Verdana',
                          }`)
        q-btn(color="blue", icon="save", @click="createA(newAid)") 新增此文章
      .q-pa-md.q-gutter-sm(v-if="action == '文章管理' && editArt !== ''")
        q-form.col-12.flex.flex-col
          q-input.margin.fluid(type="text", label="標籤", v-model="newTags", placeholder="標籤(逗號分隔)")
          q-input.margin.fluid(type="text", label="封面圖片網址", v-model="newArtImg", placeholder="封面圖片網址")
          q-input.margin.fluid(type="text", label="標題", v-model="newTitle", placeholder="標題")
          //Todo: red star
          q-input.margin.fluid(type="text", label="副標題", v-model="newSub", placeholder="副標題")
          //Todo: red star
          q-input.margin.fluid(type="text", label="作者", v-model="newAuthor", placeholder="作者")
          //Todo: red star
        q-list
          q-item(v-for="(i, k) in videos", :key="k")
            a.fluid.text-center.flex.flex-start-center.text-black(@click="startEditArt(i.id)")
              img.half.margin(:src="i.src || dummyImg", :alt="i.title")
              .col.flex.flex-col.flex-start-center
                h4.text-dark-green.no-margin {{ i.title || i.id }}
                h6.text-dark-green {{ i.sub }}
        q-editor(v-if="newA", v-model="newA", :dense="$q.screen.lt.md", :toolbar=`[
                            [
                            {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify'],
                            },
                            ],
                            [
                            'bold',
                            'italic',
                            'strike',
                            'underline',
                            'subscript',
                            'superscript',
                            ],
                            ['token', 'hr', 'link', 'custom_btn'],
                            ['print', 'fullscreen'],
                            [
                            {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                            },
                            {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                            'size-1',
                            'size-2',
                            'size-3',
                            'size-4',
                            'size-5',
                            'size-6',
                            'size-7',
                            ],
                            },
                            {
                            label: $q.lang.editor.defaultFont,
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                            'default_font',
                            'arial',
                            'arial_black',
                            'comic_sans',
                            'courier_new',
                            'impact',
                            'lucida_grande',
                            'times_new_roman',
                            'verdana',
                            ],
                            },
                            'removeFormat',
                            ],
                            ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                            ['undo', 'redo'],
                            ['viewsource'],
                            ]`, :fonts=`{
                          arial: 'Arial',
                          arial_black: 'Arial Black',
                          comic_sans: 'Comic Sans MS',
                          courier_new: 'Courier New',
                          impact: 'Impact',
                          lucida_grande: 'Lucida Grande',
                          times_new_roman: 'Times New Roman',
                          verdana: 'Verdana',
                          }`)
        q-btn(color="blue", icon="save", @click="saveA(editArt)") 存檔
        q-btn(color="red", icon="delete", @click="deleteA(editArt)") 刪除
      q-list(v-if="action == '文章管理'")
        q-item(class, v-for="(i, k) in articles", :key="k")
          a.fluid.text-center.flex.flex-start-center.text-black(@click="startEditArt(i.id)")
            .fluid.row.flex.flex-start
              .col-sm-6.col-xs-4.col-md-2
                q-img(fit="contain", style="max-height: 26px; max-width: 26px", :src="i.img || dummyImg", :alt="i.title")
              .col-sm-6.col-xs-8.col-md-10.text-left {{ i.title || i.id }}

                | {{ dummyImg }}
      q-list(v-if="action == '影音管理'")
        q-item(v-for="(i, k) in videos", :key="k")
          a.fluid.text-center.flex.flex-start-center.text-black(@click="startEditV(i.id)")
            iframe.half.margin(:src="i.src", :alt="i.title")
            .col.flex.flex-col.flex-start-center
              h4.text-dark-green.no-margin {{ i.title }}
              h6.text-dark-green {{ i.sub }}
      marquees-list(v-if="action == '跑馬燈內容'", :marquees="marquees", :logs="logs", :uid=
      "uid")


      .row.flex.flex-center(v-if="action == '活動'")
      // events.......???
      q-list(v-if="action == '課前通知'")
        q-form.flex-col.fluid.flex-start
          q-input(type="textarea", v-model="reciever", outlined, rounded, placeholder="收件人")
          q-input(outlined, rounded, v-model="mySubject", placeholder="標題")
          q-editor.fluid(v-model="myHTML", placeholder="內文(支援HTML格式)")
          q-btn.margin(color="orange", rounded, icon="send", @click="mailto(reciever, mySubject, myHTML)", v-show="reciever") 發送通知
        q-item.fluid.text-center.flex.flex-start-center.text-black(v-for="(i, k) in classes", :key="k")
          img.avatar.round.margin(:src="i.img", :alt="i.title")

          | {{ i.title }}

          q-badge.my-s-b(color="red", v-show="shouldN(i)")
            q-icon.q-ml-xs(name="warning", color="white")

          q-btn.margin(color="blue", rounded, icon="send", @click="startN(i)") 準備通知
      q-list(v-if="action == '管理記錄'")
        q-item.flex.flex-start-center(v-for="(l, k) in logs", :key="k")
          | {{ new Date(l.time).toLocaleDateString(&apos;zh-TW&apos;)
          | }}
          | {{ new Date(l.time).toLocaleTimeString(&apos;zh-TW&apos;) }}
          | :
          br
          span(v-html="l.msg")
          | __操作
          | {{ l.type }}
          | :
          | {{ users[l.from].name }}

</template>

<script lang="ts">
import convert from 'image-file-resize';

import AdminList from '../components/admin/Admin_AdminList.vue';
import TeacherList from '../components/admin/Admin_TeacherList.vue';
import NewTeacher from '../components/admin/Admin_NewTeacher.vue';
import AddClass from '../components/admin/Admin_AddClass.vue';
import UserList from '../components/admin/Admin_UserList.vue';
import SendEmail from '../components/SendEmail.vue';
import PreviewClass from '../components/PopUp_PreviewClass.vue';
import ClassRequest from '../components/admin/Admin_ClassRequest.vue';
import MarqueesList from '../components/admin/Admin_MarqueesList.vue';

import { useMeta } from 'quasar';
// import ExampleComponent from 'components/ExampleComponent.vue'
// import InApp from 'detect-inapp';
import { defineComponent, ref } from 'vue';
import { useDatabase } from 'vuefire';
import { ref as dbRef, set, remove } from 'firebase/database';

const db = useDatabase();

export default defineComponent({
  name: 'AdminPage',
  components: {
    AdminList,
    TeacherList,
    NewTeacher,
    UserList,
    AddClass,
    SendEmail,
    PreviewClass,
    ClassRequest,
    MarqueesList,
  },
  props: [
    'dummyImg',
    'uid',
    'me',
    'users',
    'user',
    'email',
    'photoURL',
    'isLogout',
    'isInApp',
    'teachers',
    'classes',
    'colearna_events',
    'myKey',
    'requests',
    'isTeacher',
    'isAdmin',
    'marquees',
    'trips',
    'articles',
    'videos',
    'logs',
    'classNotifications',
    'myName',
  ], //, 'news'
  setup() {
    const metaData = {
      title: '管理員系統',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const objS: any = {};
    const showColearna_events = ref(objS);
    const editArt = ref('');
    const newA = ref('');
    const newAuthor = ref('');
    const newSub = ref('');
    const newTeacher = ref('');
    const newTeacherImg = ref('');
    const newZh = ref('');
    const newEn = ref('');
    const newTags = ref('');
    const newT_Zh = ref('');
    const newT_En = ref('');
    const newMin = ref(1);
    const newMax = ref(10);
    const newOuterLink = ref('');
    const newOldPrice = ref('NT$0');
    const newNewPrice = ref('NT$0');
    const newPrice = ref('NT$0');
    const newTitle = ref('');
    const newImg = ref('');
    const newLocation = ref('');

    const arr: boolean[] = [];
    const showTeacher = ref(arr);

    const obj1: any = {};
    const showClass = ref(obj1);
    const arr2: any[] = [];
    const newClasses = ref(arr2);
    const newDate = ref('');
    const newTime = ref('');
    const newEndTime = ref('');

    const myImg = ref('');
    const newAddr = ref('');
    const newHref = ref('');
    const newClassImg = ref('');

    const newSrc = ref('');
    const newAid = ref('');

    const newVid = ref('');

    let d = new Date();
    let cid =
      d.getFullYear() +
      '_' +
      (d.getMonth() + 1) +
      '_' +
      d.getDate() +
      '_' +
      ('' + Math.random()).substring(3, 12);

    const obj: any = {};
    const showTeacherUser = ref(obj);

    const previewC = ref(false);
    const newCid = ref(cid);
    const newTeacherid = ref('');
    const arrC: any[] = [];
    const checked = ref(arrC);
    const done1 = ref(false);
    const done2 = ref(false);
    const done3 = ref(false);
    const name = ref('');
    const new_email = ref('');
    const slide = ref('style');
    const step = ref(1);
    const myKey2 = ref('');
    const action = ref('');

    const editP = ref(false);
    const editC = ref('');
    const editE = ref('');
    const editV = ref('');

    const previewP = ref(false);

    const newTid = ref('');
    const newArtImg = ref('');

    const options_group1 = ref([
      '管理員名單',
      // '手動新增老師',
      '新老師申請',
      '老師名單',
      '用戶名單',
    ]);

    const options_group2 = ref([
      '手動新增課程',
      '新課程申請',
      '課程管理',
      '新增活動',
      '活動管理',
      '新增文章',
      '文章管理',
      '新增影音',
      '影音管理',
      // '新增旅行',
      // '旅行管理',
    ]);

    const options_group3 = ref([
      '跑馬燈內容',
      '發送Email',
      '課前通知',
      '管理記錄',
    ]);

    const mySubject = ref('');
    const myHTML = ref('');
    const reciever = ref('');

    return {
      editP,
      myImg,
      previewP,
      previewC,
      newArtImg,
      newClasses,
      newTags,
      newDate,
      newTime,
      newEndTime,
      newZh,
      newEn,
      newT_Zh,
      newT_En,
      newTitle,
      newLocation,
      newAddr,
      newHref,
      newCid,
      newMin,
      newMax,
      newOldPrice,
      newNewPrice,
      newPrice,
      newClassImg,
      newTeacherid,
      options_group1,
      options_group2,
      options_group3,
      checked,
      reciever,
      mySubject,
      myHTML,
      newTid,
      newOuterLink,
      newTeacher,
      newTeacherImg,
      editArt,
      newAid,
      newA,
      newAuthor,
      newSub,
      editV,
      newSrc,
      newVid,
      editC,
      editE,
      newImg,
      action,
      showTeacherUser,
      showTeacher,
      showClass,
      showColearna_events,
      name,
      new_email,
      step,
      slide,
      myKey2,
      done1,
      done2,
      done3,
    };
  },
  mounted() {
    // setInterval(this.go, 1000)
    if (this.users) {
      const us = Object.values(this.users);
      for (let k = 0; k < us.length; k++) {
        let u = us[k] as any;
        if (u.isTeacher) {
          this.showTeacherUser[String(u.id)] = !!u.showTeacher;
          this.$forceUpdate;
        }
      }
    }
    if (this.teachers) {
      const ts = Object.values(this.teachers);
      for (let k = 0; k < ts.length; k++) {
        let t = ts[k] as any;
        this.showTeacher[k] = !!t.showTeacher;
        this.$forceUpdate;
      }
    }
    /* if (this.news) {
      this.myNews = this.news || []
      this.$forceUpdate()
    } */
    const ks = Object.keys(this.classes || {});
    for (let j = 0; j < ks.length; j++) {
      let cid = ks[j];
      this.showClass[cid] = this.classes[cid].showClass || false;
    }

    const ks2 = Object.keys(this.colearna_events || {});
    for (let j = 0; j < ks2.length; j++) {
      let tid = ks2[j];
      this.showColearna_events[tid] =
        this.colearna_events[tid].showClass || false;
    }
  },
  watch: {
    action(newA) {
      if (newA == '發送Email') {
        this.mySubject = '';
        this.myHTML = '';
      }
      if (window.innerWidth >= 600) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    classes(newCS) {
      const ks = Object.keys(newCS);
      for (let j = 0; j < ks.length; j++) {
        let cid = ks[j];
        this.showClass[cid] = newCS[cid].showClass || false;
      }

      console.log(newCS);
      if (Object.keys(newCS).length > 0) {
        console.log('we_have_some_data');
      }
    },
    colearna_events(newCE) {
      const ks = Object.keys(newCE);
      for (let j = 0; j < ks.length; j++) {
        let cid = ks[j];
        this.showColearna_events[cid] = newCE[cid].showClass || false;
      }
    },
    users(newUS) {
      const us = Object.values(newUS);
      for (let k = 0; k < us.length; k++) {
        let u = us[k] as any;
        if (u.isTeacher) {
          this.showTeacherUser[String(u.id)] = !!u.showTeacher;
          this.$forceUpdate();
        }
      }
    },
    teachers(newTS) {
      for (let k = 0; k < newTS.length; k++) {
        let t = newTS[k] as any;
        this.showTeacher[k] = !!t.showTeacher;
        this.$forceUpdate();
      }
    },
    editArt(newA) {
      this.newArtImg = this.articles[newA].img || this.dummyImg;
    },
    news(newNS) {
      this.myNews = newNS || [];
      this.$forceUpdate();
    },
  },
  methods: {
    toggleEvent(eid: string) {
      this.showColearna_events[eid] = !this.showColearna_events[eid];
      set(
        dbRef(db, 'colearna_events/' + eid + '/showClass'),
        this.showColearna_events[eid]
      ).then(() => {
        console.log('toggleEvent:' + eid);
      });
    },
    removeDateTime(k: number) {
      console.log(k);
      //...
    },
    addDateTime() {
      //...
    },
    previewClass() {
      this.previewC = true;
    },
    previewNewClass(c: any) {
      this.startEditC(c.id);
      this.previewC = true;
    },
    approveC(cid: string) {
      接受新課程申請;
      const c = this.classes[cid];
      if (c) {
        c.approved = true;
        set(dbRef(db, 'classes/' + cid), c);
      }
    },
    nn(list: any[]) {
      if (!list) {
        list = [];
      }
      return list.filter(function (r) {
        return !r.approved;
      });
    },
    countClassNotifications() {
      const arr: any = Object.values(this.classes) || [];
      var ans = 0;
      for (let j = 0; j < arr.length; j++) {
        const cs = arr[j].classes || [];
        for (let k = 0; k < cs.length; k++) {
          let dd = cs[k].d.replace(/\(.+\)/g, '');
          if (
            (arr[j].location == '線上課程' || arr[j].location == '線上') &&
            !arr[j].href &&
            new Date(dd).getTime() - new Date().getTime() <
              1000 * 60 * 60 * 24 * 2 &&
            new Date(dd).getTime() - new Date().getTime() > 0
          ) {
            ans++;
          }
        }
      }
      return ans;
    },
    getOptions() {
      const us = Object.values(this.users).filter((k: any) => {
        return !k.isTeacher;
      });
      // console.log(us)
      const ts = this.teachers.map((o: any) => {
        let obj = { ...o };
        obj.id = obj.name;
        return obj;
      });
      const arr = [...us.concat(ts)];
      // console.log(arr)
      return arr;
    },
    startN(c: any) {
      if (c.tid) {
        this.reciever = this.users[c.tid].email;
      } else {
        this.reciever = 'inquiry@colearna.co';
      }
      this.mySubject =
        '課前通知: 線上課程(' + c.title + ')即將開始，但尚未輸入課程連結';
      this.myHTML =
        '課前通知: 線上課程(<a href="https://next.colearna.co/class_info/' +
        c.id +
        ' target="_blank" rel="noopener norefferer">' +
        c.title +
        '</a>)即將開始，但尚未輸入課程連結，請您儘快輸入課程連結，謝謝';
    },
    shouldN(c: any) {
      const cs = c.classes || [];
      for (let k = 0; k < cs.length; k++) {
        let dd = cs[k].d.replace(/\(.+\)/g, '');
        if (
          (c.location == '線上課程' || c.location == '線上') &&
          !c.href &&
          new Date(dd).getTime() - new Date().getTime() <
            1000 * 60 * 60 * 24 * 2 &&
          new Date(dd).getTime() - new Date().getTime() > 0
        ) {
          return true;
        }
      }
      return false;
    },
    editEmail(email: string) {
      this.reciever = email;
    },
    mailto(email: string, subject: string, html: string) {
      this.$emit('mailto', email, subject, html);
      this.mySubject = '';
      this.myHTML = '';
      this.reciever = '';
    },
    copyC() {
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const newId: string = window.prompt('請輸入複製後的新課程id')!;
      const ks = Object.keys(this.classes);
      if (ks.indexOf(newId) > -1) {
        window.alert('不能使用已存在的課程Id');
        return;
      } else {
        set(dbRef(db, 'classes/' + newId), {
          id: newId,
          tid: this.newTid,
          title: this.newTitle || '',
          teacher: this.newTeacher || '',
          teacher_img: this.newTeacherImg,
          showClass: true,
          zh: this.newZh || '',
          en: this.newEn || '',
          location: this.newLocation || '',
          tags: this.newTags.split(','),
          price: this.newPrice,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          t_zh: this.newT_Zh || '',
          t_en: this.newT_En || '',
          min: this.newMin || 1,
          max: this.newMax || 10,
        }).then(() => {
          console.log('class copied!');
          window.alert('課程已複製');
          this.startEditC(newId);
        });
      }
    },
    deleteE() {
      if (window.confirm('確定要刪除此活動嗎？此動作無法復原')) {
        remove(dbRef(db, 'colearna_events/' + this.editE)).then(() => {
          console.log('colearna_event removed!');
          window.alert('活動已刪除');
          this.editE = '';
        });
      }
    },
    copyE() {
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const newId: string = window.prompt('請輸入複製後的新活動id')!;
      const ks = Object.keys(this.colearna_events);
      if (ks.indexOf(newId) > -1) {
        window.alert('不能使用已存在的活動Id');
        return;
      } else {
        set(dbRef(db, 'colearna_events/' + newId), {
          id: newId,
          tid: this.newTid,
          title: this.newTitle || '',
          teacher: this.newTeacher || '',
          teacher_img: this.newTeacherImg,
          showClass: true,
          zh: this.newZh || '',
          en: this.newEn || '',
          location: this.newLocation || '',
          tags: this.newTags.split(','),
          price: this.newPrice,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          t_zh: this.newT_Zh || '',
          t_en: this.newT_En || '',
          min: this.newMin || 1,
          max: this.newMax || 10,
        }).then(() => {
          console.log('colearna_event copied!');
          window.alert('活動已複製');
          this.startEditE(newId);
        });
      }
    },
    toggleClass(cid: string) {
      set(dbRef(db, 'classes/' + cid + '/showClass'), this.showClass[cid]);
    },
    toggleTrip(tid: string) {
      set(dbRef(db, 'trip/' + tid + '/showClass'), this.showClass[tid]);
    },
    deleteUser(uid: string) {
      if (window.confirm('確定要移除此用戶嗎？此動作無法復原')) {
        remove(dbRef(db, 'users_public/' + uid));
        remove(dbRef(db, 'users/' + uid)).then(() => {
          console.log('users removed!');
        });
      }
    },
    forgetPassWord(email: string) {
      this.$emit('forgetPassWord', email);
    },

    startEditArt(aid: string) {
      const arr = this.articles;
      const obj = arr[aid];
      console.log(obj);
      this.newTitle = obj.title;
      this.newTags = (obj.tags || []).join(',');
      this.newA = obj.text;
      this.newImg = obj.img;
      this.newAuthor = obj.author || '共學島';
      this.newSub = obj.sub;
      this.newTags = (obj.tags || []).join(',');
      this.newOuterLink = obj.outer_link || '';
      this.editArt = aid;
    },

    startEditV(vid: string) {
      const arr = this.videos;
      const obj = arr[vid];
      console.log(obj);
      this.newTitle = obj.title;
      this.newSub = obj.sub;
      this.newSrc = obj.src;
      this.newTags = (obj.tags || []).join(',');
      this.editV = vid;
    },

    startEditC(cid: string) {
      const arr = this.classes;
      const obj = arr[cid];
      this.newTitle = obj.title;
      this.newImg = obj.img;
      this.newTeacher = obj.teacher || '';
      this.newTeacherImg = obj.teacher_img || '';
      this.newZh = obj.zh || '';
      this.newEn = obj.en || '';
      this.newT_Zh = obj.t_zh || '';
      this.newT_En = obj.t_en || '';
      this.newLocation = obj.location;
      this.newOldPrice = obj.old_price || '0';
      this.newNewPrice = obj.new_price || '0';
      this.newPrice = obj.price || '0';
      this.newTags = (obj.tags || []).join(',');
      this.editC = cid;
    },
    createA(aid: any) {
      console.log(aid);
      const ks = Object.keys(this.articles);
      if (!aid || aid == '') {
        aid = window.prompt('請先輸入文章的Id');
      }
      if (ks.indexOf(aid) > -1) {
        window.alert('不能使用已存在的文章Id');
        return;
      } else {
        console.log(this.newA);
        const logs: Array<any> = [...this.logs] || [];

        logs.push({
          time: new Date().getTime(),
          msg: '文章(id: ' + aid + ', 標題: ' + this.newTitle + ')已創建',
          from: this.uid,
          type: '管理員',
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        set(dbRef(db, 'articles/' + aid || 'test' + new Date().getTime()), {
          id: aid,
          title: this.newTitle || '',
          sub: this.newSub || '',
          img: this.newImg || '',
          tags: (this.newTags || '').split(','),
          author: this.newAuthor || '',
          outer_link: this.newOuterLink || '',
          text: this.newA,
        }).then(() => {
          console.log('article updated!');
          window.alert('文章已創建');
        });
      }
    },
    createV(vid: any) {
      const ks = Object.keys(this.videos);
      if (!vid || vid == '') {
        vid = window.prompt('請先輸入影音的Id');
      }
      if (ks.indexOf(vid) > -1) {
        window.alert('不能使用已存在的影音Id');
        return;
      } else {
        const logs: Array<any> = [...this.logs] || [];

        logs.push({
          time: new Date().getTime(),
          msg: '影音(id: ' + vid + ', 標題: ' + this.newTitle + ')已創建',
          from: this.uid,
          type: '管理員',
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        set(dbRef(db, 'videos/' + vid || 'test' + new Date().getTime()), {
          id: vid,
          title: this.newTitle || '',
          sub: this.newSub || '',
          src: this.newSrc || '',
          price: 'FREE',
          tags: (this.newTags || '').split(','),
        }).then(() => {
          console.log('videos updated!');
          window.alert('影音已創建');
        });
      }
    },
    newC(cid: string) {
      const ks = Object.keys(this.classes);
      if (ks.indexOf(cid) > -1) {
        window.alert('不能使用已存在的課程Id');
        return;
      } else {
        const logs: Array<any> = [...this.logs] || [];
        logs.push({
          time: new Date().getTime(),
          msg:
            '管理員(id: ' +
            this.uid +
            ', 名稱: ' +
            this.users[this.uid].name +
            ')已上傳新課程(id: ' +
            cid +
            ', 名稱: ' +
            this.newTitle +
            ')',
          from: this.uid,
          type: '管理員',
          classes: this.newClasses || [],
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        const ids = Object.keys(this.users);

        set(dbRef(db, 'classes/' + cid), {
          id: cid,
          en: this.newEn,
          zh: this.newZh,
          tid: ids.includes(this.newTeacherid) ? this.newTeacherid : '',
          t_en: this.newT_En,
          t_zh: this.newT_Zh,
          showClass: true,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          price: this.newPrice,
          teacher: ids.includes(this.newTeacherid)
            ? this.users[this.newTeacherid].name
            : this.newTeacherid,
          teacher_img: this.myImg,
          tags: this.newTags.split(','),
          img: this.newClassImg,
          location: this.newLocation,
          addr: this.newAddr,
          href: this.newHref,
          title: this.newTitle,
          classes: this.newClasses || [],
        }).then(() => {
          let d = new Date();
          let cid_new =
            d.getFullYear() +
            '_' +
            (d.getMonth() + 1) +
            '_' +
            d.getDate() +
            '_' +
            ('' + Math.random()).substring(3, 12);

          this.newCid = cid_new;
          console.log('class updated!');
          window.alert('課程資訊已上傳');
        });

        let us = Object.values(this.users);
        for (let k = 0; k < us.length; k++) {
          let u = us[k] as any;
          let uid = u.id;
          if (u.isAdmin) {
            let arr: any[] = [];
            let notifications = u.notifications || arr;
            notifications.push({
              time: new Date().getTime(),
              msg:
                '管理員' +
                this.me.name +
                '(' +
                this.me.email +
                ') 新增了一門課程，請至管理員系統查看',
              route: 'admin',
            });
            set(
              dbRef(db, 'users/' + uid + '/notifications'),
              notifications
            ).then(() => {
              console.log('notification sent!');
            });
            this.$emit(
              'mailto',
              u.email,
              'Colearna_新課程',
              '管理員' +
                this.me.name +
                '(' +
                this.me.email +
                ') 新增了一門課程，請至<a href="https://next.colearn.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
            );
          }
        }
      }
    },

    updateC(cid: string) {
      set(dbRef(db, 'classes/' + cid + '/en'), this.newEn);
      set(dbRef(db, 'classes/' + cid + '/zh'), this.newZh);
      set(dbRef(db, 'classes/' + cid + '/tid'), this.newTid);
      set(dbRef(db, 'classes/' + cid + '/t_en'), this.newT_En);
      set(dbRef(db, 'classes/' + cid + '/t_zh'), this.newT_Zh);
      set(dbRef(db, 'classes/' + cid + '/showClass'), this.showClass[cid]);
      set(dbRef(db, 'classes/' + cid + '/old_price'), this.newOldPrice);
      set(dbRef(db, 'classes/' + cid + '/new_price'), this.newNewPrice);
      set(dbRef(db, 'classes/' + cid + '/price'), this.newPrice);
      set(dbRef(db, 'classes/' + cid + '/teacher'), this.newTeacher);
      set(dbRef(db, 'classes/' + cid + '/teacher_img'), this.newTeacherImg);
      set(dbRef(db, 'classes/' + cid + '/tags'), this.newTags.split(','));
      set(dbRef(db, 'classes/' + cid + '/img'), this.newImg);
      set(dbRef(db, 'classes/' + cid + '/location'), this.newLocation);
      set(dbRef(db, 'classes/' + cid + '/title'), this.newTitle).then(() => {
        console.log('class updated!');
        window.alert('課程資訊已更新');
      });
    },

    removeC(cid: string) {
      if (window.confirm('確定要移除此課程嗎？此動作無法復原')) {
        const logs: Array<any> = [...this.logs] || [];

        logs.push({
          time: new Date().getTime(),
          msg:
            '課程(id: ' +
            cid +
            ', 名稱: ' +
            this.classes[cid].title +
            ')已移除',
          from: this.uid,
          type: '管理員',
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        remove(dbRef(db, 'classes/' + cid)).then(() => {
          console.log('class removed!');
          window.alert('課程已移除');
        });
      }
    },
    startEditE(cid: string) {
      const arr = this.colearna_events;
      const obj = arr[cid];
      this.newTitle = obj.title;
      this.newImg = obj.img;
      this.newTeacher = obj.teacher || '';
      this.newTeacherImg = obj.teacher_img || '';
      this.newZh = obj.zh || '';
      this.newEn = obj.en || '';
      this.newT_Zh = obj.t_zh || '';
      this.newT_En = obj.t_en || '';
      this.newLocation = obj.location;
      this.newOldPrice = obj.old_price || '0';
      this.newNewPrice = obj.new_price || '0';
      this.newPrice = obj.price || '0';
      this.newTags = (obj.tags || []).join(',');
      this.editE = cid;
    },

    newE(cid: string) {
      const ks = Object.keys(this.colearna_events);
      if (ks.indexOf(cid) > -1) {
        window.alert('不能使用已存在的活動Id');
        return;
      } else {
        const logs: Array<any> = [...this.logs] || [];
        logs.push({
          time: new Date().getTime(),
          msg:
            '管理員(id: ' +
            this.uid +
            ', 名稱: ' +
            this.users[this.uid].name +
            ')已上傳新活動(id: ' +
            cid +
            ', 名稱: ' +
            this.newTitle +
            ')',
          from: this.uid,
          type: '管理員',
          classes: this.newClasses || [],
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        const ids = Object.keys(this.users);

        set(dbRef(db, 'colearna_events/' + cid), {
          id: cid,
          en: this.newEn,
          zh: this.newZh,
          tid: ids.includes(this.newTeacherid) ? this.newTeacherid : '',
          t_en: this.newT_En,
          t_zh: this.newT_Zh,
          showClass: true,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          price: this.newPrice,
          teacher: ids.includes(this.newTeacherid)
            ? this.users[this.newTeacherid].name
            : this.newTeacherid,
          teacher_img: this.myImg,
          tags: this.newTags.split(','),
          img: this.newClassImg,
          location: this.newLocation,
          addr: this.newAddr,
          href: this.newHref,
          title: this.newTitle,
          classes: this.newClasses || [],
        }).then(() => {
          let d = new Date();
          let cid_new =
            d.getFullYear() +
            '_' +
            (d.getMonth() + 1) +
            '_' +
            d.getDate() +
            '_' +
            ('' + Math.random()).substring(3, 12);

          this.newCid = cid_new;

          console.log('colearna_event updated!');
          window.alert('活動資訊已上傳');
        });

        let us = Object.values(this.users);
        for (let k = 0; k < us.length; k++) {
          let u = us[k] as any;
          let uid = u.id;
          if (u.isAdmin) {
            let arr: any[] = [];
            let notifications = u.notifications || arr;
            notifications.push({
              time: new Date().getTime(),
              msg:
                '管理員' +
                this.me.name +
                '(' +
                this.me.email +
                ') 新增了一門課程，請至管理員系統查看',
              route: 'admin',
            });
            set(
              dbRef(db, 'users/' + uid + '/notifications'),
              notifications
            ).then(() => {
              console.log('notification sent!');
            });
            this.$emit(
              'mailto',
              u.email,
              'Colearna_新課程',
              '管理員' +
                this.me.name +
                '(' +
                this.me.email +
                ') 新增了一門課程，請至<a href="https://next.colearn.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
            );
          }
        }
      }
    },

    updateE(cid: string) {
      set(dbRef(db, 'colearna_events/' + cid + '/en'), this.newEn);
      set(dbRef(db, 'colearna_events/' + cid + '/zh'), this.newZh);
      set(dbRef(db, 'colearna_events/' + cid + '/tid'), this.newTid);
      set(dbRef(db, 'colearna_events/' + cid + '/t_en'), this.newT_En);
      set(dbRef(db, 'colearna_events/' + cid + '/t_zh'), this.newT_Zh);
      set(
        dbRef(db, 'colearna_events/' + cid + '/showClass'),
        this.showClass[cid]
      );
      set(dbRef(db, 'colearna_events/' + cid + '/old_price'), this.newOldPrice);
      set(dbRef(db, 'colearna_events/' + cid + '/new_price'), this.newNewPrice);
      set(dbRef(db, 'colearna_events/' + cid + '/price'), this.newPrice);
      set(dbRef(db, 'colearna_events/' + cid + '/teacher'), this.newTeacher);
      set(
        dbRef(db, 'colearna_events/' + cid + '/teacher_img'),
        this.newTeacherImg
      );
      set(
        dbRef(db, 'colearna_events/' + cid + '/tags'),
        this.newTags.split(',')
      );
      set(dbRef(db, 'colearna_events/' + cid + '/img'), this.newImg);
      set(dbRef(db, 'colearna_events/' + cid + '/location'), this.newLocation);
      set(dbRef(db, 'colearna_events/' + cid + '/title'), this.newTitle).then(
        () => {
          console.log('colearna_event updated!');
          window.alert('活動資訊已更新');
        }
      );
    },
    removeE(cid: string) {
      if (window.confirm('確定要移除此活動嗎？此動作無法復原')) {
        const logs: Array<any> = [...this.logs] || [];

        logs.push({
          time: new Date().getTime(),
          msg:
            '活動(id: ' +
            cid +
            ', 名稱: ' +
            this.colearna_events[cid].title +
            ')已移除',
          from: this.uid,
          type: '管理員',
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        remove(dbRef(db, 'colearna_events/' + cid)).then(() => {
          console.log('class removed!');
          window.alert('課程已移除');
        });
      }
    },
    deleteC(cid: string) {
      if (window.confirm('確定要移除此課程嗎？此動作無法復原')) {
        remove(dbRef(db, 'classes/' + cid)).then(() => {
          console.log('class removed!');
        });
      }
    },
    deleteA(aid: string) {
      if (window.confirm('確定要移除此文章嗎？此動作無法復原')) {
        remove(dbRef(db, 'articles/' + aid)).then(() => {
          console.log('article removed!');
        });
      }
    },
    saveA(aid: string) {
      console.log(this.newA);
      const logs: Array<any> = [...this.logs] || [];

      /*
        add checker here....
      */

      logs.push({
        img: this.newArtImg,
        time: new Date().getTime(),
        msg: '文章(id: ' + aid + ', 標題: ' + this.newTitle + ')已更新',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });

      set(dbRef(db, 'articles/' + aid), {
        id: aid,
        title: this.newTitle || '',
        sub: this.newSub || '',
        img: this.newImg || '',
        author: this.newAuthor || '',
        outer_link: this.newOuterLink || '',
        tags: (this.newTags || '').split(','),
        text: this.newA,
      }).then(() => {
        console.log('article updated!');
        window.alert('文章已更新');
      });
    },
    saveV(vid: string) {
      const logs: Array<any> = [...this.logs] || [];

      logs.push({
        time: new Date().getTime(),
        msg: '影音(id: ' + this.editV + ', 標題: ' + this.newTitle + ')已更新',
        from: this.uid,
        type: '管理員',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });

      set(dbRef(db, 'articles/' + vid), {
        id: vid,
        title: this.newTitle || '',
        sub: this.newSub || '',
        img: this.newImg || '',
        author: this.newAuthor || '',
        outer_link: this.newOuterLink || '',
        tags: (this.newTags || '').split(','),
        text: this.newA,
      }).then(() => {
        console.log('article updated!');
        window.alert('文章已更新');
      });
    },
    updateTeachers() {
      for (let k = 0; k < this.showTeacher.length; k++) {
        if (this.showTeacher[k]) {
          set(dbRef(db, 'teachers/' + k + '/showTeacher'), true);
        } else {
          set(dbRef(db, 'teachers/' + k + '/showTeacher'), false);
        }
      }
    },
    removeR(k: number) {
      this.$emit('removeR', k);
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    },
    logout() {
      this.$emit('logout');
    },
    uploadArtImage(aid: string, event: Event) {
      var i = document.createElement('img');
      /* eslint-disable-next-line  @typescript-eslint/no-non-null-assertion */
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'photoURL';
      i.onload = function () {
        var w = i.width;
        var h = i.height;
        console.log('IMAGE width', w);
        console.log('IMAGE height: ', h);
        var errMSG = '';
        if (w / h > 2.5) {
          errMSG =
            '寬高比過大，上傳時將會重設為，500 x 300，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (w / h < 0.5) {
          errMSG =
            '寬高比過小，上傳時將會重設為，500 x 300，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (!errMSG || window.confirm(errMSG)) {
          convert({
            file: file,
            width: 500,
            height: 300,
            type: 'png',
          })
            .then((resp: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(resp);
              reader.onload = (e) => {
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */

                set(dbRef(db, 'articles/' + aid + '/image'), e.target!.result);
              };
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
    },
  },
});
</script>

<style type="text/css">
@import '../css/admin.scss';
</style>
