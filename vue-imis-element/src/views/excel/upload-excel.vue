<template>
  <div class="upload-excel">
    <el-card>
      <div slot="header">导入EXCEL</div>
      <div>
        <el-row :gutter="10">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :before-upload="handleBeforeUpload"
            :on-success="handleOnSuccess"
            accept=".xlsx, .xls"
            multiple
            :limit="3"
            show-file-list
          >
            <!-- :file-list="fileList" -->
            <el-button size="small" icon="el-icon-upload" @click="handleUploadFile"
              >点击上传</el-button
            >
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-row>
        <el-row :gutter="10">
          <transition name="fade">
            <!-- <el-progress :percentage="100" :format="format" color="" status="success"></el-progress> -->
          </transition>
        </el-row>
      </div>
    </el-card>
    <el-row :gutter="10" style="margin: 10px 0">
      <el-table
        :data="tableData"
        style="width: 100%"
        :columns="tableTitle"
        v-loading="tableLoading"
      >
        <el-table-column
          v-for="item in tableTitle"
          :prop="item.title"
          :label="item.title"
          :key="item.key"
          width="width"
          :data="tableData"
        >
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import excel from '@/libs/excel'

export default {
  name: 'UploadExcel',
  data() {
    return {
      uploadLoading: false,
      progressPercent: 0,
      showProgress: false,
      showRemoveFile: false,
      file: null,
      tableData: [],
      tableTitle: [],
      tableLoading: false,
      loadingProgress: 0
    }
  },
  methods: {
    initUpload() {
      this.file = null
      this.showProgress = false
      this.loadingProgress = 0
      this.tableData = []
      this.tableTitle = []
    },
    handleUploadFile() {},
    format(percentage) {
      return percentage === 100 ? '成功' : `${percentage}%`
    },
    handlePreview(file) {
      console.log(file, 'handlePreview')
    },
    handleOnSuccess(response, file, fileList) {
      console.log(response, file, fileList)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, 'handleRemove')
      this.initUpload()
      this.$message('上传的文件已删除！')
    },
    handleBeforeUpload(file) {
      const fileExt = file.name.split('.').pop().toLocaleLowerCase()
      // console.log(fileExt, 'fileExt')
      if (fileExt === 'xls' || fileExt === 'xlsx') {
        this.readFile(file)
      } else {
        this.$notify.error({
          title: '错误',
          message: `文件： ${file.name}不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。`
        })
      }
    },
    // 读取文件
    readFile(file) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadstart = () => {
        this.uploadLoading = true
        this.tableLoading = true
        this.showProgress = true
      }
      reader.onprogress = (e) => {
        this.progressPercent = Math.round((e.loaded / e.total) * 100)
      }
      reader.onerror = () => {
        this.$notify.error({
          title: '错误',
          message: `文件读取出错`
        })
      }
      reader.onload = (e) => {
        this.$message({
          message: `文件读取成功`,
          type: 'success'
        })
        const data = e.target.result
        const { header, results } = excel.read(data, 'array')
        const tableTitle = header.map((item) => {
          return { title: item, key: item }
        })
        this.tableData = results
        this.tableTitle = tableTitle
        this.tableLoading = false
      }
    },
    beforeRemove() {},
    handleExceed() {}
  }
}
</script>

<style lang="less">
.upload-excel {
  margin: 10px;
}
</style>
