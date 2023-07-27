<template>
  <q-page :padding="true">
    <div class="pop-container-2" v-if="previewC" style="display: block">
      <div class="pop-back-2 clickable" @click="previewC = false">
        <div
          class="row long-padded flex flex-center z-10"
          :style="{
            background: '#444',
            'background-blend-mode': 'darken',
            'background-size': 'cover',
            'background-image': 'url(' + newClassImg + ')',
          }"
          v-show="newClassImg"
        ></div>
        <img
          class="wide cropped"
          :src="newClassImg"
          :alt="newTitle"
          v-show="newClassImg"
        />
        <div class="row long-padded">
          <div class="col-md-7 col-sm-7 col-xs-12 little-padded">
            <div class="row">
              <h2 class="text-dark-green">
                <q-icon name="local_library"></q-icon>
                課程概要
              </h2>
            </div>
            <div class="row flex flex-start-center long-padded">
              <div class="col-md-2 col-sm-3 col-xs-4 little-padded">
                <img :src="newImg || myPhotoURL" class="big avatar" />
              </div>
              <div class="col-md-10 col-sm-9 col-xs-8">
                <p class="text-dark-gray bold">
                  {{ myName }}
                  <br />
                  <span class="text-gray">{{
                    (newTags || []).join(' / ')
                  }}</span>
                </p>
              </div>
            </div>
            <p class="pre bold" v-html="newZh"></p>
            <p class="pre" v-html="newEn"></p>
            <div class="row">
              <h2 class="text-dark-green">
                <q-icon name="workspace_premium"></q-icon>
                認識老師
              </h2>
            </div>
            <div class="row flex flex-start-center long-padded">
              <div class="col-md-2 col-sm-3 col-xs-4 little-padded">
                <img :src="myImg || myPhotoURL" class="big avatar" />
              </div>
              <div class="col-md-8 col-sm-6 col-xs-4">
                <p class="text-dark-gray bold">
                  {{ myName }}
                  <br />
                  <span class="text-gray">{{
                    (newTags || []).join(' / ')
                  }}</span>
                </p>
              </div>
            </div>
            <p class="pre bold" v-html="saveHTML(newT_Zh)"></p>
            <p class="pre" v-show="newT_En" v-html="saveHTML(newT_En)"></p>
            <div class="row long-padded">
              <h2 class="text-dark-green fluid">
                <q-icon name="place"></q-icon>上課地點
              </h2>
              <h6 class="text-gray">
                <q-icon name="place"></q-icon>{{ newLocation }}
                <span class="tiny">{{ newAddr }}</span>
              </h6>

              <iframe
                :src="'https://www.google.com/maps/embed/v1/place?q=' + newAddr"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="row long-padded">
              <h2 class="text-dark-green">
                <q-icon name="language"></q-icon>取消政策
              </h2>
              <p class="text-dark-gray small bold">
                如欲申請退款，請電郵至本平台之客服信箱
                <a id="colearna" href="mailto:contact@colearna.co"
                  >contact@colearna.co</a
                >
                申請，並檢附合理退款原因，經本公司審查後，本公司得依照下列規定，退還全部/部份已付款項（但退款金額需扣除轉帳或信用卡手續費）：<br />
                尚未開課課程之退款條件：<br />
                (1) 於開課日七日（含當日）前，得退還該課程金額之百分之百。<br />
                (2) 於開課日五日（含當日）前，得退還該課程金額之百分之七十。<br />
                (3) 於開課日三日（含當日）前，得退還該課程金額之百分之五十。<br />
                (4)
                若您用戶錯過上述所列的退款期限，不予退款，但平台將贈送相同課堂價格面額（扣除行政費後）之折價券供下次於平台購課使用。<br />
                詳情請參閱常見問題之「Q: 我要申請退款，平台將如何處理？」<br />
                如課堂於開課前未達成班人數（包括單次課及超過一堂課的課程，即「多次課」），平台將提前通知。如課程屬單次課，將安排退款；如課程屬多次課，則安排退款不成班之該次課堂款項（用戶之購買價格除以課堂數目），用戶亦可申請退還餘下未上課堂之費用。如學生遲到/缺席且未有於課堂開始前至少一小時告知，恕未能退還該堂款項。如課堂開始後15分鐘出席學生數目仍未達成班人數，老師得決定是否取消課堂，已出席之學生將獲退還該堂費用。
              </p>
            </div>
          </div>
        </div>
        <div class="row padded flex flex-center">
          <q-form>
            <q-btn
              unelevated
              rounded
              color="blue"
              @click="previewC = false"
              size="lg"
              >結束預覽</q-btn
            >
          </q-form>
        </div>
      </div>
    </div>
    <div class="pop-container-2" v-if="previewP" style="display: block">
      <div class="pop-back-2 clickable" @click="previewP = false">
        <div class="row padded flex flex-center text-left">
          <img
            :src="myImg || myPhotoURL"
            style="
              width: 150px;
              height: 150px;
              border-radius: 50%;
              margin-left: 2em;
            "
          />
          <div class="col-4">
            <h4 class="margin-left">{{ myName }}</h4>
            <h6 class="text-blue margin-left">
              <q-icon name="check_circle"></q-icon>
              Colearna 認證
            </h6>
          </div>
        </div>
        <q-separator />
        <div class="row padded">
          <div class="col-12">
            <h4 class="text-left text-dark-green">
              <q-icon name="edit_note"></q-icon>簡介
            </h4>
            <p v-html="newDes"></p>
          </div>
        </div>
        <div class="row padded">
          <div class="col-12">
            <h4 class="text-left text-dark-green">
              <q-icon
                name="
      lightbulb_outline"
              ></q-icon
              >教學理念
            </h4>
            <p v-html="newThought"></p>
          </div>
        </div>

        <div class="row padded" v-show="newCertifications">
          <div class="col-12">
            <h4 class="text-left text-dark-green">
              <q-icon name="school"></q-icon>專業證照
            </h4>
            <q-list>
              <q-item
                class="text-dark-gray text-left p-16"
                v-for="(c, j) in newCertifications"
                :key="j"
                >{{ j + 1 }}：{{ c }}</q-item
              >
            </q-list>
          </div>
        </div>
        <q-separator></q-separator>

        <div class="row padded">
          <div class="col-12">
            <h4 class="text-left text-dark-green">
              <q-icon name="maps_home_work"></q-icon>開辦課程
            </h4>
            <p
              class="text-dark-gray fluid text-left"
              v-for="(c, k) in me.classes || []"
              :key="k"
            >
              {{ c }}
            </p>
            <p class="text-dark-gray fluid text-left" v-show="!me.classes">
              邀約中
            </p>
          </div>
        </div>

        <div class="row padded flex flex-center">
          <q-form>
            <q-btn
              unelevated
              rounded
              color="blue"
              @click="previewP = false"
              size="lg"
              >結束預覽</q-btn
            >
          </q-form>
        </div>
      </div>
    </div>

    <div class="row long-padded" v-if="!uid || !me || !isTeacher">
      <h2 class="text-dark-green">您沒有老師權限，請先登入</h2>
    </div>

    <div class="row" v-else>
      <div class="col col-md-3 col-sm-4 col-xs-12 padded">
        <q-card
          class="teacher-profile-card fluid flex flex-col flex-start-center"
        >
          <img class="big avatar" :src="myPhotoURL" />
          <q-btn
            unelevated
            class="no-border no-bg text-dark-green text-underline"
            @click="editP = true"
            >編輯</q-btn
          >

          <h6 class="text-orange margin-left">
            <q-icon name="check_circle_outline"></q-icon>
            手機認證
          </h6>

          <q-form class="flex flex-center fluid" v-show="editP">
            <q-file
              class="fluid"
              color="teal"
              filled
              label="上傳大頭貼"
              accept="image/*"
              @input="uploadImage($event)"
              name="photoURL"
            >
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
          </q-form>
        </q-card>
        <q-card class="teacher-profile-card">
          <q-list>
            <q-item
              clickable
              v-for="(o, k) in inner_options"
              :key="k"
              @click="sel(o)"
              class="text-gray flex flex-start-center"
              :class="{
                'text-bold': action == o.t,
                'text-dark-green': action == o.t,
                'llgg-back': action == o.t,
              }"
            >
              {{ o.t }}
            </q-item>

            <q-separator style="margin-bottom: 1em" />

            <q-item
              v-for="(o, k) in options"
              :key="k"
              :to="o.path"
              class="text-gray flex flex-start-center"
              :class="{
                'text-dark-green': action == o.t,
                'light-green-back': action == o.t,
              }"
            >
              {{ o.t }}
            </q-item>

            <q-separator style="margin-bottom: 1em" />

            <q-item class="text-gray flex flex-start-center" @click="logout">
              登出
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col col-md-9 col-sm-8 col-xs-12">
        <q-card class="editC-card" v-show="action == '新增課程'">
          <div class="col flex-col flex-center">
            <q-form class="fluid">
              <div class="row flex flex-center">
                <div class="col flex flex-col">
                  <q-img
                    class="small-img margin"
                    v-show="newClassImg"
                    :src="newClassImg"
                  ></q-img>
                  <div class="row flex flex-center">
                    <q-img
                      class="avatar margin"
                      v-show="myImg"
                      :src="myImg"
                    ></q-img>
                  </div>
                </div>
              </div>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >課程Id <span class="red star">*</span></label
                >
                <q-input
                  class="margin"
                  :readonly="true"
                  outlined
                  rounded
                  v-model="newCid"
                  placeholder="課程Id"
                >
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >課程名稱 <span class="red star">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newTitle"
                  placeholder="課程名稱"
                >
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin"
                  >課程封面圖網址 <span class="red star">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newClassImg"
                  placeholder="課程封面圖網址"
                >
                </q-input>

                <!-- add q-file here .....   issue #87 -->
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >中文課程說明 <span class="red star">*</span></label
                >
                <q-input
                  type="textarea"
                  class="margin"
                  outlined
                  rounded
                  v-model="newZh"
                  placeholder="中文課程說明"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >英文課程說明</label
                >
                <q-input
                  type="textarea"
                  class="margin"
                  outlined
                  rounded
                  v-model="newEn"
                  placeholder="英文課程說明"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >中文教師簡介 <span class="red star">*</span></label
                >
                <q-input
                  type="textarea"
                  class="margin"
                  outlined
                  rounded
                  v-model="newT_Zh"
                  placeholder="中文教師簡介"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >英文教師簡介</label
                >
                <q-input
                  type="textarea"
                  class="margin"
                  outlined
                  rounded
                  v-model="newT_En"
                  placeholder="英文教師簡介"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">標籤</label>
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newTags"
                  placeholder="標籤"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin"
                  >課程地點 <span class="red star">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newLocation"
                  placeholder="課程地點"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">可用方案</label>
                <q-checkbox label="一大一小" />
                <q-checkbox label="陪同票" />
                <q-checkbox label="包班" />
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">課程地址</label>
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newAddr"
                  placeholder="課程地址"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >課程連結(僅線上課需填)</label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="newHref"
                  placeholder="課程連結(僅線上課需填)"
                >
                </q-input>
              </q-form>
              <q-form>
                <div class="flex-col fluid flex-start">
                  <label class="text-gray margin">課程日期/時間</label>
                  <label
                    class="text-gray margin"
                    v-for="(c, k) in newClasses"
                    :key="k"
                  >
                    {{ c.d }} {{ c.t }}
                    <q-btn
                      class="margin"
                      rounded
                      @click="removeDateTime(k)"
                      color="red"
                      icon="event_available"
                      >移除</q-btn
                    >
                  </label>
                  <label class="text-gray margin"
                    >{{ newDate }} {{ newTime }} ~ {{ newEndTime }}
                    <q-btn
                      class="margin"
                      rounded
                      @click="addDateTime()"
                      color="orange"
                      icon="event_available"
                      >加入</q-btn
                    >
                  </label>
                </div>
                <div class="q-gutter-md row items-start">
                  <q-date v-model="newDate" color="purple" />
                  <q-time v-model="newTime" color="green" />
                  <q-time v-model="newEndTime" color="blue" />
                </div>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">最低人數</label>
                <q-input
                  type="number"
                  class="margin"
                  outlined
                  rounded
                  v-model="newMin"
                  placeholder="最低人數"
                  step="1"
                  min="1"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">最高人數</label>
                <q-input
                  type="number"
                  class="margin"
                  outlined
                  rounded
                  v-model="newMax"
                  placeholder="最高人數"
                  step="1"
                  min="1"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">原價</label>
                <q-input
                  type="text"
                  class="margin"
                  outlined
                  rounded
                  v-model="newOldPrice"
                  placeholder="原價"
                  hint="原價"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">原價</label>
                <q-input
                  type="text"
                  class="margin"
                  outlined
                  rounded
                  v-model="newNewPrice"
                  placeholder="售價"
                  hint="售價"
                >
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block"
                  >顯示價格 <span class="red star">*</span></label
                >
                <q-input
                  type="text"
                  class="margin"
                  outlined
                  rounded
                  v-model="newPrice"
                  placeholder="顯示價格"
                >
                </q-input>
              </q-form> </q-form
            >\
            <div class="row flex flex-center">
              <q-btn
                color="blue"
                class="margin"
                rounded
                @click="previewClass()"
                icon="visibility"
                >預覽</q-btn
              >
              <q-btn
                color="primary"
                class="margin"
                rounded
                @click="newC(newCid)"
                icon="upload"
                >送出</q-btn
              >
            </div>
          </div>
        </q-card>
        <div class="teacher-profile-card-3" v-if="action == '教學管理'">
          <h4 class="text-dark-green fluid text-left">教學管理</h4>
          <div class="row no-margin fluid flex flex-start-center llgg-back">
            <div class="col col-md-8 col-sm-6 col-xs-4">
              <h4 class="text-dark-green">Hi {{ me.name }}老師!</h4>
            </div>
            <div
              class="col col-md-2 col-sm-3 col-xs-4 flex flex-col flex-start-center fluid"
            >
              <h2 class="text-dark-green inline-flex flex-end-center fluid">
                1
              </h2>
              <p class="text-gray inline-flex flex-end-center fluid">
                等待開課
              </p>
            </div>
            <div
              class="col col-md-2 col-sm-3 col-xs-4 flex flex-col flex-start-center fluid"
              style="padding-right: 22px"
            >
              <h2 class="text-dark-green inline-flex flex-end-center fluid">
                4
              </h2>
              <p class="text-gray inline-flex flex-end-center fluid">
                已開課程
              </p>
            </div>
          </div>
          <div class="row justify-center fluid">
            <div class="subcontent fluid" id="teacher-bar">
              <navigation-bar
                :inTeacher="true"
                :me="me"
                :selectedDate="selectedDate"
                :op="op"
                :filter_act="filter_act"
                :role="role"
                @setRole="setRole"
                @setOp="setOp"
                @setFil="setFil"
                @today="onToday"
                @prev="onPrev"
                @next="onNext"
              />
            </div>
          </div>

          <div class="row justify-center" v-show="op == '月'">
            <div style="display: flex; max-width: 1280px; width: 100%">
              <q-calendar-month
                ref="calendar"
                v-model="selectedDate"
                :date-type="dateType"
                :day-min-height="20"
                animated
                bordered
                @change="onChange"
                @moved="onMoved"
                @click-date="onClickDate"
                @click-day="onClickDay"
                @click-workweek="onClickWorkweek"
                @click-head-workweek="onClickHeadWorkweek"
                @click-head-day="onClickHeadDay"
              >
                <template #day="{ scope: { timestamp } }">
                  <template
                    v-for="(event, kk) in eventsTeacherMap[timestamp.date]"
                    :key="event.id"
                  >
                    <div
                      :class="badgeClasses(kk, 'day', event.bgcolor || '')"
                      :style="badgeStyles(kk, 'day')"
                      class="my-event clickable"
                      @click.stop="
                        goto('class_info/' + event.id.replace(/^.+:/, ''))
                      "
                    >
                      <div class="title q-calendar__ellipsis">
                        {{
                          event.date
                            .replace(/^.+T/, '')
                            .replace(/\s-.+\d/, '') +
                          ' ' +
                          event.title.replace(/^.+｜/, '')
                        }}
                        <q-tooltip>{{ event.des }}</q-tooltip>
                      </div>
                    </div>
                  </template>
                  <!-- <div class="filler">
                </div> -->
                </template>
              </q-calendar-month>
            </div>
          </div>

          <div class="row flex flex-center" v-show="op == '課程一覽'">
            <q-card class="my-card-small" v-for="(r, k) in classes" :key="k">
              <q-img
                class="clickable"
                :src="r.img"
                :alt="r.des"
                fit="cover"
                style="height: 220px"
                @click="goto(r.id)"
              ></q-img>
              <q-card-section class="col flex flex-col">
                <div class="filler"></div>
                <div class="my-card-title">{{ r.des }}</div>
                <p class="small no-margin text-gray flex flex-start-center">
                  <q-icon name="star" color="yellow"></q-icon>
                  <q-icon name="star" color="yellow"></q-icon>
                  <q-icon name="star" color="yellow"></q-icon>
                  <q-icon name="star" color="yellow"></q-icon>
                  <q-icon name="star" color="yellow"></q-icon>
                  <span style="position: relative; top: 1px; left: 4px">
                    5.0 (2)</span
                  >
                </p>
                <h6 class="fluid text-left text-orange no-margin">
                  {{ r.price }}
                </h6>
                <div class="row">
                  <p
                    class="text-dark-gray bold fluid px-16 text-left no-margin"
                  >
                    <img
                      :src="r.teacher_img"
                      class="avatar float right"
                      alt="Teacher"
                      width="50"
                      height="50"
                    />
                    {{ r.teacher }}
                    <br />
                    <span class="text-gray bold">{{
                      (r.tags || []).join(' / ')
                    }}</span>
                  </p>
                </div>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn
                  flat
                  round
                  color="blue"
                  icon="info"
                  @click="goto(r.id)"
                />
                <q-btn
                  flat
                  round
                  color="red"
                  icon="favorite"
                  @click="like(r.id, uid)"
                />
                <!-- <q-btn flat round color="teal" icon="add_shopping_cart" @click="add_to_cart(r.id, uid)"/> -->
                <q-btn
                  flat
                  round
                  color="primary"
                  icon="share"
                  @click="share(r.id)"
                />
              </q-card-actions>
            </q-card>
          </div>
          <div class="row">
            <h4 class="text-center text-gray fluid narrow">
              <q-btn unelevated size="lg">
                <q-icon name="arrow_back_ios" class="narrow"></q-icon>
              </q-btn>
              <q-btn unelevated size="lg"> 1 </q-btn>
              <q-btn unelevated size="lg"> 2 </q-btn>
              <q-btn unelevated size="lg"> 3 </q-btn>
              <q-btn unelevated size="lg">
                <q-icon name="arrow_forward_ios" class="narrow"></q-icon>
              </q-btn>
            </h4>
          </div>
        </div>

        <q-card class="profile-card-2" v-if="action == '教師檔案'">
          <h4 class="text-left text-dark-green fluid">教師檔案</h4>
          <p class="text-gray bold">填入以下資料，系統將會自動老師個人頁面</p>
          <div class="row">
            <div class="col-12">
              <q-form class="flex flex-start-center fluid row">
                <q-input
                  rounded
                  outlined
                  class="margin"
                  v-model="myName"
                  placeholder="你喜歡學生怎麼稱呼你?"
                  style="width: 100%"
                  @focus="
                    focusDate = [];
                    focusMyDate = false;
                  "
                >
                </q-input>
              </q-form>

              <h4 class="text-left text-dark-green fluid">我的簡介</h4>

              <q-form class="flex flex-start-center fluid row">
                <q-input
                  rounded
                  outlined
                  type="textarea"
                  class="margin"
                  v-model="newDes"
                  placeholder="關於我的簡介"
                  style="width: 100%"
                >
                </q-input>
              </q-form>

              <h4 class="text-left text-dark-green fluid">教學理念</h4>

              <q-form class="flex flex-start-center fluid row">
                <q-input
                  rounded
                  outlined
                  type="textarea"
                  class="margin"
                  v-model="newThought"
                  placeholder="教學理念"
                  style="width: 100%"
                >
                </q-input>
              </q-form>

              <h4 class="text-left text-dark-green fluid">專業證照</h4>

              <q-input
                rounded
                outlined
                v-model="newCer"
                placeholder="專業證照(選填)"
                style="width: 66%; min-width: 320px"
              >
                <template v-slot:prepend>
                  <q-icon name="add" color="green" />
                </template>
                <template v-slot:append>
                  <q-btn color="secondary" @click="addCer()">新增</q-btn>
                </template>
              </q-input>
              <q-list bulleted style="width: 66%; min-width: 320px">
                <q-item v-for="(c, k) in newCertifications || []" :key="k">
                  <div class="flex margin">{{ k + 1 }}：{{ c }}</div>
                  <div class="filler"></div>
                  <q-btn size="xs margin" color="red" @click="removeCer(k)">
                    <q-icon name="delete"></q-icon>
                  </q-btn>
                </q-item>
              </q-list>
            </div>
          </div>
          <q-form>
            <q-btn
              unelevated
              rounded
              color="green-6"
              class="margin"
              @click="submit()"
              size="lg"
              icon="save"
              >儲存</q-btn
            >
            <q-btn
              unelevated
              rounded
              color="blue-3"
              class="margin"
              @click="previewProfile()"
              size="lg"
              icon="visibility"
              >預覽</q-btn
            >
            <q-btn
              unelevated
              rounded
              color="orange-12"
              class="margin"
              @click="gotoT(uid)"
              size="lg"
              icon-right="navigate_next"
              >前往我的老師個人頁面</q-btn
            >
            <!--<q-btn unelevated rounded class="margin or-border text-orange" @click="cancel()" size="lg">取消</q-btn> -->
          </q-form>
        </q-card>
        <div class="teacher-profile-card-3" v-if="action == '收入概覽'">
          <h4 class="text-dark-green">收入概覽</h4>

          <div class="row no-margin fluid flex flex-start-center llgg-back">
            <div class="col-md-6 col-sm-6 col-xs-12 flex flex-col flex-center">
              <h6 class="text-dark-green">2023年05月收入總額：</h6>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 flex flex-col flex-center">
              <h4 class="text-dark-green">21,000TWD</h4>
            </div>
          </div>

          <q-separator style="margin-bottom: 1em" />

          <q-list class="no-margin no-padding">
            <q-item
              class="flex flex-start-center no-margin no-padding"
              v-show="myAccounts.length == 0"
            >
              您目前尚末設定銀行帳戶
            </q-item>
            <q-item
              class="flex flex-start-center no-margin"
              clickable
              v-for="(a, l) in myAccounts"
              :key="l"
              @click="editAcc(l)"
            >
              帳戶{{ l + 1 }}：{{ a.bank_name }} {{ a.bank_code }} (帳號:
              {{ a.bank_account || '待設定' }})
            </q-item>
            <q-item
              clickable
              @click="
                myAccounts.push({
                  bank_name: '新帳戶',
                });
                editAcc(myAccounts.length - 1);
              "
            >
              <h6 class="text-dark-green">
                <q-icon name="add"></q-icon>
                <span class="text-underline">新增銀行帳戶</span>
              </h6>
            </q-item>
          </q-list>

          <q-card
            class="teacher-bank-card flex-col flex-start-center"
            v-if="focusAcc != Infinity"
          >
            <q-form class="flex flex-start-center fluid">
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_name"
                  placeholder="例：中華郵政"
                ></q-input>
              </div>

              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >戶名<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="account_name"
                  placeholder="開戶的真實姓名"
                ></q-input>
              </div>
            </q-form>

            <div class="small-space"></div>

            <q-form class="flex flex-start-center fluid">
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行代碼<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_code"
                  placeholder="例：700"
                ></q-input>
              </div>
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行帳號<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_account"
                  placeholder="銀行帳號"
                ></q-input>
              </div>
            </q-form>

            <div class="row padded flex flex-end-center">
              <q-btn
                class="margin"
                rounded
                outline
                color="grey"
                icon="cancel"
                @click="cancelAcc()"
                >取消</q-btn
              >

              <q-btn
                class="margin"
                rounded
                color="orange"
                icon="save"
                @click="saveAcc(focusAcc)"
                >儲存銀行帳戶</q-btn
              >

              <q-btn
                class="margin"
                rounded
                color="red"
                icon="delete"
                @click="deleteAcc(focusAcc)"
                >刪除此帳戶</q-btn
              >
            </div>
          </q-card>

          <q-separator style="margin-bottom: 1em" />

          <div class="row fluid long-padded flex flex-center">
            <div class="col-12 flex flex-col flex-start-center">
              <h4 class="text-dark-green fluid text-left">收入管理</h4>

              <q-form class="fluid flex flex-start-center">
                <q-select
                  outlined
                  v-model="myMonth"
                  :options="months"
                  :dense="dense"
                  :options-dense="denseOpts"
                  style="max-width: 420px; font-size: 32px"
                >
                  <template v-slot:prepend>
                    <q-icon name="event" />
                    <q-separator
                      vertical
                      style="margin-left: 0.6em; margin-right: 1em"
                    />
                    選擇月份
                  </template>
                </q-select>
              </q-form>
            </div>

            <div class="small-space"></div>

            <div id="teacher-table" class="fluid">
              <q-table
                class="fluid"
                flat
                bordered
                rounded
                separator="cell"
                :rows="rows1"
                :columns="columns1"
              >
              </q-table>
            </div>
          </div>
        </div>

        <div class="teacher-profile-card-2" v-if="action == '電子勞務'">
          <h4 class="text-dark-green">電子勞務</h4>
          <h6 class="text-dark-gray no-margin no-padding">基本資料</h6>
          <q-list class="no-margin no-padding">
            <q-item
              class="flex flex-start-center no-margin no-padding"
              v-show="myAccounts.length == 0"
            >
              您目前尚末設定銀行帳戶
            </q-item>
            <q-item
              class="flex flex-start-center no-margin"
              clickable
              v-for="(a, l) in myAccounts"
              :key="l"
              @click="editAcc(l)"
            >
              帳戶{{ l + 1 }}：{{ a.bank_name }} {{ a.bank_code }} (帳號:
              {{ a.bank_account || '待設定' }})
            </q-item>
            <q-item
              clickable
              @click="
                myAccounts.push({
                  bank_name: '新帳戶',
                });
                editAcc(myAccounts.length - 1);
              "
            >
              <h6 class="text-dark-green">
                <q-icon name="add"></q-icon>
                <span class="text-underline">新增銀行帳戶</span>
              </h6>
            </q-item>
          </q-list>

          <q-card
            class="teacher-bank-card flex-col flex-start-center"
            v-if="focusAcc != Infinity"
          >
            <q-form class="flex flex-start-center fluid">
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_name"
                  placeholder="例：中華郵政"
                ></q-input>
              </div>

              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >戶名<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="account_name"
                  placeholder="開戶的真實姓名"
                ></q-input>
              </div>
            </q-form>

            <div class="small-space"></div>

            <q-form class="flex flex-start-center fluid">
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行代碼<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_code"
                  placeholder="例：700"
                ></q-input>
              </div>
              <div style="display: inline-block; width: 45%; max-width: 340px">
                <label class="text-dark-gray margin"
                  >銀行帳號<span class="red star relative">*</span></label
                >
                <q-input
                  class="margin"
                  outlined
                  rounded
                  v-model="bank_account"
                  placeholder="銀行帳號"
                ></q-input>
              </div>
            </q-form>

            <div class="row padded flex flex-end-center">
              <q-btn
                class="margin"
                rounded
                outline
                color="grey"
                icon="cancel"
                @click="cancelAcc()"
                >取消</q-btn
              >

              <q-btn
                class="margin"
                rounded
                color="orange"
                icon="save"
                @click="saveAcc(focusAcc)"
                >儲存銀行帳戶</q-btn
              >

              <q-btn
                class="margin"
                rounded
                color="red"
                icon="delete"
                @click="deleteAcc(focusAcc)"
                >刪除此帳戶</q-btn
              >
            </div>
          </q-card>

          <q-separator style="margin-bottom: 1em" />

          <q-card class="teacher-bank-card flex-col flex-start-center">
            <q-form class="flex flex-start-center fluid">
              <label class="text-dark-gray margin"
                >戶名<span class="red star relative">*</span></label
              >
              <q-input
                class="margin"
                style="display: inline-block; width: 100%"
                outlined
                rounded
                v-model="account_name"
                placeholder="必須等同銀行帳戶的名字"
              ></q-input>
            </q-form>

            <q-form class="flex flex-start-center fluid">
              <label class="text-dark-gray margin"
                >身分證字號<span class="red star relative">*</span></label
              >
              <q-input
                class="margin"
                style="display: inline-block; width: 100%"
                outlined
                rounded
                v-model="id_number"
                placeholder="身分證字號或居留證/護照號碼"
              ></q-input>
            </q-form>

            <q-form class="flex flex-start-center fluid">
              <label class="text-dark-gray margin"
                >聯絡電話<span class="red star relative">*</span></label
              >
              <q-input
                class="margin"
                style="display: inline-block; width: 100%"
                outlined
                rounded
                v-model="myPhone"
                placeholder="手機號碼"
              ></q-input>
            </q-form>

            <q-form class="flex flex-start-center fluid">
              <label class="text-dark-gray margin"
                >戶籍地址<span class="red star relative">*</span></label
              >
              <q-input
                class="margin"
                style="display: inline-block; width: 100%"
                outlined
                rounded
                v-model="myAddr"
                placeholder="戶籍地址"
              ></q-input>
            </q-form>

            <q-form class="flex flex-start-center fluid">
              <label class="text-dark-gray margin fluid"
                >通訊地址<span class="red star relative">*</span></label
              >

              <q-checkbox v-model="sameAddr" label="同戶籍地址" />

              <q-input
                class="margin"
                style="display: inline-block; width: 100%"
                outlined
                rounded
                v-model="myContactAddr"
                placeholder="通訊地址"
              ></q-input>
            </q-form>

            <div class="row padded flex flex-end-center">
              <q-btn
                size="lg"
                rounded
                color="orange"
                icon="save"
                @click="saveAll()"
                >儲存</q-btn
              >
            </div>

            <q-separator style="margin-bottom: 1em" />

            <div class="row flex fluid padded">
              <div class="col-6 flex flex-col flex-start">
                <p class="text-dark-gray">身份證正面</p>
                <q-img
                  :src="id_card_front"
                  style="background-color: #eee"
                ></q-img>

                <q-form class="q-gutter-md">
                  <q-file
                    filled
                    bottom-slots
                    label=".png / .jpg"
                    accept="image/png, image/jpeg"
                    @input="uploadIdCardFront($event)"
                  >
                    <template v-slot:prepend>
                      <q-icon name="cloud_upload" @click.stop.prevent />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        name="close"
                        @click.stop.prevent="model = null"
                        class="cursor-pointer"
                      />
                    </template>

                    <template v-slot:hint> 請上傳圖檔 </template>
                  </q-file>
                </q-form>
              </div>
              <div class="col-6 flex flex-col flex-start">
                <p class="text-dark-gray">身份證反面</p>
                <q-img
                  :src="id_card_back"
                  style="background-color: #eee"
                ></q-img>

                <q-form class="q-gutter-md">
                  <q-file
                    filled
                    bottom-slots
                    label=".png / .jpg"
                    accept="image/png, image/jpeg"
                    @input="uploadIdCardBack($event)"
                  >
                    <template v-slot:prepend>
                      <q-icon name="cloud_upload" @click.stop.prevent />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        name="close"
                        @click.stop.prevent="model = null"
                        class="cursor-pointer"
                      />
                    </template>

                    <template v-slot:hint> 請上傳圖檔 </template>
                  </q-file>
                </q-form>
              </div>
            </div>

            <q-separator style="margin-bottom: 1em" />

            <div class="row fluid padded flex flex-center">
              <div class="col-12 flex flex-col flex-start-center">
                <h4 class="text-dark-green fluid text-left">電子勞務管理</h4>

                <q-form class="fluid flex flex-start-center">
                  <q-select
                    outlined
                    v-model="myMonth"
                    :options="months"
                    :dense="dense"
                    :options-dense="denseOpts"
                    style="max-width: 420px; font-size: 32px"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" />
                      <q-separator
                        vertical
                        style="margin-left: 0.6em; margin-right: 1em"
                      />
                      選擇月份
                    </template>
                  </q-select>
                </q-form>
              </div>
            </div>
            <div id="teacher-table" class="fluid">
              <q-table
                class="fluid"
                flat
                bordered
                rounded
                separator="cell"
                :rows="rows"
                :columns="columns"
              >
              </q-table>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <!--
    <div class="row long-padded" v-else>
      <h2 class="text-dark-green fluid">老師後台</h2>
      <div class="col-2 col-sm-4 col-md-3 col-xs-12 flex-col flex-start-center">
        <q-select v-model="action" :options="['教師簡介', '課程清單', '新增課程']" label="請選擇一項功能" style="width: 90%"></q-select>
      </div>
      <div class="col-10 col-sm-8 col-md-9 col-xs-12 flex-col flex-center">
        <q-card class="profile-card" v-if="action == '教師簡介'">
          <h4 class="text-left text-dark-green fluid">教師簡介</h4>
          <div class="row">
            <div class="col-6 col-md-6 col-sm-8 col-xs-8 flex-col">
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">真實姓名<span class="red star">*</span></label>
                <q-input class="margin" v-model="myName" placeholder="姓名*" style="max-width: 300px;" @focus="focusDate = []; focusMyDate = false">
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin inline-block">簡介<span class="red star">*</span></label>
                <q-input type="textarea" class="margin" v-model="newDes" placeholder="簡介" style="max-width: 300px;" @focus="focusMyDate = true" @click="focusMyDate = true">
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin inline-block">教學理念<span class="red star">*</span></label>
                <q-input type="textarea" class="margin" v-model="newThought" placeholder="教學理念" style="max-width: 300px;">
                </q-input>
              </q-form>
              <q-input v-model="newCer" placeholder="專業證照(選填)" style="width: 280px;">
                <template v-slot:prepend>
                  <q-icon name="add" color="green" />
                </template>
                <template v-slot:append>
                  <q-btn color="secondary" @click="addCer()">新增</q-btn>
                </template>
              </q-input>
              <q-list>
                <q-item v-for= "(c, k) in newCertifications || []" :key="k">
                  <div class="flex margin">{{c}}</div>
                  <div class="filler"></div>
                  <q-btn size="xs margin" color="red" @click="removeCer(k)">
                    <q-icon name="delete"></q-icon>
                  </q-btn>
                </q-item>
              </q-list>
            </div>
            <div class="filler"></div>
            <div class="col-6 col-md-4 col-sm-4 col-xs-4 flex flex-col flex-start-center">
              <img class="big avatar" :src = "myImg || myPhotoURL" />
              <q-btn unelevated class="no-border no-bg text-dark-green" @click="editP = true">編輯</q-btn>
              <q-form class="flex flex-start-center fluid" v-show='editP'>
                <q-file color="teal" filled label="上傳大頭貼" accept="image/*" @input="uploadImage($event)" name="photoURL">
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" />
                  </template>
                </q-file>
              </q-form>
            </div>
          </div>
          <q-form>
            <q-btn unelevated rounded color="blue" @click="previewProfile()" size="lg">預覽</q-btn>
            <q-btn unelevated rounded class="margin  or-back text-white" @click="submit()" size="lg">更新資料</q-btn>
            <q-btn unelevated rounded class="margin or-border text-orange" @click="cancel()" size="lg">取消</q-btn>
          </q-form>
        </q-card>
        <q-card class="editC-card" v-if = "action == '課程清單' && (editC !== '')">
          <div class="col flex-col flex-center">
            <q-form class="fluid">
              <div class="row flex flex-center">
                <div class="col flex flex-col">
                  <q-img class="small-img margin" v-show="newClassImg" :src="newClassImg"></q-img>
                  <div class="row flex flex-center">
                    <q-img class="avatar margin" v-show="myImg" :src="myImg"></q-img>
                  </div>
                </div>
              </div>

              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">課程名稱
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newTitle" placeholder="課程名稱">
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">課程封面圖網址
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newClassImg" placeholder="課程封面圖網址">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">中文課程說明
                  <span class="red star">*</span></label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newZh" placeholder="中文課程說明">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">英文課程說明</label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newEn" placeholder="英文課程說明">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">中文教師簡介
                  <span class="red star">*</span></label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newT_Zh" placeholder="中文教師簡介">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">英文教師簡介</label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newT_En" placeholder="英文教師簡介">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">標籤</label>
                <q-input class="margin" outlined rounded v-model="newTags" placeholder="標籤">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">課程地點
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newLocation" placeholder="課程地點">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">課程地址</label>
                <q-input class="margin" outlined rounded v-model="newAddr" placeholder="課程地址">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">課程連結(僅線上課需填)</label>
                <q-input class="margin" outlined rounded v-model="newHref" placeholder="課程連結(僅線上課需填)">
                </q-input>
              </q-form>
              <q-form>
                <div class="flex-col fluid flex-start">
                  <label class="text-gray margin">課程日期/時間</label>
                  <label class="text-gray margin" v-for="(c,k) in newClasses" :key="k">
                    {{ c.d }} {{ c.t }}
                    <q-btn class="margin" rounded @click="removeDateTime(k)" color="red" icon="event_available">移除</q-btn>
                  </label>
                  <label class="text-gray margin">{{newDate}} {{newTime}}  ~ {{newEndTime}}
                    <q-btn class="margin" rounded @click="addDateTime()" color="orange" icon="event_available">加入</q-btn>
                  </label>
                </div>
                <div class="q-gutter-md row items-start">
                  <q-date v-model="newDate" color="purple" />
                  <q-time v-model="newTime" color="green" />
                  <q-time v-model="newEndTime" color="blue" />
                </div>
              </q-form>
              <q-form>
                <label class="text-gray margin">最低人數</label>
                <q-input type="number" class="margin" outlined rounded v-model="newMin" placeholder="最低人數" step="1" min="1">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">最高人數</label>
                <q-input type="number" class="margin" outlined rounded v-model="newMax" placeholder="最高人數" step="1" min="1">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">原價</label>
                <q-input type="text" class="margin" outlined rounded v-model="newOldPrice" placeholder="原價" hint="原價">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">原價</label>
                <q-input type="text" class="margin" outlined rounded v-model="newNewPrice" placeholder="售價" hint="售價">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">顯示價格
                  <span class="red star">*</span></label>
                <q-input type="text" class="margin" outlined rounded v-model="newPrice" placeholder="顯示價格">
                </q-input>
              </q-form>
            </q-form>
            <div class="row flex flex-center">
              <q-btn color="primary" class="margin" rounded @click="updateC(editC)"><q-icon name="update"></q-icon>更新</q-btn>
              <q-btn color="blue" class="margin" rounded @click="copyC()"><q-icon name="content_copy"></q-icon>複製</q-btn>
              <q-btn color="red" class="margin" rounded @click="deleteC(editC)"><q-icon name="delete"></q-icon>刪除</q-btn>
            </div>
          </div>
        </q-card>
        <q-list v-show = "action == '課程清單'">
          <q-item v-for="(i,k) in classes" :key="k">
            <a class="fluid text-center flex flex-start-center text-black" @click="startEditC(i.id)" :class="{disabled: i.tid !== uid}">
              <img class="avatar round margin" :src="i.img" :alt="i.title" />
              {{i.title}}
            </a>
          </q-item>
        </q-list>
        <q-card class="editC-card" v-show = "action == '新增課程'">
          <div class="col flex-col flex-center">
            <q-form class="fluid">
              <div class="row flex flex-center">
                <div class="col flex flex-col">
                  <q-img class="small-img margin" v-show="newClassImg" :src="newClassImg"></q-img>
                  <div class="row flex flex-center">
                    <q-img class="avatar margin" v-show="myImg" :src="myImg"></q-img>
                  </div>
                </div>
              </div>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">課程Id
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newCid" placeholder="課程Id">
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">課程名稱
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newTitle" placeholder="課程名稱">
                </q-input>
              </q-form>
              <q-form class="flex flex-start-center fluid row">
                <label class="text-gray margin">課程封面圖網址
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newClassImg" placeholder="課程封面圖網址">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">中文課程說明
                  <span class="red star">*</span></label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newZh" placeholder="中文課程說明">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">英文課程說明</label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newEn" placeholder="英文課程說明">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">中文教師簡介
                  <span class="red star">*</span></label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newT_Zh" placeholder="中文教師簡介">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">英文教師簡介</label>
                <q-input type="textarea" class="margin" outlined rounded v-model="newT_En" placeholder="英文教師簡介">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">標籤</label>
                <q-input class="margin" outlined rounded v-model="newTags" placeholder="標籤">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin">課程地點
                  <span class="red star">*</span></label>
                <q-input class="margin" outlined rounded v-model="newLocation" placeholder="課程地點">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">課程地址</label>
                <q-input class="margin" outlined rounded v-model="newAddr" placeholder="課程地址">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">課程連結(僅線上課需填)</label>
                <q-input class="margin" outlined rounded v-model="newHref" placeholder="課程連結(僅線上課需填)">
                </q-input>
              </q-form>
              <q-form>
                <div class="flex-col fluid flex-start">
                  <label class="text-gray margin">課程日期/時間</label>
                  <label class="text-gray margin" v-for="(c,k) in newClasses" :key="k">
                    {{ c.d }} {{ c.t }}
                    <q-btn class="margin" rounded @click="removeDateTime(k)" color="red" icon="event_available">移除</q-btn>
                  </label>
                  <label class="text-gray margin">{{newDate}} {{newTime}}  ~ {{newEndTime}}
                    <q-btn class="margin" rounded @click="addDateTime()" color="orange" icon="event_available">加入</q-btn>
                  </label>
                </div>
                <div class="q-gutter-md row items-start">
                  <q-date v-model="newDate" color="purple" />
                  <q-time v-model="newTime" color="green" />
                  <q-time v-model="newEndTime" color="blue" />
                </div>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">最低人數</label>
                <q-input type="number" class="margin" outlined rounded v-model="newMin" placeholder="最低人數" step="1" min="1">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">最高人數</label>
                <q-input type="number" class="margin" outlined rounded v-model="newMax" placeholder="最高人數" step="1" min="1">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">原價</label>
                <q-input type="text" class="margin" outlined rounded v-model="newOldPrice" placeholder="原價" hint="原價">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">原價</label>
                <q-input type="text" class="margin" outlined rounded v-model="newNewPrice" placeholder="售價" hint="售價">
                </q-input>
              </q-form>
              <q-form>
                <label class="text-gray margin inline-block">顯示價格
                  <span class="red star">*</span></label>
                <q-input type="text" class="margin" outlined rounded v-model="newPrice" placeholder="顯示價格">
                </q-input>
              </q-form>
            </q-form>
            <div class="row flex flex-center">
              <q-btn color="blue" class="margin" rounded @click="previewClass()"><q-icon name="preview"></q-icon>預覽</q-btn>
              <q-btn color="primary" class="margin" rounded @click="newC(newCid)"><q-icon name="upload"></q-icon>送出</q-btn>
            </div>
          </div>
        </q-card>
      </div>
    </div> -->
  </q-page>
