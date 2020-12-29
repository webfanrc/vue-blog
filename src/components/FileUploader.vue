<template>
  <div class="file-uploader">
    <label for="avatar">Choose a file: </label>
    <input id="avatar" type="file" @change="fileChange($event.target)">
    <br>
    <button @click="submitFile">Upload</button>
  </div>
</template>

<script>
  import service from '../utils/http';
  export default {
    data() {
      return {
        file: {},
      }
    },
    methods: {
      fileChange(target) {
        console.log(target.files[0]);
        this.file = target.files[0];
      },
      submitFile() {
        let formData = new FormData();

        formData.append('file', this.file); //name: file

        service.post(
          '/file/singleNew',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          ).then(function(){
            console.log('SUCCESS!!');
          })
          .catch(function(){
            console.log('FAILURE!!');
          });
      }
    }
  }

</script>
<style>

</style>
