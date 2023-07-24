<template>
  <div class="register-wrap">
    <div class="ms-register">
      <div class="ms-register-title-container">
        <div class="ms-register-title">注册</div>
        <div class="ms-register-title-goto">
          <el-button class="ms-register-title-goto-btn" type="text" @click="goToLoginPage">
            返回登录
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
      </div>
      <el-form :model="param" :rules="rules" ref="register" label-width="0px" class="ms-content">
        <el-form-item prop="username" class="custom-form-item">
          <el-input v-model="param.username" placeholder="请输入用户名">
            <!-- <el-button slot="prepend" icon="el-icon-lx-people"></el-button> -->
          </el-input>
        </el-form-item>

        <el-form-item prop="email" class="custom-form-item">
          <el-input v-model="param.email" placeholder="请输入邮箱">
            <!-- <el-button slot="prepend" icon="el-icon-message"></el-button> -->
          </el-input>
        </el-form-item>

        <el-form-item prop="password" class="custom-form-item">
          <el-input type="password" placeholder="请输入密码" v-model="param.password">
            <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" class="custom-form-item">
          <el-input type="password" placeholder="请确认密码" v-model="param.confirmPassword">
            <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
          </el-input>
        </el-form-item>

        <el-form-item prop="age" class="custom-form-item">
          <el-input v-model="param.age" placeholder="请输入年龄">
            <!-- <el-button slot="prepend" icon="el-icon-date"></el-button> -->
          </el-input>
        </el-form-item>

        <el-form-item prop="gender" class="custom-form-item">
          <!-- Element-UI 的 el-select 使用的其实是 input 标签 , 
              而 input 标签在浏览器中存在一个默认的宽度 , 大约是 100px (不同的浏览器表现不同) . 
            -->
          <el-select v-model="param.gender" placeholder="请选择性别" class="custom-form-item">
            <el-option label="男" value="male" class="custom-el-select"></el-option>
            <el-option label="女" value="female" class="custom-el-select"></el-option>
          </el-select>
        </el-form-item>

        <div class="register-btn">
          <el-button type="primary" @click="submitForm()">确认注册</el-button>
        </div>
        <p class="register-tips">Tips: 请输入用户名和密码进行注册。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      param: {
        username: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirmPassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value === this.param.password) {
                callback();
              } else {
                callback(new Error("两次输入的密码不一致"));
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.register.validate((valid) => {
        if (valid) {
          // 注册逻辑，可以在这里处理用户的注册信息
          this.$message.success("注册成功");
          this.$router.push("/login"); // 注册成功后跳转到登录页
        } else {
          this.$message.error("请输入正确的账号和密码");
        }
      });
    },
    /* 进入登录页面 */
    goToLoginPage() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(~@/assets/img/login-bg.jpg); /* 注册页的背景图片 */
  background-size: 100%;
}
.ms-register {
  position: absolute;
  width: 350px;
  /* 在宽度确定, 高度不确定的情况下, Y轴居中 */
  top: 50%;
  right: 0%;
  margin: 0 50px 0 0;
  transform: translateY(-50%);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

/* 首行样式设置: 标题, 跳转链接, 布局等 */
.ms-register-title-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.ms-register-title-container div {
  flex: 1;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
}
.ms-register-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-register-title-goto {
  text-align: right;
  padding-right: 20px;
}
.ms-register-title-goto .el-button--text {
  font-size: 12px;
  color: #fff;
}

/* 输入框 */
.ms-content {
  padding: 30px 30px;
}
.register-btn {
  /* 设置按钮的布局方式 */
  display: flex;
  text-align: center;
}

.register-btn button {
  flex: 1;
  height: 36px;
  margin-bottom: 10px;
}

/* 通过自定义类来确保el-form-item的样式生效 */
.custom-form-item {
  width: 280px;
}
.custom-el-select {
  /* width: 200px; */
  width: 100%;
}

/* tips样式 */
.register-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
