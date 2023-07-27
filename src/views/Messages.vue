<template>
  <div class="">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-copy"></i>
          系统消息
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <el-tabs v-model="message">
        <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
          <el-table :data="unreadData" :show-header="false" style="width: 100%">
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="180"></el-table-column>

            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button size="small" @click="handleRead(scope.$index)">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 消息批量处理和分页 -->
          <div class="message-action-container">
            <div class="handle-row">
              <el-button type="primary">全部标为已读</el-button>
            </div>
            <!-- 分页组件 -->
            <el-pagination
              v-if="unread.length > pageSize"
              :current-page="unreadPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="unread.length"
              @current-change="handleUnreadPageChange"></el-pagination>
          </div>
        </el-tab-pane>

        <el-tab-pane :label="`已读消息(${read.length})`" name="second">
          <template v-if="message === 'second'">
            <el-table :data="readData" :show-header="false" style="width: 100%">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="message-action-container">
              <div class="handle-row">
                <el-button type="danger">删除全部</el-button>
              </div>
              <!-- 分页组件 -->
              <el-pagination
                v-if="read.length > pageSize"
                :current-page="readPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="read.length"
                @current-change="handleReadPageChange"></el-pagination>
            </div>
          </template>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <template v-if="message === 'third'">
            <el-table :data="recycleData" :show-header="false" style="width: 100%">
              <el-table-column>
                <template slot-scope="scope">
                  <span class="message-title">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="150"></el-table-column>
              <el-table-column width="120">
                <template slot-scope="scope">
                  <el-button @click="handleRestore(scope.$index)">还原</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="message-action-container">
              <div class="handle-row">
                <el-button type="danger">清空回收站</el-button>
              </div>
              <!-- 分页组件 -->
              <el-pagination
                v-if="recycle.length > pageSize"
                :current-page="recyclePage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="recycle.length"
                @current-change="handleRecyclePageChange"></el-pagination>
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      message: "first",
      showHeader: false,
      unread: [
        {
          date: "2018-04-19 23:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          date: "2018-04-19 21:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
        {
          date: "2018-04-19 20:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
        {
          date: "2018-04-19 18:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
        {
          date: "2018-04-19 17:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
        {
          date: "2018-04-19 15:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
      ],
      read: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
      ],
      recycle: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
      ],
      pageSize: 5, // 每页默认条数
      unreadPage: 1, // 未读消息当前页码
      readPage: 1, // 已读消息当前页码
      recyclePage: 1, // 回收站消息当前页码
    };
  },
  methods: {
    handleRead(index) {
      const item = this.unread.splice(index, 1);
      console.log(item);
      this.read = item.concat(this.read);
    },
    handleDel(index) {
      const item = this.read.splice(index, 1);
      this.recycle = item.concat(this.recycle);
    },
    handleRestore(index) {
      const item = this.recycle.splice(index, 1);
      this.read = item.concat(this.read);
    },
    // 处理分页变化
    handleUnreadPageChange(page) {
      this.unreadPage = page;
    },
    handleReadPageChange(page) {
      this.readPage = page;
    },
    handleRecyclePageChange(page) {
      this.recyclePage = page;
    },
  },
  computed: {
    unreadNum() {
      return this.unread.length;
    },
    // 分页后的未读消息数据
    unreadData() {
      const start = (this.unreadPage - 1) * this.pageSize;
      return this.unread.slice(start, start + this.pageSize);
    },
    // 分页后的已读消息数据
    readData() {
      const start = (this.readPage - 1) * this.pageSize;
      return this.read.slice(start, start + this.pageSize);
    },
    // 分页后的回收站消息数据
    recycleData() {
      const start = (this.recyclePage - 1) * this.pageSize;
      return this.recycle.slice(start, start + this.pageSize);
    },
  },
};
</script>

<style>
.message-title {
  cursor: pointer;
}
.handle-row {
  margin-right: 10px;
  right: 0px;
}

.message-action-container {
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
}
.message-action-pagination {
  /* 为了确保后续版式不乱, 可以设置el-patination显示为hidden而不是none */
  visibility: hidden;
}
</style>
