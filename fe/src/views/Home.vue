<template>
 <div class="container pt-5 vh-100">
  <nav class="navbar navbar-expand-lg navbar-light">
   <div class="container-fluid">
    <img src="@/assets/images/aclc-logo.png" alt="" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
       <a class="nav-link me-2" href="#"><i class="fas fa-user me-2"></i>Login</a>
      </li>
      <li class="nav-item">
       <a target="_self" href="https://www.amaes.edu.ph/amaes-online-pre-registration/" class="nav-link btn btn-primary text-light rounded-pill px-3">Pre-register</a>
      </li>
     </ul>
    </div>
   </div>
  </nav>
  <div class="w-100 mt-5 pb-5">
   <div class="card p-5">
    <div class="row">
     <h4 class="text-center fw-light pb-5">ACLC Online Identification Card Registration</h4>
     <hr />
     <h5 class="fw-normal"><small>Please fill-in all the required fields</small></h5>
     <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <h6 class="text-primary mt-5">Tell us about yourself</h6>
      <div class="mb-3 mt-3">
       <label class="form-label">First Name <small class="text-danger">*</small></label>
       <input type="text" v-model="info.firstname" class="form-control shadow-none" placeholder="John" />
      </div>
      <div class="mb-3">
       <label class="form-label">Middle Name <small>(Optional)</small></label>
       <input type="text" v-model="info.middlename" class="form-control shadow-none" placeholder="Roe" />
      </div>
      <div class="mb-3">
       <label class="form-label">Last Name <small class="text-danger">*</small></label>
       <input type="text" v-model="info.lastname" class="form-control shadow-none" placeholder="Carney" />
      </div>
      <div class="row mb-3">
       <div class="col-6">
        <label class="form-label">Gender <small class="text-danger">*</small></label>
        <select v-model="info.gender" class="form-select">
         <option value="male">Male</option>
         <option value="female">Female</option>
        </select>
       </div>
       <div class="col-6">
        <label class="form-label">Age <small class="text-danger">*</small></label>
        <input v-model="info.age" type="number" class="form-control shadow-none" placeholder="22" />
       </div>
      </div>
      <div class="row">
       <div class="col-6">
        <label class="form-label">Contact Number <small class="text-danger">*</small></label>
        <input v-model="info.contact" type="number" class="form-control shadow-none" placeholder="09123456789" />
       </div>
       <div class="col-6">
        <label class="form-label">Birthday <small class="text-danger">*</small></label>
        <input v-model="info.birthday" type="date" class="form-control shadow-none" />
       </div>
      </div>
      <h6 class="text-primary mt-5">Where do you live?</h6>
      <div class="mb-3 mt-3">
       <label class="form-label">Current Address <small class="text-danger">*</small></label>
       <input v-model="info.currentaddress" type="text" class="form-control shadow-none" placeholder="Baranggay, Street, City, Province, Zip Code" />
      </div>
      <div class="mb-3 mt-3">
       <label class="form-label">Primary Address <small class="text-danger">*</small></label>
       <input v-model="info.primaryaddress" type="text" class="form-control shadow-none" placeholder="Baranggay, Street, City, Province, Zip Code" />
      </div>
      <h6 class="text-primary mt-5">In case of emergency, please add your contact person.</h6>
      <div class="mb-3 mt-3">
       <label class="form-label">Full Name <small class="text-danger">*</small></label>
       <input v-model="info.contactperson" type="text" class="form-control shadow-none" placeholder="John Doe" />
      </div>
      <div class="mb-3 mt-3">
       <label class="form-label">Relation <small class="text-danger">*</small></label>
       <input v-model="info.contactpersonrelation" type="text" class="form-control shadow-none" placeholder="Father" />
      </div>
      <div class="mb-3 mt-3">
       <label class="form-label">Contact Number <small class="text-danger">*</small></label>
       <input v-model="info.contactpersonnumber" type="number" class="form-control shadow-none" placeholder="091023456789" />
      </div>
     </div>
     <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
      <h6 class="text-primary mt-5">College Information</h6>
      <div class="mb-3 mt-3">
       <label class="form-label">College Branch <small class="text-danger">*</small></label>
       <select v-model="info.branch" class="form-select shadow-none">
        <option value="tacloban-branch">Tacloban City</option>
        <option value="ormoc-branch">Ormoc City</option>
        <option value="mandaue-branch">Mandaue City</option>
       </select>
      </div>
      <div class="mb-3">
       <label class="form-label">College Address <small class="text-danger">*</small></label>
       <input v-model="info.collegeaddress" type="text" class="form-control shadow-none" placeholder="Real St. Tacloban City, Leyte" />
      </div>
      <div class="mb-3">
       <label class="form-label">Your Student Number <small class="text-danger">*</small></label>
       <input v-model="info.studentnumber" type="text" class="form-control shadow-none" placeholder="18004580200" />
      </div>
      <div class="mb-3">
       <label class="form-label">Your Section <small class="text-danger">*</small></label>
       <input v-model="info.section" type="text" class="form-control shadow-none" placeholder="18004580200" />
      </div>
      <div class="mb-3">
       <label class="form-label">Course Enrolled <small class="text-danger">*</small></label>
       <select v-model="info.courseenrolled" class="form-select shadow-none">
        <option value="BSIT">Bachelor of Science in Information Technology</option>
        <option value="BSCS">Bachelor of Science in Computer Science</option>
        <option value="BSIS">Bachelor of Science in Information System</option>
        <option value="BSBA">Bachelor of Science in Business Administration</option>
        <option value="BSA">Bachelor of Science in Accountancy</option>
        <option value="BSE">Bachelor of Science in Entrepreneurship</option>
        <option value="BSAT">Bachelor of Science in Accounting Technology</option>
        <option value="BSREM">Bachelor of Science in Real Estate Management</option>
       </select>
      </div>
      <div class="mb-3">
       <label class="form-label">Upload your enrollment slip here <small class="text-danger">*</small></label>
       <VueFileAgent
        :uploadUrl="uploadUrl"
        v-model="fileRecords"
        :thumbnailSize="120"
        :theme="'list'"
        :deletable="true"
        :editable="true"
        :maxFiles="1"
        :meta="true"
        :accept="'image/*,.pdf'"
        :maxSize="'5MB'"
        @select="filesSelected($event)"
        @beforedelete="onBeforeDelete($event)"
        @delete="fileDeleted($event)"
       ></VueFileAgent>
      </div>
      <div class="mt-5 d-flex justify-content-end">
       <button class="btn btn-primary px-4">Submit</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
 export default {
  data: function () {
   return {
    info: {
     branch: 'tacloban-branch',
     firstname: '',
     middlename: '',
     lastname: '',
     gender: 'male',
     age: '',
     birthday: '',
     contact: '',
     currentaddress: '',
     primaryaddress: '',
     contactperson: '',
     contactpersonnumber: '',
     contactpersonrelation: '',
     collegeaddress: '',
     studentnumber: '',
     section: '',
     courseenrolled: 'BSIT',
    },
    selectedBranch: 1,
    fileRecords: [],
    uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
    uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
    fileRecordsForUpload: [],
   };
  },
  methods: {
   uploadFiles: function () {
    this.$refs.vueFileAgent.upload(this.uploadUrl, this.uploadHeaders, this.fileRecordsForUpload);
    this.fileRecordsForUpload = [];
   },
   deleteUploadedFile: function (fileRecord) {
    this.$refs.vueFileAgent.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord);
   },
   filesSelected: function (fileRecordsNewlySelected) {
    var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
    this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords);
   },
   onBeforeDelete: function (fileRecord) {
    var i = this.fileRecordsForUpload.indexOf(fileRecord);
    if (i !== -1) {
     this.fileRecordsForUpload.splice(i, 1);
    } else {
     if (confirm('Are you sure you want to delete?')) {
      this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
     }
    }
   },
   fileDeleted: function (fileRecord) {
    var i = this.fileRecordsForUpload.indexOf(fileRecord);
    if (i !== -1) {
     this.fileRecordsForUpload.splice(i, 1);
    } else {
     this.deleteUploadedFile(fileRecord);
    }
   },
  },
 };
</script>

<style></style>
