<template>
  <div class="contact">
    <section class="workflow d-flex flex-column align-items-center workflow-spacing px-2 px-md-0">
      <div class="workflow-content text-center mb-3">
        <h2>WORK FLOW <span class="breakline">服務流程</span></h2>
        <p class="mt-2">從腳本討論至影片完成，製作期依照案件內容而定 。
          <br>What we strive to do in this industry</p>
      </div>
      <div class="work-item py-3 bg-color">
        <div class="container-fluid work-space justify-content-center">
          <div class="row align-items-start">
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>需求討論</h3>
              <img src="@/assets/images/workflowicon/1.png" alt="需求討論">
              <p>industry</p>
              <ul class="detail mt-4 txtpos">
                <li>‧ 製作方向與內容</li>
                <li>‧ 影片目標受眾(TA)</li>
                <li>‧ 影片播放平台
                  <p class="example">
                    EX：網站、電視廣告、<br>社群媒體廣告、展場...
                  </p>
                </li>
                <li>‧ 影片播放地區</li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>初步提案與報價</h3>
              <img src="@/assets/images/workflowicon/2.png" alt="初步提案與報價">
              <p>industry</p>
              <ul class="detail mt-4 txtpos">
                <li>‧ 腳本內容設計</li>
                <li>‧ 預算費用規劃</li>
                <li>‧ 影片製作時程規劃</li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>腳本確認與簽約</h3>
              <img src="@/assets/images/workflowicon/3.png" alt="腳本確認與簽約">
              <p>industry</p>
              <ul class="detail mt-4 txtpos">
                <li>‧ 簽訂合約</li>
                <li>‧ 詳細腳本確認</li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-md-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>前置與拍攝</h3>
              <img src="@/assets/images/workflowicon/4.png" alt="前置與拍攝">
              <p>industry</p>
              <ul class="detail mt-4 txtpos">
                <li>‧ 現場勘景</li>
                <li>‧ 製作分鏡腳本</li>
                <li>‧ 製作細項確認</li>
                <li>‧ 正式拍攝</li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-md-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>後期製作</h3>
              <img src="@/assets/images/workflowicon/5.png" alt="後期製作">
              <p>industry</p>
              <div class="mt-4 txtpos">
                <p class="edit">影片2次修改為限</p>
                <ul class="detail mt-2">
                  <li>
                    <div class="d-flex align-items-center">
                      <p class="process mr-2">Acopy</p>
                      <p class="percent text-s-blue">完成度60%</p>
                    </div>
                    <p class="content">影片主要架構、基本套色
                      <br><span>音樂、動畫...等調性確認(依需求而定)</span></p>
                  </li>
                </ul>
                <ul class="detail mt-2">
                  <li>
                    <div class="d-flex align-items-center">
                      <p class="process mr-2">Bcopy</p>
                      <p class="percent text-s-blue">完成度80%</p>
                    </div>
                    <p class="content">針對Acopy修改意見的調整、
                      <br><span>旁白風格、調光...等調性確認(依需求而定)</span></p>
                  </li>
                </ul>
                <ul class="detail mt-2">
                  <li>
                    <div class="d-flex align-items-center">
                      <p class="process mr-2">定剪</p>
                      <p class="percent text-s-blue">完成度100%</p>
                    </div>
                    <p class="content">混音、字幕、調光調色</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-md-4 d-flex flex-column
            justify-content-center align-items-center">
              <h3>完成交片</h3>
              <img src="@/assets/images/workflowicon/6.png" alt="完成交片">
              <p>industry</p>
              <div class="detail mt-4 text-center txtpos">
                <p>雲端交付完整影片</p>
                <span>(或依合約簽訂方式交付)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="customer-info px-2 px-md-0">
      <div class="container">
        <h2 class="text-center">Ready to Start? <span class="line-break">等不及要開始了嗎?</span></h2>
        <p class="text-center mt-2">等不及開始和我們一起執行新專案了嗎?
          <br>我們非常期待收到您的來信!
          <br>Let's get started on a new project.
          <br>Looking forward to hearing from you!
          <br>※為必填項目
        </p>
        <ValidationObserver v-slot="{ invalid }">
          <form class="mt-4 d-flex flex-column">
            <ValidationProvider name="name" rules="required" v-slot="{ errors }">
              <div class="form-group row">
                <label class="col-xl-2 col-form-label" for="name">姓名 Name※</label>
                  <input class="col-xl-10 form-control input-style" type="text" id="name"
                  v-model="customer.name">
                  <span class="d-block text-danger mt-1">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
              <div class="form-group row">
                <label class="col-xl-2 col-form-label" for="email">信箱 E-mail※</label>
                <input class="col-xl-10 form-control input-style" type="email" id="email"
                v-model="customer.email">
                <span class="d-block text-danger mt-1">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider name="email" rules="tel" v-slot="{ errors }">
              <div class="form-group row">
                <label class="col-xl-2 col-form-label" for="tel">連絡電話 TEL</label>
                <input class="col-xl-10 form-control input-style" type="tel" id="tel"
                v-model="customer.tel">
                <span class="d-block text-danger mt-1">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="form-group row">
              <label class="col-xl-2 col-form-label" for="company">公司/單位 Company</label>
              <input class="col-xl-10 form-control input-style" type="text" id="company"
              v-model="customer.company">
            </div>
            <div class="form-group row">
              <label class="col-xl-2 col-form-label" for="role">職稱 Role</label>
              <input class="col-xl-10 form-control input-style" type="text" id="role"
              v-model="customer.role">
            </div>
            <ValidationProvider name="message" rules="required" v-slot="{ errors }">
              <div class="form-group row">
                <label class="col-xl-2 col-form-label" for="message">需求※ <br>Your message</label>
                <textarea class="col-xl-10 form-control input-style" name="message" id="message"
                cols="30" rows="10" v-model="customer.message"></textarea>
                <span class="d-block text-danger mt-1">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="form-group row">
              <label class="col-xl-2 col-form-label" for="budget">預算 Budget</label>
              <select class="input-style select-width" name="budget" id="budget"
              v-model="customer.budget">
                <option value="">-- 請選擇預算 --</option>
                <option value="30萬以下">30萬以下</option>
                <option value="30萬-60萬">30萬-60萬</option>
                <option value="60萬-100萬">60萬-100萬</option>
                <option value="100萬-150萬">100萬-150萬</option>
                <option value="150">150</option>
              </select>
            </div>
            <button class="btn btn-s-blue btn-style
            align-self-xl-end align-self-center mt-3 mt-xl-0" type="submit"
            :disabled = "invalid">
              確認內容並送出 Send
            </button>
          </form>
        </ValidationObserver>
      </div>
    </section>
    <section class="contact-us px-1 px-md-0">
      <div class="container">
        <h2 class="text-center mb-4 mb-xl-5">CONTACT US 聯絡我們</h2>
        <div class="row justify-content-center align-items-center">
          <div class="col-xl-7 d-xl-block d-flex flex-column align-items-center">
            <ul class="contact-info">
              <li class="d-block d-md-flex align-items-start">
                <div class="contact-label mb-2 mb-md-0 mr-md-3 d-flex justify-content-md-end">
                  <p class="text-right label-style">地址 Address</p>
                </div>
                <p>710台南市永康區富強路一段98巷38弄3號1樓
                  <br>Taiwan, Tainan, 1F., No. 3, Aly. 38, Ln. 98,
                  <br>Sec. 1, Fuqiang Rd., Yongkang Dist
                </p>
              </li>
              <li class="d-block d-md-flex mt-3 align-items-center">
                <div class="contact-label mb-2 mb-md-0 mr-md-3 d-flex justify-content-md-end">
                  <p class="text-right label-style">E-mail</p>
                </div>
                <p>selfdirectedstudio@gmail.com</p>
              </li>
              <li class="d-block d-md-flex mt-3 align-items-center">
                <div class="contact-label mr-md-3 d-flex justify-content-md-end">
                  <p class="text-right label-style">Follow us</p>
                </div>
                <div class="social">
                  <a class="mr-3" href="https://www.facebook.com/selfdirectedstudio" target="_blank"><i class="fab fa-facebook-f text-black"></i></a>
                  <a class="mr-3" href="https://www.youtube.com/channel/UCGawabA6bnVLKxzzDdd5r0Q" target="_blank"><i class="fab fa-youtube text-black"></i></a>
                  <a href="https://www.instagram.com/selfdirectedstudio/" target="_blank"><i class="fab fa-instagram text-black"></i></a>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-xl-5 mt-3 mt-xl-0">
            <Map></Map>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  data() {
    return {
      customer: {
        name: '',
        email: '',
        tel: '',
        company: '',
        role: '',
        message: '',
        budget: '',
      },
    };
  },
  components: {
    Map,
  },
  created() {
    const vm = this;
    vm.$bus.$emit('changeNav', 'contact');
  },
};
</script>
