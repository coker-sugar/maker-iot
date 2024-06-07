<template>
  <el-form :model="form" class="common-layout">
    <el-container>
      <el-aside width="50%">
        <h1>{{ form.introduce }}开发岗位</h1>
        <h2>个人信息</h2>
        <div>请填写个人信息</div>
      </el-aside>

      <el-main>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入你的姓名" required />
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="form.sex" required>
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年级" prop="grade">
          <el-input v-model="form.grade" placeholder="20级" required />
        </el-form-item>
        <el-form-item label="专业" prop="subject">
          <el-input v-model="form.subject" placeholder="产品设计" required />
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="form.tel" placeholder="请输入你的电话" required />
        </el-form-item>
        <el-form-item label="Q Q" prop="qq" id="qq_input">
          <el-input v-model="form.qq" placeholder="请输入你的QQ" required />
        </el-form-item>
        <el-form-item prop="yaoqing">
          <el-input type="textarea" v-model="form.yaoqing" placeholder="请输入你想说的话" />
        </el-form-item>
      </el-main>
    </el-container>
    <el-button class="apply" type="primary" style="margin-left:44%;margin-right:.3rem" round @click="submitForm()">申请岗位</el-button>
    <router-link to="jairu"><el-button type="primary" round class="apply">返回</el-button></router-link>
  </el-form>
</template>

<script>
import UserApi from '@/api/user.js'
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessageBox } from 'element-plus'

export default {
  setup() {
    const form = reactive({
      name: '',
      sex: '',
      grade: '',
      subject: '',
      tel: '',
      qq: '',
      yaoqing: '',
      // 岗位
      introduce: ''
    })
    const formRule = reactive({
      name: [{ required: true, message: '名字不可为空', trigger: 'blur' }],
      sex: [{ required: true, message: '性别不可为空', trigger: 'blur' }],
      grade: [{ required: true, message: '年级不可为空', trigger: 'blur' }],
      subject: [{ required: true, message: '专业不可为空', triggger: 'blur' }],
      tel: [{ required: true, message: '电话不可为空', triggger: 'blur' }],
      qq: [{ required: true, message: 'qq不可为空', triggger: 'blur' }],
    })

    let $route=useRoute()
    onMounted(() => {
      form.introduce=$route.query.name
    })

    function validateForm() {
      const emptyFields = []
      for (const key in form) {
          if (!form[key]) {
            if(key=='name')
                emptyFields.push('姓名')
            else if (key == 'sex')
                emptyFields.push('性别')
            else if (key == 'grade')
                  emptyFields.push('年级')
            else if (key == 'subject')
                  emptyFields.push('专业')
            else if (key == 'tel')
                  emptyFields.push('电话')
            else if (key == 'qq')
                  emptyFields.push('QQ')
        }
      }
      if (emptyFields.length > 0) {
        const message = `以下字段不可为空：${emptyFields.join(', ')}`
        ElMessageBox.alert(message, '提示', {
          confirmButtonText: '确定'
        })
        return false
      }
      return true
    }

    function submitForm() {
        if (!validateForm()) {
            return
        }
  alert('你已经提交成功')
  console.log(form)
  UserApi.newMember(form)
    .then(response => {
      this.code = response.data.code
      form.name = ''
      form.sex = ''
      form.grade = ''
      form.subject = ''
      form.tel = ''
      form.qq = ''
      form.yaoqing = ''
    })
}

return {
  form,
  formRule,
  submitForm
}
}
}
</script>

<!-- 
<script>
import UserApi from '@/api/user.js'
import { ref, reactive, onMounted,getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const form = reactive({
           name: '',
           sex: '',
           grade: '',
           subject:'',
           tel: '',
           qq: '',
            yaoqing: '',
            // 岗位
            introduce: ''
        }) 
        const formRule = reactive({
            name: [{ required: true, message: '名字不可为空',trigger: 'blur' }],
            sex: [{ required: true, message: '性别不可为空', trigger: 'blur' }],
            grade: [{ required: true, message: '年级不可为空',trigger: 'blur' }],
            subject: [{ required: true, message: '专业不可为空', triggger: 'blur' }],
            tel: [{required: true, message: '电话不可为空', triggger: 'blur'}],
            qq: [{required: true, message: 'qq不可为空', triggger: 'blur'}],
            // yaoqing: [{ required: false, message: '不可为空', triggger: 'change' }],
            // introduce:[{required: false, message: '不可为空', triggger: 'change'}]
        })
        //    const that = this
        // 箭头函数中不用this！！！

        // const {proxy} = getCurrentInstance()
        let $route=useRoute()
        onMounted(() => {
        form.introduce=$route.query.name
        })

        //提交数据
        function submitForm() {
            alert('你已经提交成功')
            console.log(this.form)    
        UserApi.newMember(this.form)
            .then(response =>{
                this.code = response.data.code
                // 清空数据
                // proxy.$refs.form.resetFields();    

               form.name = ""
               form.sex = ""
               form.grade = ""
               form.subject = ""
               form.tel = ""
               form.qq = ""
               form.yaoqing = ""
            }) 
        }
         
         return {
             form,
             formRule,
             submitForm,
         }
    },
}
</script> -->


<style  scoped lang="less">
* {
    font-size: 24px;
}
 .common-layout
  {
    height: 10rem;
    // background-color: pink;
    margin-top: 2%;
    .el-aside  {
        // background-color:blue;
        padding-left: 1.30rem;
        width:35%;
        h1 {
            margin-bottom: .7rem;
            font-size: 28px;
        }
        h2 {
            margin-bottom: .25rem;
        }
        div {
            font-size: 18px;
            font-weight: 10;
        }
    }

    .el-main {
        width: 60%;
        // background-color: pink;
    div {
        margin-bottom: .2rem;
    }    
    /deep/.el-form-item__label {
        font-size: .4rem;
        }
    /deep/.el-input__inner {
        &::placeholder {
        font-size: 14px;
      }
    }
      .el-radio {
        margin-left: 0.13rem;
      }
        .el-input {
            margin-left: .13rem;
            width: 55%;
            height: .6rem;
        }
        #qq_input {
            .el-input {
            margin-left: .31rem;
            width: 55%;
        }
        }   
        /deep/.el-textarea__inner{ 
        resize: none;
        width: 55%;
        height: 2.8rem;
        font-size: 18px;
        }
        .items-center {
            font-size: .26rem;
        }
    }

}
.apply {
     display: inline-block;
     margin: 0 auto;
    //  margin-left: 50%;
     width: 2.00rem;
     height:.70rem;
     font-size: .24rem;
     background-color: #7c34ff;
     border-radius: .40rem;
    //  margin-top: .05rem;
}
</style> 


