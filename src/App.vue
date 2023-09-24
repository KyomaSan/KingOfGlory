<template>
  <div id="app">
    <div class="input">
      <input
        class="input-search"
        v-model="keyWord"
        placeholder="请输入游戏昵称"
      />
      <button @click="search()">
        搜索
      </button>
      <p v-if="roleId != ''">
        <span>{{ ydNickName }}</span>
        的roleld：{{ roleId }}
      </p>
    </div>

    <div
      v-show="gameManList.length > 0"
      class="result-item"
      v-for="(resultItem, index) in gameManList"
      :key="index"
    >
      <div class="left">
        <img :src="resultItem.roleIcon" alt="" />
      </div>
      <div class="info">
        <div class="top">
          <p>营地名：{{ resultItem.nickname }}</p>
          <div class="sex">
            <img :src="resultItem.upCardIcon[0].icon || ''" alt="" />
          </div>
        </div>
        <div class="bottom">
          <span>{{ resultItem.roleName }}</span>
          <span>{{ resultItem.roleDesc }}</span>
        </div>
      </div>
      <div class="button">
        <button @click="readRoleId(resultItem)">查看QQ号</button>
      </div>
    </div>
  </div>
</template>
<script>
/*   <div>
      <p>游戏角色名:{{ gameManList[0].roleName }}</p>
      <p>头像</p>
      <img :src="gameManList[0].roleIcon" alt="" />
      <p>OpenId:{{ (gameManList[0].roleIcon || "").split("/")[5] }}</p>
      <!-- area:1是安卓QQ,2是苹果QQ -->
      <p>角色的area:{{ gameManList[0].areaId }}</p>
      <!-- 区域值= 角色所在第几区的区号+area值010 -->
      <p>角色的partition:{{ gameManList[0].serverId }}</p>
      <!-- platid:角色的手机的系统:0是苹果 1是安卓 -->
      <p>
        角色的platid:{{
          (gameManList[0].roleDesc || "").includes("安卓") == true ? "1" : "0"
        }}
      </p>
      <p>角色所在平台区域段位:{{ gameManList[0].roleDesc }}</p>
      <p>角色的roleId:{{ roleId }}</p>
    </div> */
