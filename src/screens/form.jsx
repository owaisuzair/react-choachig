// import React from 'react'
// // import {Box, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField,} from "@mui/material";
// import{Header} from'../components'
// function form() {
//   return (
//  <>
//   <Header/>
//   <section id="form">
//             {/* <CareerBanner page="Form" title="Apply Now"/> */}
//             <div className="container">
//                 <div className="main-form">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="signup-body">
//                                     <div>
//                                         <div className="main-box">
//                                             <div className="row">
//                                                 <div className="col-lg-12">
//                                                     <div className="heading">
//                                                         <h3>Personal Info</h3>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="row">
//                                                 <div className="main-form">
//                                                     <div className="row">
//                                                         <div className="col-lg-12 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Email"
//                                                                         type='email'
//                                                                         name='email'
//                                                                         id="fullWidth"
//                                                                         placeholder="Enter Your Email"
//                                                                         required
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-6 my-3">
//                                                             <Box
//                                                                 sx={{
//                                                                     width: 500,
//                                                                     maxWidth: "100%",
//                                                                 }}
//                                                             >
//                                                                 <TextField
//                                                                     fullWidth
//                                                                     label="First Name"
//                                                                     name='firstName'
//                                                                     id="fullWidth"
//                                                                     placeholder="Enter Your First Name"
//                                                                     required
//                                                                 />
//                                                             </Box>
//                                                         </div>
//                                                         <div className="col-lg-6 my-3">
//                                                             <Box>
//                                                                 <TextField
//                                                                     fullWidth
//                                                                     label="Last Name"
//                                                                     name='lastName'
//                                                                     id="fullWidth"
//                                                                     placeholder="Enter Your Last Name"
//                                                                 />
//                                                             </Box>
//                                                         </div>
//                                                         <div className="col-lg-12 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Address 1"
//                                                                         id="fullWidth"
//                                                                         name='address1'
//                                                                         required
//                                                                         placeholder="Enter Your Adrress"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-12 my-3">
//                                                             <div className="email">
//                                                                 <Box>
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Address 2"
//                                                                         name='address2'
//                                                                         id="fullWidth"
//                                                                         placeholder="Enter Your Address (Optional)"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-4 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Cell Phone"
//                                                                         name='Phone'
//                                                                         id="fullWidth"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div>
//                                                         <div className="col-lg-4 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         type='number'
//                                                                         label="Current Salary"
//                                                                         name='currentSalary'
//                                                                         id="fullWidth"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div>
//                                                         {/* <div className="col-lg-4 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <FormControl fullWidth>
//                                                                         <InputLabel id="demo-simple-select-label">
//                                                                             PKR/Hour
//                                                                         </InputLabel>
//                                                                         <Select
//                                                                             labelId="CurrentSalaryPerTime"
//                                                                             id="CurrentSalaryPerTime"
//                                                                             // value={age}
//                                                                             label="PKR/Hour"
//                                                                             name='CurrentSalaryPerTime'
//                                                                             // onChange={handleChange}
//                                                                         >
//                                                                             <MenuItem
//                                                                                 value='PKR Hour'> PKR/Hour</MenuItem>
//                                                                             <MenuItem
//                                                                                 value='PKR Month'> PKR/Month</MenuItem>
//                                                                             <MenuItem
//                                                                                 value='PKR Year'>PKR/Year</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}
//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="City Name"
//                                                                         id="fullWidth"
//                                                                         name='city'
//                                                                         placeholder="Enter Your City Name"
//                                                                         required
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}
//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <FormControl fullWidth>
//                                                                         <InputLabel id="province">
//                                                                             Province
//                                                                         </InputLabel>
//                                                                         <Select
//                                                                             labelId="demo-simple-select-label"
//                                                                             id="demo-simple-select"
//                                                                             // value={data.province}
//                                                                             name='province'
//                                                                             label="province"
//                                                                             required
//                                                                         >
//                                                                             <MenuItem value='Azad Jamu & Kashmir'> Azad
//                                                                                 Jamu & Kashmir </MenuItem>
//                                                                             <MenuItem
//                                                                                 value='Balochistan'> Balochistan </MenuItem>
//                                                                             <MenuItem value='Gilgit Baltistan'> Gilgit
//                                                                                 Baltistan </MenuItem>
//                                                                             <MenuItem value='Punjab'>Punjab</MenuItem>
//                                                                             <MenuItem
//                                                                                 value='Khyber PakhtunKhwa'> </MenuItem>
//                                                                             <MenuItem value='Sindh'>Sindh</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}
//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box>
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Post Code"
//                                                                         name='postCode'
//                                                                         type='number'
//                                                                         id="fullWidth"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}
//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <FormControl fullWidth>
//                                                                         <InputLabel id="demo-simple-select-label">
//                                                                             Country
//                                                                         </InputLabel>
//                                                                         <Select
//                                                                             labelId="demo-simple-select-label"
//                                                                             id="demo-simple-select"
//                                                                             // value={age}
//                                                                             name='Country'
//                                                                             label='Country'
//                                                                             // label="Age"
//                                                                             // onChange={handleChange}
//                                                                         >
//                                                                             <MenuItem
//                                                                                 value='Pakistan'>Pakistan</MenuItem>
//                                                                             <MenuItem value='Germany'>Germany</MenuItem>
//                                                                             <MenuItem value='India'>India</MenuItem>
//                                                                             <MenuItem value='United Kingdom'>United
//                                                                                 Kingdom</MenuItem>
//                                                                             <MenuItem value='United States'> United
//                                                                                 States </MenuItem>
//                                                                             <MenuItem value='Canada'>Canada</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}