</template>

<script lang="ts">
import convert from 'image-file-resize';
import { useMeta } from 'quasar';
import { Meta } from 'components/models';

import {
  QCalendarMonth,
  parseDate,
  today,
} from '@quasar/quasar-ui-qcalendar/src/index.js';
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass';
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass';
import NavigationBar from '../components/NavigationBar.vue';

// import ExampleComponent from 'components/ExampleComponent.vue'
// import InApp from 'detect-inapp'
import { useDatabase } from 'vuefire';
import { ref as dbRef, set } from 'firebase/database';
import { defineComponent, ref } from 'vue';

const db = useDatabase();

function my_parse_dateTime(dt: string) {
  return dt
    .replace(/\s*\(.+\)\s*/, '')
    .replace(/T/, ' ')
    .replace(/\s+-\s*.+$/, '');
}

function getDay(day: any) {
  const newDay = new Date(day);
  const tm = parseDate(newDay);
  return tm.date;
}

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  props: [
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
    'myKey',
    'isAdmin',
    'isTeacher',
    'logs',
  ],
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  setup() {
    const metaData = {
      title: '老師後台',
      noscript: {
        default: 'This is content for browsers with no JS (or disabled JS)',
      },
    };
    useMeta(metaData);

    const meta = ref<Meta>({
      totalCount: 1200,
    });

    const saved = ref(false);

    const myMonth = ref('');
    const months = ref(['2023-05', '2023-06', '2023-07', '2023-08']);

    const myPhone = ref('');
    const account_name = ref('');
    const bank_name = ref('');
    const bank_code = ref('');
    const bank_account = ref('');

    const arrC: any[] = [];
    const myAccounts = ref(arrC);

    const myAddr = ref('');
    const myContactAddr = ref('');
    const id_number = ref('');

    const id_card_front = ref('');
    const id_card_back = ref('');

    const sameAddr = ref(false);

    const focusAcc = ref(Infinity);

    const done1 = ref(false);
    const done2 = ref(false);
    const done3 = ref(false);
    const myName = ref('');
    const new_email = ref('');
    const slide = ref('style');
    const step = ref(1);
    const myKey2 = ref('');
    const action = ref('');
    const newDes = ref('');
    const newThought = ref('');

    const inner_options = ref([
      {
        t: '教師檔案',
      },
      {
        t: '新增課程',
      },
      {
        t: '教學管理',
      },
      {
        t: '收入概覽',
      },
      {
        t: '電子勞務',
      },
    ]);

    const options = ref([
      {
        t: '會員資料',
        path: '/profile',
      },
      {
        t: '會員專區',
        path: '/member_only',
      },
      {
        t: '我的課程',
        path: '/cal',
      },
      {
        t: '訂單管理',
        path: '/cart',
      },
      {
        t: '我的點數',
        path: '/my_point',
      },
    ]);

    const arr2: any[] = [];
    const newClasses = ref(arr2);
    const newDate = ref('');
    const newTime = ref('');
    const newEndTime = ref('');

    const myImg = ref('');
    const newCer = ref('');
    const newZh = ref('');
    const newEn = ref('');
    const newTags = ref('');
    const newT_Zh = ref('');
    const newT_En = ref('');
    const newMin = ref(1);
    const newMax = ref(10);
    const newOldPrice = ref('NT$0');
    const newNewPrice = ref('NT$0');
    const newPrice = ref('NT$0');
    const newTitle = ref('');
    const newLocation = ref('');
    const newAddr = ref('');
    const newHref = ref('');
    const newClassImg = ref('');

    const myOption = ref({
      explore: 'all',
      hoverExplore: '',
      age: 'all',
      hoverAge: '',
      place: 'all',
      hoverPlace: '',
      date: 'all',
      hoverDate: '',
      price: 'all',
      hoverPrice: '',
      sorting: 'newest',
      hoverSorting: '',
    });
    const hoverD = ref('');
    const showD = ref('');

    const arr: string[] = [];
    const newCertifications = ref(arr);

    const editP = ref(false);
    const editC = ref('');

    let d = new Date();
    let cid =
      d.getFullYear() +
      '_' +
      (d.getMonth() + 1) +
      '_' +
      d.getDate() +
      '_' +
      ('' + Math.random()).substring(3, 12);

    const newCid = ref(cid);
    const myPhotoURL = ref('');

    const previewP = ref(false);
    const previewC = ref(false);

    const columns = [
      {
        name: 'interval',
        label: '計酬區間',
        field: 'interval',
        align: 'left',
      },
      {
        name: 'predict',
        label: '預覽勞務報酬單',
        field: 'predict',
        align: 'left',
      },
      {
        name: 'confirm',
        label: '確認勞務報酬單',
        field: 'confirm',
        align: 'left',
      },
    ];

    const rows = [
      {
        interval: '線上課程｜Koala U. SEL 情緒無尾熊課程',
        predict: 'NT$12,000',
        confirm: 'NT$12,000',
      },
    ];

    const columns1 = [
      {
        name: 'name',
        label: '課程名稱',
        field: 'name',
        align: 'left',
      },
      {
        name: 'income',
        label: '課程金額',
        field: 'income',
        align: 'left',
      },
      {
        name: 'discount',
        label: '折扣金額',
        field: 'discount',
        align: 'left',
      },
      {
        name: 'details',
        label: '詳細資訊',
        field: 'details',
        align: 'left',
      },
    ];

    const rows1 = [
      {
        name: '線上課程｜Koala U. SEL 情緒無尾熊課程',
        income: 'NT$12,000',
        discount: 'NT$12,000',
        collection: 'NT$12,000',
        details: '線上課程｜Koala U. SEL 情緒無尾熊課程',
      },
    ];

    const selectedDate = ref(today());
    const dateType = ref('square');

    const role = ref('老師');
    const op = ref('課程一覽');
    const filter_act = ref('所有課程');

    return {
      saved,
      role,
      filter_act,
      op,
      selectedDate,
      dateType,
      myOption,
      hoverD,
      showD,
      columns,
      rows,
      columns1,
      rows1,
      myMonth,
      months,
      sameAddr,
      id_card_front,
      id_card_back,
      myAddr,
      myContactAddr,
      id_number,
      myPhone,
      account_name,
      bank_name,
      bank_code,
      bank_account,
      options,
      inner_options,
      action,
      myAccounts,
      focusAcc,
      previewP,
      previewC,
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
      newCer,
      editP,
      myPhotoURL,
      editC,
      newDes,
      newThought,
      myImg,
      newCertifications,
      myName,
      new_email,
      meta,
      step,
      slide,
      myKey2,
      done1,
      done2,
      done3,
    };
  },
  mounted() {
    this.myPhone = this.me.phone || '';
    this.bank_account = this.me.bank_account || '';
    this.bank_code = this.me.bank_code || '';
    this.account_name =
      this.me.account_name ||
      (this.me.accounts || [{}])[0].account_name ||
      this.me.name ||
      '';

    this.id_number = this.me.id_number || '';
    this.id_card_front = this.me.id_card_front || '';
    this.id_card_back = this.me.id_card_back || '';

    this.myAddr = this.me.addr || '';
    this.myContactAddr = this.me.contact_addr || '';
    this.sameAddr = this.me.same_addr || false;

    this.myAccounts = this.me.accounts || [];

    this.myName = this.me.name || '';
    this.newDes = this.me.des || '';
    this.newThought = this.me.thought || '';
    this.myImg = this.me.img || this.me.photoURL || '';
    this.myPhotoURL = this.me.photoURL || '';
    this.newCertifications = this.me.certifications || [];
  },
  watch: {
    newCertifications(nC, oC) {
      if (nC.length != oC.length) {
        this.saved = false;
      }
    },
    newDes(nD, oD) {
      if (nD != oD) {
        this.saved = false;
      }
    },
    newThought(nT, oT) {
      if (nT != oT) {
        this.saved = false;
      }
    },
    myName(nN, oN) {
      if (nN != oN) {
        this.saved = false;
      }
    },
    myAddr(nA) {
      if (this.sameAddr) {
        this.myContactAddr = nA;
      }
    },
    sameAddr(newS) {
      if (newS) {
        this.myContactAddr = this.myAddr;
      }
    },
    me(newM) {
      this.myPhone = newM.phone || '';
      this.bank_account = newM.bank_account || '';
      this.bank_code = newM.bank_code || '';
      this.account_name = newM.account_name || '';

      this.id_number = newM.id_number || '';
      this.id_card_front = newM.id_card_front || '';
      this.id_card_back = newM.id_card_back || '';

      this.myAddr = newM.addr || '';
      this.myContactAddr = newM.contact_addr || '';
      this.sameAddr = newM.same_addr || false;

      this.myAccounts = newM.accounts || [];

      this.myPhone = newM.phone || '';
      this.myName = newM.name || '';
      this.newDes = newM.des || '';
      this.newThought = newM.thought || '';
      this.myImg = newM.img || this.me.photoURL || '';
      this.myPhotoURL = newM.photoURL || '';
      this.newCertifications = newM.certifications || [];
    },
  },
  computed: {
    eventsTeacherMap() {
      const map: any = {};
      var cls = Object.values(this.classes) || [];
      if (cls && cls.length > 0) {
        if (this.filter_act == '由我開的課程') {
          cls = cls.filter((o: any) => {
            return o.tid == this.uid;
          });
        }

        if (this.filter_act == '已結束課程') {
          cls = cls.filter((o: any) => {
            let last = (o.classes || []).at(-1);
            if (!last) {
              return false;
            } else {
              let datetime =
                last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                'T' +
                last.t;

              return (
                new Date(my_parse_dateTime(datetime)).getTime() <
                new Date().getTime()
              );
            }
          });
        }

        if (this.filter_act == '即將開課') {
          cls = cls.filter((o: any) => {
            let last = (o.classes || []).at(-1);
            if (!last) {
              return false;
            } else {
              let datetime =
                last.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '') +
                'T' +
                last.t;

              return (
                new Date(my_parse_dateTime(datetime)).getTime() -
                  new Date().getTime() >
                  -1000 * 60 * 60 * 24 * 1 &&
                new Date(my_parse_dateTime(datetime)).getTime() -
                  new Date().getTime() <
                  1000 * 60 * 60 * 24 * 30
              );
            }
          });
        }

        cls = cls.map((o: any) => {
          let obj = { ...o };
          obj.date = o.startdate
            .replace(/\//g, '-')
            .replace(/\s*(\(.+\))/g, '')
            .replace(/T.+$/, '');
          //console.log(obj.date)
          obj.dates = (o.classes || []).map((c: any) => {
            let date2 = getDay(
              c.d.replace(/\//g, '-').replace(/\s*(\(.+\))/g, '')
            );
            return date2;
          });
          //console.log(obj.dates)
          return obj;
        });

        cls.sort((a: any, b: any) => {
          // console.log(a)
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        cls.forEach((ev: any) => {
          ev.dates.forEach((dt: string) => {
            (map[dt] = map[dt] || []).push(ev);
          });
        });
      }
      // console.log(map)
      return map;
    },
  },
  methods: {
    setRole(r: string) {
      this.role = r;
    },
    setFil(f: string) {
      this.filter_act = f;
    },
    setOp(o: string) {
      this.op = o;
    },
    badgeClasses(k: number, type: any, bgcolor: string) {
      // console.log(type)
      const colors = [
        'green',
        'brown',
        'red',
        'blue',
        'purple',
        'orange',
        'yellow',
      ];
      return {
        [`text-white bg-${bgcolor || colors[k]}`]: true,
        'rounded-border': true,
      };
    },
    badgeStyles(day: any) {
      const s: any = {};
      // s.left = day.weekday === 0 ? 0 : (day.weekday * this.parsedCellWidth) + '%'
      // s.top = 0
      // s.bottom = 0
      // s.width = (event.days * this.parsedCellWidth) + '%'
      if (day) {
        s.bottom = 1.2 * parseInt(day) + 0.4 + 'em';
      }
      // console.log(day)
      // console.log(event)
      return s;
    },
    onToday() {
      this.selectedDate = today();
      const cal: any = this.$refs.calendar;
      cal.moveToToday();
    },
    onPrev() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() - 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
      const cal: any = this.$refs.calendar;
      cal.prev();
    },
    onNext() {
      const nd = new Date(this.selectedDate);
      const tt = nd.getTime() + 1000 * 60 * 60 * 24 * 30;
      this.selectedDate = new Date(tt).toLocaleDateString().replace(/\//g, '-');
      const cal: any = this.$refs.calendar;
      cal.next();
    },
    onMoved(data: string) {
      console.log('onMoved', data);
    },
    onChange(data: string) {
      console.log('onChange', data);
    },
    onClickDate(data: string) {
      console.log('onClickDate', data);
    },
    onClickDay(data: string) {
      console.log('onClickDay', data);
    },
    onClickWorkweek(data: string) {
      console.log('onClickWorkweek', data);
    },
    onClickHeadDay(data: string) {
      console.log('onClickHeadDay', data);
    },
    onClickHeadWorkweek(data: string) {
      console.log('onClickHeadWorkweek', data);
    },
    goto(rid: string) {
      this.$router.push('/class_info/' + rid);
    },
    gotoT(tid: string) {
      if (
        this.saved ||
        window.confirm('確定要前往嗎？您未儲存的更動將會遺失')
      ) {
        this.$router.push('/teacher_user_info/' + tid);
      }
    },
    sel(o: any) {
      this.action = o.t;
      // this changes the scrolling behavior to "smooth"
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    editAcc(l: number) {
      this.focusAcc = l;
      this.account_name = this.myAccounts[l].account_name;
      this.bank_name = this.myAccounts[l].bank_name;
      this.bank_code = this.myAccounts[l].bank_code;
      this.bank_account = this.myAccounts[l].bank_account;
    },
    cancelAcc() {
      this.focusAcc = Infinity;
      this.myAccounts = this.myAccounts.filter((o) => {
        return o.bank_name !== '新帳戶';
      });
    },
    saveAll() {
      if (!this.account_name) {
        window.alert('請先輸入您的姓名');
        return;
      }
      if (!this.myPhone) {
        window.alert('請先輸入您的手機號碼');
        return;
      }
      if (!this.id_number) {
        window.alert('請先輸入您的身份證字號');
        return;
      }
      if (!this.myAddr) {
        window.alert('請先輸入您的地址');
        return;
      }
      set(dbRef(db, 'users/' + this.uid + '/account_name'), this.account_name);
      set(dbRef(db, 'users/' + this.uid + '/phone'), this.myPhone);
      set(dbRef(db, 'users/' + this.uid + '/addr'), this.myAddr);
      set(
        dbRef(db, 'users/' + this.uid + '/contact_addr'),
        this.myContactAddr || this.myAddr
      );
      set(dbRef(db, 'users/' + this.uid + '/same_addr'), this.sameAddr);
      set(
        dbRef(db, 'users/' + this.uid + '/id_card_front'),
        this.id_card_front
      );
      set(dbRef(db, 'users/' + this.uid + '/id_card_back'), this.id_card_back);
      set(dbRef(db, 'users/' + this.uid + '/id_number'), this.id_number).then(
        () => {
          console.log('user updated');
          window.alert('資料已更新');
        }
      );
    },
    saveAcc(l: number) {
      this.myAccounts[l] = {
        account_name: this.account_name,
        bank_name: this.bank_name,
        bank_code: this.bank_code,
        bank_account: this.bank_account,
      };
      set(dbRef(db, 'users/' + this.uid + '/accounts'), this.myAccounts).then(
        () => {
          console.log('accounts updated!');
          this.focusAcc = Infinity;
        }
      );
    },
    deleteAcc(l: number) {
      if (window.confirm('確定要移除此帳戶嗎？這可能導至您的權益受損')) {
        var arr = [...this.myAccounts];
        for (let k = 0; k < this.myAccounts.length; k++) {
          if (k != l) {
            arr.push(this.myAccounts[k]);
          }
        }

        this.myAccounts = [...arr];

        set(dbRef(db, 'users/' + this.uid + '/accounts'), this.myAccounts).then(
          () => {
            console.log('account deleted!');
            this.focusAcc = Infinity;
          }
        );
      }
    },
    addDateTime() {
      if (!this.newDate || !this.newTime || !this.newEndTime) {
        window.alert('請先選取日期/時間/結束時間');
        return;
      } else {
        const arr = this.newClasses || [];
        arr.push({
          d: this.newDate,
          t: this.newTime + ' - ' + this.newEndTime,
        });
        this.newClasses = arr;
      }
    },
    removeDateTime(k: number) {
      const arr = this.newClasses || [];
      const ans = [];
      for (let j = 0; j < arr.length; j++) {
        if (j !== k) {
          ans.push(arr[j]);
        }
      }
      this.newClasses = ans;
    },
    previewProfile() {
      this.previewP = true;
    },
    previewClass() {
      this.previewC = true;
    },
    startEditC(cid: string) {
      if (cid !== this.uid) {
        window.alert('這不是您的課程，無法編輯');
        return;
      }
      const arr = this.classes;
      const obj = arr[cid];
      this.newTitle = obj.title || '';
      this.newHref = obj.href || '';
      this.newClassImg = obj.img || '';
      this.newClasses = obj.classes || [];
      this.myImg = obj.teacher_img || '';
      this.newZh = obj.zh || '';
      this.newEn = obj.en || '';
      this.newT_Zh = obj.t_zh || '';
      this.newT_En = obj.t_en || '';
      this.newLocation = obj.location || '';
      this.newAddr = obj.addr || '';
      this.newOldPrice = obj.old_price || '0';
      this.newNewPrice = obj.new_price || '0';
      this.newPrice = obj.price || '0';
      this.newTags = (obj.tags || []).join(',');
      this.editC = cid;
    },
    updateC(cid: string) {
      set(dbRef(db, 'classes/' + cid + '/id'), cid);
      set(dbRef(db, 'classes/' + cid + '/en'), this.newEn);
      set(dbRef(db, 'classes/' + cid + '/zh'), this.newZh);
      set(dbRef(db, 'classes/' + cid + '/tid'), this.uid);
      set(dbRef(db, 'classes/' + cid + '/t_en'), this.newT_En);
      set(dbRef(db, 'classes/' + cid + '/t_zh'), this.newT_Zh);
      set(
        dbRef(db, 'classes/' + cid + '/showClass'),
        this.classes[cid].showClass
      );
      set(dbRef(db, 'classes/' + cid + '/old_price'), this.newOldPrice);
      set(dbRef(db, 'classes/' + cid + '/new_price'), this.newNewPrice);
      set(dbRef(db, 'classes/' + cid + '/price'), this.newPrice);
      set(dbRef(db, 'classes/' + cid + '/teacher'), this.me.name || '');
      set(dbRef(db, 'classes/' + cid + '/teacher_img'), this.myImg);
      set(dbRef(db, 'classes/' + cid + '/tags'), this.newTags.split(','));
      set(dbRef(db, 'classes/' + cid + '/img'), this.newClassImg);
      set(dbRef(db, 'classes/' + cid + '/location'), this.newLocation);
      set(dbRef(db, 'classes/' + cid + '/addr'), this.newAddr);
      set(dbRef(db, 'classes/' + cid + '/href'), this.newHref);
      set(dbRef(db, 'classes/' + cid + '/classes'), this.newClasses);
      set(dbRef(db, 'classes/' + cid + '/title'), this.newTitle).then(() => {
        console.log('class updated!');
        window.alert('課程資訊已更新');
      });
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
          tid: this.uid,
          title: this.newTitle || '',
          teacher: this.me.name || '',
          teacher_img: this.myImg,
          classes: this.newClasses || [],
          showClass: true,
          zh: this.newZh || '',
          en: this.newEn || '',
          location: this.newLocation || '',
          addr: this.newAddr,
          href: this.newHref,
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
            '教師(id: ' +
            this.uid +
            ', 名稱: ' +
            this.myName +
            ')已上傳新課程(id: ' +
            cid +
            ', 名稱: ' +
            this.newTitle +
            ')，等待審核中',
          from: this.uid,
          type: '教師',
          classes: this.newClasses || [],
        });

        set(dbRef(db, 'logs'), logs).then(() => {
          console.log('logs updated!');
        });

        set(dbRef(db, 'classes/' + cid), {
          id: cid,
          en: this.newEn,
          zh: this.newZh,
          tid: this.uid,
          t_en: this.newT_En,
          t_zh: this.newT_Zh,
          showClass: false,
          old_price: this.newOldPrice,
          new_price: this.newNewPrice,
          price: this.newPrice,
          teacher: this.myName,
          teacher_img: this.myImg,
          tags: this.newTags.split(','),
          img: this.newClassImg,
          location: this.newLocation,
          addr: this.newAddr,
          href: this.newHref,
          title: this.newTitle,
          classes: this.newClasses || [],
        }).then(() => {
          console.log('class updated!');

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
          window.alert('課程資訊已上傳，等待管理員審核中');
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
                '用戶' +
                this.me.name +
                '(' +
                this.me.email +
                ') 提出了新課程申請，請至管理員系統查看',
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
              'Colearna_新課程申請',
              '用戶' +
                this.me.name +
                '(' +
                this.me.email +
                ') 提出了新課程申請，請至<a href="https://next.colearna.co/admin" target="_blank" rel="noopener norefferer">管理員系統</a>查看'
            );
          }
        }
      }
    },
    uploadImage(event: Event) {
      const uid = this.uid;
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

        if (w / h > 1.4) {
          errMSG =
            '寬高比過大，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (w / h < 0.7) {
          errMSG =
            '寬高比過小，上傳時將會重設為，120 x 120，這將嚴重扭曲圖片，確定要上傳嗎？';
        }

        if (!errMSG || window.confirm(errMSG)) {
          convert({
            file: file,
            width: 120,
            height: 120,
            type: 'png',
          })
            .then((resp: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(resp);
              reader.onload = (e) => {
                /* eslint-disable  @typescript-eslint/no-non-null-assertion */
                set(dbRef(db, 'users/' + uid + '/img'), e.target!.result).then(
                  () => {
                    console.log('image updated!');
                  }
                );
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                set(
                  dbRef(db, 'users_public/' + uid + '/img'),
                  e.target!.result
                );
              };
            })
            .catch((error: string) => {
              console.log(error);
            });
        }
      };
    },
    uploadIdCardFront(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'id_card_front';
      i.onload = () => {
        convert({
          file: file,
          width: 860 * 2,
          height: 540 * 2,
          type: 'png',
        })
          .then((resp: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(resp);
            reader.onload = (e) => {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              set(
                dbRef(db, 'users/' + uid + '/id_card_front'),
                e.target!.result
              ).then(() => {
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                console.log('id_card_front updated!');
              });
            };
          })
          .catch((error: string) => {
            console.log(error);
          });
      };
    },
    uploadIdCardBack(event: Event) {
      const uid = this.uid;
      var i = document.createElement('img');
      // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
      const file = (event.target! as HTMLInputElement).files![0];
      var blob = URL.createObjectURL(file);
      i.src = blob;
      i.name = 'id_card_back';
      i.onload = () => {
        convert({
          file: file,
          width: 860 * 2,
          height: 540 * 2,
          type: 'png',
        })
          .then((resp: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(resp);
            reader.onload = (e) => {
              // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
              set(
                dbRef(db, 'users/' + uid + '/id_card_back'),
                e.target!.result
              ).then(() => {
                // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
                console.log('id_card_back updated!');
              });
            };
          })
          .catch((error: string) => {
            console.log(error);
          });
      };
    },
    removeCer(k: number) {
      var arr: string[] = [...this.newCertifications];
      arr = arr.filter(function (c, j) {
        return j != k;
      });
      this.newCertifications = [...arr];
    },
    addCer() {
      var arr: string[] = [...this.newCertifications];
      arr.push(this.newCer);
      this.newCer = '';
      this.newCertifications = [...arr];
    },
    go() {
      this.$nextTick(() => {
        this.step++;
      });
    },
    loginGoogle() {
      this.$emit('loginGoogle');
    },
    logout() {
      this.$emit('logout');
    },
    cancel() {
      this.action = '';
    },
    submit() {
      if (!this.myName) {
        window.alert('請先輸入您的姓名');
        return;
      }
      if (!this.newDes) {
        window.alert('請先輸入您的簡介');
        return;
      }
      if (!this.newThought) {
        window.alert('請先輸入您的教學理念');
        return;
      }
      set(dbRef(db, 'users/' + this.uid + '/des'), this.newDes || '');

      set(dbRef(db, 'users/' + this.uid + '/thought'), this.newThought || '');

      set(
        dbRef(db, 'users/' + this.uid + '/certifications'),
        this.newCertifications || []
      );

      set(
        dbRef(db, 'users/' + this.uid + '/photoURL'),
        this.myImg || this.myPhotoURL || this.me.photoURL || ''
      ).then(() => {
        this.saved = true;
        console.log('user data updated!');
        window.alert('資料已更新');
      });

      const logs: Array<any> = [...this.logs] || [];

      logs.push({
        time: new Date().getTime(),
        msg: '教師(id: ' + this.uid + ', 名稱: ' + this.myName + ')已更新資料',
        from: this.uid,
        type: '教師',
      });

      set(dbRef(db, 'logs'), logs).then(() => {
        console.log('logs updated!');
      });

      set(dbRef(db, 'users_public/' + this.uid), {
        id: this.uid,
        name: this.myName || '',
        img: this.myImg || this.myPhotoURL,
        photoURL: this.myPhotoURL || this.photoURL,
        isParent: true,
        isTeacher: this.isTeacher || false,
        isAdmin: this.isAdmin || false,
        des: this.me.des || '',
        thought: this.me.thought || '',
        certifications: this.me.certifications || [],
        createTime: this.me.createTime || new Date().getTime(),
        updateTime: new Date().getTime(),
      }).then(() => {
        console.log('public user data updated!');
      });
    },
  },
});
</script>

<style scoped>
/* Single Page Style */

.q-field__control {
  margin-left: 1em;
  max-width: 200px;
}

.q-btn#ser {
  margin-left: 1em;
  max-height: 1.5em !important;
}

.teacher {
  display: inline-flex;
  flex-direction: column;
  margin: 5em;
}

.q-stepper__nav {
  display: flex;
  flex-direction: row-reverse;
}

.q-stepper__nav .q-btn {
  max-height: 2.6em;
}

.teacher-profile-card {
  padding: 1.2em 0;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-2 {
  padding: 1.2em 2em;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-3 {
  padding: 1.2em 0;
  border-radius: 15px;
  margin: 2em 0;
  box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
  -moz-box-shadow: 0px 3px 5px 1px rgba(112, 112, 112, 0.75);
}

.teacher-profile-card-3 h2,
.teacher-profile-card-3 h4 {
  padding: 0 22px;
}

.teacher-profile-card .big.avatar {
  border-radius: 50%;
}

.teacher-bank-card {
  padding: 2em;
  width: 100%;
  border: none;
  box-shadow: none;
}

@media screen and (max-width: 831px) {
  .teacher {
    margin: 1em;
  }
}
</style>