export default {
  data() {
    return {
      // 搜索关键字
      keyWord: "",
      // 游戏人物列表
      gameManList: [
        {
          roleId: "138760434",
          vest: 1,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/E4054823F85D39F2286C2D8B3BCDFAE1/100",
          level: "30",
          gameOnline: 0,
          originalRoleId: "949463436",
          gameId: 20001,
          areaId: "1",
          serverId: 1022,
          roleJob: "荣耀黄金IV",
          vv: 1,
          userId: 339534866,
          roleJobId: "17",
          offlineTime: 1583669008,
          roleDesc: "手Q安卓 黄金IV",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "清秋十八ll",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/E4054823F85D39F2286C2D8B3BCDFAE1/100",
          userLevel: "20",
          lu: 1593271246,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "铂金IV",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
        {
          roleId: "897169004",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/1F81084069B45DDF8B0D1D6159AB4899/100",
          level: "11",
          gameOnline: 0,
          originalRoleId: "423739021",
          gameId: 20001,
          areaId: "1",
          serverId: 1017,
          roleJob: "秩序白银III",
          userId: 344736890,
          roleJobId: "4",
          roleDesc: "手Q安卓 白银III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "我的好运用完了",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://p.qlogo.cn/yoyo_avatar/344736890/5dd4c93d6886aef59a5a428e22cb8083X/76",
          userLevel: "30",
          lu: 1673852873,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "星耀IV",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "四川",
          isCampFriend: 0,
        },
        {
          roleId: "715173856",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/B373B6C4493CCD252B1C3498A74F4989/100",
          level: "21",
          gameOnline: 0,
          originalRoleId: "107104710",
          gameId: 20001,
          areaId: "1",
          serverId: 1185,
          roleJob: "荣耀黄金III",
          userId: 94749070,
          roleJobId: "7",
          offlineTime: 1510432578,
          roleDesc: "手Q安卓 黄金III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "趁早VBM",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/B373B6C4493CCD252B1C3498A74F4989/100",
          userLevel: "18",
          lu: 1611154564,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "铂金I",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
        {
          roleId: "1489935723",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "https://wx.qlogo.cn/mmhead/REej1zPJq1cAic3SzQ8v3UcY2DTl3AINC5QUKbGfx4mY/96",
          level: "28",
          gameOnline: 0,
          originalRoleId: "1269932112",
          gameId: 20001,
          areaId: "3",
          serverId: 3136,
          roleJob: "尊贵铂金II",
          userId: 2130338903,
          vv: 0,
          roleJobId: "11",
          offlineTime: 1614910805,
          roleDesc: "微信安卓 铂金II",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "荼毒丶丿",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://p.qlogo.cn/yoyo_avatar/0/ol7y7uNHLHhVD0_J_5wcCje6ytFU/76",
          userLevel: "11",
          lu: 1657474214,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "铂金II",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
        {
          roleId: "1496310450",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/72869CF1D540618D692D949C7AA9DD9D/100",
          level: "6",
          gameOnline: 0,
          originalRoleId: "477857229",
          gameId: 20001,
          areaId: "1",
          serverId: 1250,
          roleJob: "倔强青铜III",
          userId: 237264157,
          roleJobId: "1",
          offlineTime: 1512542026,
          roleDesc: "手Q安卓 青铜III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "椿～湫",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/72869CF1D540618D692D949C7AA9DD9D/100",
          userLevel: "30",
          lu: 1677796575,
          appOnline: 0,
          online: 0,
          vipLevel: 9,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
            {
              button_id: 1003,
              icon:
                "https://camp.qq.com/star-member/light-icon/light-icon-9.png?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "王者星会员",
              choose_status: 1,
              tips: "",
              background: "",
              sort: 2,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "无双王者",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "湖北",
          isCampFriend: 0,
        },
        {
          roleId: "631305899",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/33CF1BD0A9DA7511656FE2BE6322FFF6/100",
          level: "5",
          gameOnline: 0,
          originalRoleId: "1670714637",
          gameId: 20001,
          areaId: "2",
          serverId: 2012,
          roleJob: "倔强青铜III",
          vv: 0,
          userId: 75628138,
          roleJobId: "1",
          roleDesc: "手Q苹果 青铜III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "QueGe",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/33CF1BD0A9DA7511656FE2BE6322FFF6/100",
          userLevel: "27",
          lu: 1675532845,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "钻石V",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "江西",
          isCampFriend: 0,
        },
        {
          roleId: "1059753441",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/55963E8C5093506A0C2B9B40484D3DE8/100",
          level: "5",
          gameOnline: 0,
          originalRoleId: "624515531",
          gameId: 20001,
          areaId: "2",
          serverId: 2016,
          roleJob: "倔强青铜III",
          userId: 90159257,
          vv: 0,
          roleJobId: "1",
          offlineTime: 1538615436,
          roleDesc: "手Q苹果 青铜III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "　　　　　　　　　　　　cDYD",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/55963E8C5093506A0C2B9B40484D3DE8/100",
          userLevel: "30",
          lu: 1628378172,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "星耀IV",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
        {
          roleId: "824369249",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://thirdqq.qlogo.cn/qqapp/1104466820/62EBB3E87ABBECCDF00F7AF4B9B04896/100",
          level: 30,
          gameOnline: 0,
          originalRoleId: "491138062",
          gameId: 20001,
          areaId: "6",
          serverId: 6011,
          roleJob: "永恒钻石II",
          userId: 1889156539,
          vv: 0,
          roleJobId: 14,
          offlineTime: 1675628570,
          roleDesc: "手Q抢先服 钻石II",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "未曾yy",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://thirdqq.qlogo.cn/qqapp/1105200115/4F649D0E6FA6A6905A8906C24ABB3172/100",
          userLevel: "7",
          lu: 1601449377,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "钻石II",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
        {
          roleId: "1588789247",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "http://q.qlogo.cn/qqapp/1104466820/CCB895B49AEDD28754A5A99E043B447C/100",
          level: "6",
          gameOnline: 0,
          originalRoleId: "833498017",
          gameId: 20001,
          areaId: "2",
          serverId: 2015,
          roleJob: "倔强青铜III",
          userId: 491841035,
          vv: 0,
          roleJobId: "1",
          offlineTime: 1508668025,
          roleDesc: "手Q苹果 青铜III",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "杰NXvC",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://q.qlogo.cn/qqapp/1104466820/CCB895B49AEDD28754A5A99E043B447C/100",
          userLevel: "30",
          lu: 1677986001,
          appOnline: 0,
          online: 0,
          vipLevel: 10,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
            {
              button_id: 1003,
              icon:
                "https://camp.qq.com/star-member/light-icon/light-icon-10.png?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "王者星会员",
              choose_status: 1,
              tips: "",
              background: "",
              sort: 2,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "星耀III",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "福建",
          isCampFriend: 0,
        },
        {
          roleId: "2181244257",
          vest: 0,
          roleName: "刘德华",
          roleIcon:
            "https://wx.qlogo.cn/mmhead/CttmTaYSYkSsicC4r6gKuk5ib5XIhg9A307YHnpn39xx1LT42sjK9bicA/96",
          level: 30,
          gameOnline: 0,
          originalRoleId: "83361594",
          gameId: 20001,
          areaId: "7",
          serverId: 7011,
          roleJob: "永恒钻石I",
          userId: 541684721,
          vv: 0,
          roleJobId: 15,
          offlineTime: 1674930230,
          roleDesc: "微信抢先服 钻石I",
          userconfirm: 0,
          userdesc: "",
          confirmInfo: {
            confirmdesc: "",
            confirmicon: "",
            confirmsecondtag: [],
            author: 0,
            bindStamp: 0,
            club: 0,
            commentary: 0,
            couch: 0,
            kol: 0,
            media: 0,
            official: 0,
            organized: 0,
            other: 0,
            personal: 0,
            platid: 0,
            player: 0,
            realAuthor: 0,
            super: 0,
            superV: 0,
            tmpAuthor: 0,
            top: 0,
            trueAuthor: 0,
            trueMedia: 0,
            ydqs: 0,
            zhubo: 0,
            Hongren: 0,
            daren: 0,
            confirmsecondicon: [],
          },
          nickname: "呆子x",
          medalInfo: null,
          sex: 1,
          avatar:
            "http://p.qlogo.cn/yoyo_avatar/0/ol7y7uFqZIbU0DVQ1BRRVQfAgQEg/76",
          userLevel: "23",
          lu: 1666745619,
          appOnline: 0,
          online: 0,
          vipLevel: 0,
          liveStatus: 0,
          liveLink: "",
          upCardIcon: [
            {
              button_id: 1001,
              icon:
                "https://pvppic.kohsocialapp.qq.com/wzzs_pic/0/581c88110c41183c011a3e1ba3c19345/0?width=15&height=15",
              main_text_icon: "",
              tail_text_icon: "",
              title: "性别",
              choose_status: 2,
              tips: "",
              background: "",
              sort: 0,
              level: 0,
              type: 1,
            },
          ],
          downCardIcon: [
            {
              button_id: 3001,
              icon: "",
              main_text_icon: "",
              tail_text_icon: "",
              title: "钻石I",
              choose_status: 2,
              tips: "更换角色",
              background: "",
              sort: 0,
              level: 0,
              type: 0,
            },
          ],
          ipProperty: "未知",
          isCampFriend: 0,
        },
      ],
      // 单独选择的角色的营地名
      ydNickName: "",
      roleId: "",
    };
  },
  methods: {
    // 搜索游戏昵称
    search() {
      const that = this;
      that.roleId = "";
      this.$axios
        .post(
          "/gameApi1/search/getresultbytype",
          new URLSearchParams({
            apiVersion: "2",
            areaId: "0",
            cSystem: "android",
            bbsPostSearchType: "0",
            keyword: that.keyWord,
            option: "0",
            page: "1",
            roleId: "685978334",
            sort: "0",
            type: "role",
            cChannelId: "10002483",
            cClientVersionCode: "2037844800",
            cClientVersionName: "6.82.0214",
            cCurrentGameId: "20001",
            cGameId: "20001",
            cGzip: "1",
            cIsArm64: "true",
            cRand: "1684727775478",
            cSupportArm64: "true",
            cSystemVersionCode: "23",
            cSystemVersionName: "6.0.1",
            cpuHardware: "cancro_x86_64",
            encodeParam:
              "Zy2C5ifbH6KXayEs7mQOFiDttrs+A5I0yIr1c5drxx7U4nqBo/QyTeyUOm6de5HDVe2Q5lzMfvo09slALCPxe5gPaztNah1SZUL3tNZhfb4nPzAO1ipL2H7hvZJggWjZQSzp0A==",
            gameAreaId: "1",
            gameId: "20001",
            gameOpenId: "24078A5937D596551463F3A78D7815FE",
            gameRoleId: "685978334",
            gameServerId: "1092",
            gameUserSex: "1",
            openId: "E214310807F0871EAB5C9EA8FEE01B7F",
            tinkerId: "2037844800_64_0",
            token: "zn4KHZHu", //改token即可重新搜索好友 通过 https://kohcamp.qq.com/supergroup/getmylist 这个接口的token
            userId: "437685994",
          }),
          {
            headers: {
              noencrypt: "1",
              "x-client-proto": "https",
              csystem: "android",
              cchannelid: "10002483",
              cclientversioncode: "2037844800",
              cclientversionname: "6.82.0214",
              ccurrentgameid: "20001",
              cgameid: "20001",
              cgzip: "1",
              cisarm64: "true",
              crand: "1684727775478",
              csupportarm64: "true",
              csystemversioncode: "23",
              csystemversionname: "6.0.1",
              cpuhardware: "cancro_x86_64",
              encodeparam:
                "Zy2C5ifbH6KXayEs7mQOFiDttrs%2BA5I0yIr1c5drxx7U4nqBo%2FQyTeyUOm6de5HDVe2Q5lzMfvo09slALCPxe5gPaztNah1SZUL3tNZhfb4nPzAO1ipL2H7hvZJggWjZQSzp0A%3D%3D",
              gameareaid: "1",
              gameid: "20001",
              gameopenid: "24078A5937D596551463F3A78D7815FE",
              gameroleid: "685978334",
              gameserverid: "1092",
              gameusersex: "1",
              openid: "E214310807F0871EAB5C9EA8FEE01B7F",
              tinkerid: "2037844800_64_0",
              token: "zn4KHZHu", //改token即可重新搜索好友 通过 https://kohcamp.qq.com/supergroup/getmylist 这个接口的token
              userid: "437685994",
            },
          }
        )
        .then((res) => {
          console.log("res", res);
          res = res.data;
          // 取得游戏人物列表
          this.gameManList = res.data[0].list;
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    // 查看游戏人物的roleId

    readRoleId(item) {
      this.ydNickName = item.nickname;
      if (item.roleIcon.includes("player.png") == true) {
        item.roleIcon = item.avatar;
      }
      let openId = (item.roleIcon || "").split("/")[5];
      let area = item.areaId;
      let partition = item.serverId;
      let platid = (item.roleDesc || "").includes("安卓") == true ? "1" : "0";
      let qs = require("qs");
      let data = qs.stringify({
        params: `{"fromRole":{"appid":"1104466820","openid":"${openId}","area":${area},"partition":${partition},"platid":${platid}},"toRole":{"appid":"1104466820","openid":"4MjNsfkuqzYQQ3QQiCcbFSP2bUs64vrbQfUG3umELAtMBfSd2SHwksf96hK1c1W1","area":1,"partition":1141,"platid":1}}\n`,
      });
      // 适合只差OPENID的情况,也就是网页上能搜索出区服,段位,名称,但是没有头像或者头像不具备OPENID的情况
      /*  let data = qs.stringify({
        params: `{"fromRole":{"appid":"1104466820","openid":"86D45CDCF2714D28A7748F15D570FF75","area":${area},"partition":${partition},"platid":${platid}},"toRole":{"appid":"1104466820","openid":"0K3LW4+MZWozydVsu7tsR3d7ZXswBDl/Gt5IpHGlxsjHCpOlUOXdPmTUOjAJww/B","area":1,"partition":1284,"platid":1}}\n`,
      }); */
      // 适合差OPENID,平台,大区的情况,也就是网页上啥都搜索不出来,空白的情况
      /* 
      area：1就代表安卓QQ，是2就代表苹果QQ --------2
      partition：即大区id===所在第几区的区号 + area值010 == 16+2010 ===2026
      platid：0代表苹果，1代表安卓   --------0 
      */
      /*   let data = qs.stringify({
        params: `{"fromRole":{"appid":"1104466820","openid":"404CBFE68C7A9511486971465E6B67E2","area":1,"partition":1117,"platid":1},"toRole":{"appid":"1104466820","openid":"4MjNsfkuqzYQQ3QQiCcbFSP2bUs64vrbQfUG3umELAtMBfSd2SHwksf96hK1c1W1","area":1,"partition":1141,"platid":1}}\n`,
      }); */

      let config = {
        method: "post",
        url:
          "/gameApi2/v1/cgi-bin/gamemsg-friends/get-tiny-id-v2?t=1683533352593&g_tk=620694697&p_tk=y9w2TR4nqFj6lV9emNjocBPyBgJpU4qTLDne55xJA-U_",
        data: data,
      };

      this.$axios(config)
        .then((res) => {
          this.roleId = res.data.data.fromRole.roleid;
          console.log("roleId---->", this.roleId);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  mounted() {
    const qs = require("qs");
    // 构造请求数据
    const data = qs.stringify({
      params: JSON.stringify({
        fromRole: {
          appid: "1104466820",
          openid: "24078A5937D596551463F3A78D7815FE",
          area: 1,
          partition: 1339,
          platid: 1,
          uin: "hxVJh2tyKss35fC5hiIdbA==",
          roleid: "41d4d38402e7bd5f",
        },
        toRole: {
          appid: "1104466820",
          openid: "D3E81BE1920357D2290344A1AE8B7B17",
          area: 1,
          partition: 1095,
          platid: 1,
          uin: "hxVJh2tyKss35fC5hiIdbA==",
          roleid: "41d4d38402e72e39",
        },
      }),
    });

    // 构造请求配置
    const config = {
      method: "post",
      url:
        "/gameApi3/v1/cgi-bin/gamemsg-friends/get-tiny-id?g_tk=1477774483&cgi_from_hippy=1",

      data: data,
    };
    // 发起请求
    this.$axios(config)
      .then((res) => {
        // this.roleId = res.data.data.fromRole.roleid;
        console.log("res---->", res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
#app {
  position: relative;
  .input {
    .input-search {
      margin: 0 auto;
      border: 1px solid black !important;
      outline: none;
    }
    position: relative;
    p {
      position: absolute;
      top: 5px;
      left: 20%;
      padding-left: 200px;
      span {
        color: red;
      }
    }
  }
  .result-item {
    min-width: 780px;
    padding-left: 10px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .left {
      margin-right: 10px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      .top {
        display: flex;
        .sex {
          width: 16px;
          height: 16px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .bottom {
        span {
          margin-right: 10px;
        }
      }
    }
    .button {
      button {
        margin-right: 10px;
        background-color: #fdc661;
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 10%;
        &:hover {
          cursor: pointer;
          background: #c99d4d;
        }
        &:active {
          background: #c99d4d;
        }
      }
    }
  }
}
</style>