//                                                         {/*<div className="col-lg-4 my-3">
//                               <div className="email">
//                                 <Box  sx={{ maxWidth: "100%" }}>
//                                   <TextField
//                                     fullWidth
//                                     label="Home Phone"
//                                     id="fullWidth"
//                                   />
//                                 </Box>
//                               </div>
//                             </div>
//                             <div className="col-lg-4 my-3">
//                               <div className="email">
//                                 <Box
//                                   sx={{
//                                     maxWidth: "100%",
//                                   }}
//                                 >
//                                   <TextField
//                                     fullWidth
//                                     label="Work Phone"
//                                     id="fullWidth"
//                                   />
//                                 </Box>
//                               </div>
//                             </div>*/}

//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <TextField
//                                                                         fullWidth
//                                                                         label="Expected Salary"
//                                                                         name='expectedSalary'
//                                                                         type='number'
//                                                                         id="fullWidth"
//                                                                     />
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}

//                                                         {/* <div className="col-lg-3 my-3">
//                                                             <div className="email">
//                                                                 <Box
//                                                                     sx={{
//                                                                         maxWidth: "100%",
//                                                                     }}
//                                                                 >
//                                                                     <FormControl fullWidth>
//                                                                         <InputLabel id="demo-simple-select-label">
//                                                                             PKR/Hour
//                                                                         </InputLabel>
//                                                                         <Select
//                                                                             labelId="demo-simple-select-label"
//                                                                             id="demo-simple-select"
//                                                                             // value={age}
//                                                                             name='expectedSalaryPerTime'
//                                                                             label="PKR/Hour"
//                                                                         >
//                                                                             <MenuItem selected
//                                                                                 value='PKR Hour'> PKR/Hour</MenuItem>
//                                                                             <MenuItem
//                                                                                 value='PKR Month'> PKR/Month</MenuItem>
//                                                                             <MenuItem
//                                                                                 value='PKR Year'>PKR/Year</MenuItem>
//                                                                         </Select>
//                                                                     </FormControl>
//                                                                 </Box>
//                                                             </div>
//                                                         </div> */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="my-5">
//                                         <div className="col-lg-12 col-md-12 education-box ">
//                                             <div className="row">
//                                                 <div className="col-lg-12">
//                                                     <div className="heading d-flex justify-content-between">
//                                                         <h3>Education</h3>
//                                                         <AddIcon
//                                                             onClick={addEducationFields}
//                                                             sx={{
//                                                                 fontSize: 40,
//                                                                 color: "white",
//                                                                 cursor: "pointer",
//                                                             }}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="row">
//                                                 <div className="main-form">
//                                                     {inputEducationFields.map((item, index) => {
//                                                         return (
//                                                             <div key={index}>
//                                                                 <div className="close-icon d-flex justify-content-end">
//                                                                     <CloseIcon
//                                                                         onClick={removeEduFields}
//                                                                         sx={{
//                                                                             cursor: "pointer",
//                                                                         }}
//                                                                     />
//                                                                 </div>
//                                                                 <div className="row">
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="School"
//                                                                                     id="fullWidth"
//                                                                                     name="education[school]"
//                                                                                     // value={item.school}
//                                                                                     // onChange={(event) =>
//                                                                                     //   handleChangeEdu(index, event)
//                                                                                     // }
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="Educational Program"
//                                                                                     id="fullWidth"
//                                                                                     name="education[degree]"
//                                                                                     /*value={item.degree}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeEdu(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="Year"
//                                                                                     id="fullWidth"
//                                                                                     name="education[year]"
//                                                                                     /*value={item.year}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeEdu(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="Major"
//                                                                                     id="fullWidth"
//                                                                                     name="education[major]"
//                                                                                     /*value={item.major}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeEdu(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className=" my-5">
//                                         <div className="col-lg-12 col-md-12 education-box">
//                                             <div className="row">
//                                                 <div className="col-lg-12">
//                                                     <div className="heading d-flex justify-content-between">
//                                                         <h3>Experience</h3>
//                                                         <AddIcon
//                                                             onClick={addExperienceFields}
//                                                             sx={{
//                                                                 fontSize: 40,
//                                                                 color: "white",
//                                                                 cursor: "pointer",
//                                                             }}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="row">
//                                                 <div className="main-form">
//                                                     {inputExperienceFields.map((item, index) => {
//                                                         return (
//                                                             <div key={index}>
//                                                                 <div className="close-icon d-flex justify-content-end">
//                                                                     <CloseIcon
//                                                                         onClick={removeExpFields}
//                                                                         sx={{
//                                                                             cursor: "pointer",
//                                                                         }}
//                                                                     />
//                                                                 </div>
//                                                                 <div className="row">
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="Name Of Company"
//                                                                                     id="fullWidth"
//                                                                                     name="experience[companyName]"
//                                                                                     /*value={item.companyName}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeExp(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextField
//                                                                                     fullWidth
//                                                                                     label="Title, Skills, Certifications,"
//                                                                                     id="fullWidth"
//                                                                                     name="experience[title]"
//                                                                                     /*value={item.title}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeExp(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="row">
//                                                                             <div className="col-lg-2 col-md-6 col-6">
//                                                                                 {" "}
//                                                                                 <div className="email">
//                                                                                     <Box
//                                                                                         sx={{
//                                                                                             maxWidth: "100%",
//                                                                                         }}
//                                                                                     >
//                                                                                         <FormControl fullWidth>
//                                                                                             <InputLabel
//                                                                                                 id="demo-simple-select-label">
//                                                                                                 Date
//                                                                                             </InputLabel>
//                                                                                             <Select
//                                                                                                 labelId="demo-simple-select-label"
//                                                                                                 id="demo-simple-select"
//                                                                                                 name="experience[startMonth]"
//                                                                                                 label="start Month"
//                                                                                                 /*value={item.startMonth}
//                                                                                                 onChange={(event) =>
//                                                                                                     handleChangeExp(index, event)
//                                                                                                 }*/
//                                                                                             >
//                                                                                                 <MenuItem value={1}>
//                                                                                                     {" "}
//                                                                                                     January
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={2}>
//                                                                                                     {" "}
//                                                                                                     Februry
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={3}>
//                                                                                                     March
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={4}>
//                                                                                                     April
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={5}>
//                                                                                                     May
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={6}>
//                                                                                                     June
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={7}>
//                                                                                                     July
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={8}>
//                                                                                                     August
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={9}>
//                                                                                                     September
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={10}>
//                                                                                                     October
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={11}>
//                                                                                                     November
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={12}>
//                                                                                                     December
//                                                                                                 </MenuItem>
//                                                                                             </Select>
//                                                                                         </FormControl>
//                                                                                     </Box>
//                                                                                 </div>
//                                                                                 {" "}
//                                                                             </div>
//                                                                             <div className="col-lg-2 col-md-6 col-6">
//                                                                                 {" "}
//                                                                                 <div className="email">
//                                                                                     <Box
//                                                                                         sx={{
//                                                                                             maxWidth: "100%",
//                                                                                         }}
//                                                                                     >
//                                                                                         <TextField
//                                                                                             fullWidth
//                                                                                             label="startYear"
//                                                                                             id="fullWidth"
//                                                                                             type='number'
//                                                                                             name="experience[startYear]"
//                                                                                             /*value={item.startYear}
//                                                                                             onChange={(event) =>
//                                                                                                 handleChangeExp(index, event)
//                                                                                             }*/
//                                                                                         />
//                                                                                     </Box>
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div
//                                                                                 className="col-lg-1 d-flex justify-content-center align-items-center">
//                                                                                 <span>to</span>
//                                                                             </div>
//                                                                             <div className="col-lg-2 col-md-6 col-6">
//                                                                                 {" "}
//                                                                                 <div className="email">
//                                                                                     <Box
//                                                                                         sx={{
//                                                                                             maxWidth: "100%",
//                                                                                         }}
//                                                                                     >
//                                                                                         <FormControl fullWidth>
//                                                                                             <InputLabel
//                                                                                                 id="demo-simple-select-label">
//                                                                                                 Date
//                                                                                             </InputLabel>
//                                                                                             <Select
//                                                                                                 labelId="demo-simple-select-label"
//                                                                                                 id="demo-simple-select"
//                                                                                                 label="Age"
//                                                                                                 name="experience[endMonth]"
//                                                                                                /* value={item.endMonth}
//                                                                                                 onChange={(event) =>
//                                                                                                     handleChangeExp(index, event)
//                                                                                                 }*/
//                                                                                             >
//                                                                                                 <MenuItem value={1}>
//                                                                                                     {" "}
//                                                                                                     January
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={2}>
//                                                                                                     {" "}
//                                                                                                     Februry
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={3}>
//                                                                                                     March
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={4}>
//                                                                                                     April
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={5}>
//                                                                                                     May
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={6}>
//                                                                                                     June
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={7}>
//                                                                                                     July
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={8}>
//                                                                                                     August
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={9}>
//                                                                                                     September
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={10}>
//                                                                                                     October
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={11}>
//                                                                                                     November
//                                                                                                 </MenuItem>
//                                                                                                 <MenuItem value={12}>
//                                                                                                     December
//                                                                                                 </MenuItem>
//                                                                                             </Select>
//                                                                                         </FormControl>
//                                                                                     </Box>
//                                                                                 </div>
//                                                                                 {" "}
//                                                                             </div>
//                                                                             <div className="col-lg-2 col-md-6 col-6">
//                                                                                 {" "}
//                                                                                 <div className="email">
//                                                                                     <Box
//                                                                                         sx={{
//                                                                                             maxWidth: "100%",
//                                                                                         }}
//                                                                                     >
//                                                                                         <TextField
//                                                                                             fullWidth
//                                                                                             label="year"
//                                                                                             id="fullWidth"
//                                                                                             type='number'
//                                                                                             name="experience[endYear]"
//                                                                                            /* value={item.endYear}
//                                                                                             onChange={(event) =>
//                                                                                                 handleChangeExp(index, event)
//                                                                                             }*/
//                                                                                         />
//                                                                                     </Box>
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                     <div className="col-lg-12 my-3">
//                                                                         <div className="email">
//                                                                             <Box
//                                                                                 sx={{
//                                                                                     maxWidth: "100%",
//                                                                                 }}
//                                                                             >
//                                                                                 <TextareaAutosize
//                                                                                     maxRows={4}
//                                                                                     aria-label="maximum height"
//                                                                                     placeholder="Description"
//                                                                                     style={{width: "100%", height: 200}}
//                                                                                     name="experience[desc]"
//                                                                                     /*value={item.desc}
//                                                                                     onChange={(event) =>
//                                                                                         handleChangeExp(index, event)
//                                                                                     }*/
//                                                                                 />
//                                                                             </Box>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row my-5">
//                                         <div className="col-lg-6 col-md-6 col-xs-6">
//                                             {/*<div className="dropZone" aria-disabled="false">*/}
//                                                 <Dropzone setFile={setFile} />
//                                             {/*</div>*/}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="submit">
//                                     <button className="custom-btn submit" type='submit' disabled={loader}>
//                                         {loader ? 'Submitting' : 'Submit'}
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//  </>
//   )
// }

// export default form