<template>
  <el-upload class="avatar-uploader"
             action="https://upload-z1.qiniup.com"
             :data="uploadData"
             :show-file-list="false"
             :on-success="uploadSuccess" >
    <img :src="currentValue" alt="" v-if="currentValue" class="avatar">
    <i class="el-icon-plus avatar-uploader-icon" v-else></i>
  </el-upload>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
        currentValue: this.props,
        uploadData: {
          token: ''
        }
      }
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          if(res.data.code == 200){
            this.uploadData = {
              token: res.data.data
            }
          } else {
            this.$message.info(res.data.msg)
          }
        })
      },
      uploadSuccess(res) {
        console.log(res);
        this.currentValue = res.url
      }
    },
    created() {
      this.getToken()
    },
    watch: {
      value(val) {
        this.currentValue = val
      },
      currentValue(val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
