<template>
  <div class="pop-container-2" v-if="previewC" style="display: block">
    <div class="pop-back-2 clickable" @click="endPreview()">
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
                <span class="text-gray">{{ (newTags || []).join(' / ') }}</span>
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
                <span class="text-gray">{{ (newTags || []).join(' / ') }}</span>
              </p>
            </div>
          </div>
          <p class="pre bold" v-html="saveHTML(newT_Zh)"></p>
          <!--  saveHTML is in  boot/mixins -->
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
              allowfullscreen="true"
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
          <q-btn unelevated rounded color="blue" @click="endPreview()" size="lg"
            >結束預覽</q-btn
          >
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PreViewClass',
  props: [
    'newClassImg',
    'myImg',
    'newImg',
    'newTitle',
    'myPhotoURL',
    'newZh',
    'newEn',
    'newT_Zh',
    'newT_En',
    'newLocation',
    'newAddr',
    'myName',
    'newTags',
    'previewC',
  ],
  methods: {
    endPreview() {
      this.$emit('endPreview');
    },
    saveHTML(html: string) {
      return html
        .replace(/script/g, 'script_')
        .replace(/iframe/g, 'iframe_')
        .replace(/style/g, 'iframe_');
    },
  },
});
</script>
