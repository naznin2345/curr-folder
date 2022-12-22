const fs = require("fs");
// JSON data
const data = require("./data.json");
// Build paths
const { buildPathHtml } = require("./buildPaths");

/**
 * Take an object which has the following model
 * @param {Object} item
 *
 *
 * @model
 * {
 *   "studentId": `Number`,
 *   "studentName": `String`,
 *   "courseCode": `String`,
 *   "courseTitle": `String`,
 *   "Date": `String`,
 *   "facultyName": `String`,
 *   "semester": `Number`,
 * }
 *
 * @returns {String}
 */
const createRow = (item) => `
  <tr>
    <td>${item.serialNo}</td>
    <td>${item.courseCode}</td>
    <td>${item.titleCourses}</td>
    <td>${item.credits}</td>

    </td>


    </tr>


`;

/**
 * @description Generates an `html` table with all the table rows
 * @param {String} rows
 * @returns {String}
 */
const createTable = (rows) => `
  <table border="1" style="page-break-after: always;">
  <caption>
  <h5 style="text-align:left">
  Category of Courses:</br>
  i. General Education Courses (GED: 17 GED courses are:</h5>
   </caption>
    <tr>

        <th style="width:10px;">Serial No</td>
        <th style="width:10px;">Course Code</td>
        <th style="width:100px;">Title of the Courses</td>
        <th style="width:100px;">Credits</td>


    ${rows}
    </tr>
    <tr>
    <td colspan="3"style="text-align:center;"><b>Total</b></td>
    <td>35</td>
    </tr>

  </table>

  </br>
    </br>







    <table border="1" style="page-break-after: always;">
    <caption>
  <h5 style="text-align:left">
  ii. Core Courses: 27 core courses are: </br>



  </h5>


  </caption>
    <tr>

        <th style="width:10px;">SI.No</td>
        <th style="width:10px;">Course Code</td>
        <th style="width:100px;">Course Title </td>
        <th style="width:100px;">Credits of course</td>
        </tr>

        <tr>
        <td>1.</td>
        <td> BUS-1111 </td>
        <td>Introduction to Business</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>2.</td>
        <td> BUS-1122 </td>
        <td>Principles of Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>3.</td>
        <td> BUS-1133 </td>
        <td>Principles of Accounting</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>4.</td>
        <td> BUS-1251 </td>
        <td>Principles of Marketing</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>5.</td>
        <td> BUS-1212 </td>
        <td>Business Communication</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>6.</td>
        <td>BUS-2141</td>
        <td>Principles of Finance</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>7.</td>
        <td>BUS-1273</td>
        <td> Business Mathematics</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>8.</td>
        <td>BUS-2215</td>
        <td> Business Law</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>9.</td>
        <td>BUS-2162</td>
        <td> Fundamentals of MIS</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>10.</td>
        <td>BUS-2133</td>
        <td> Intermediate Accounting</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>11.</td>
        <td>BUS-2211</td>
        <td> Entrepreneurship Development</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>12.</td>
        <td>BUS-2222</td>
        <td> Organizational Behavior</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>13.</td>
        <td>BUS-2273</td>
        <td> Mathematics for Business Decisions</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>14.</td>
        <td>BUS-3126</td>
        <td> Human Resource Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>15.</td>
        <td>BUS-3131</td>
        <td>Cost and Management Accounting</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>16.</td>
        <td>BUS-3172</td>
        <td>Business Statistics</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>17.</td>
        <td> BUS-2114</td>
        <td>International Business</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>18.</td>
        <td> BUS-3163</td>
        <td>Digital Business and E-commerce</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>19.</td>
        <td>BUS-3144</td>
        <td> Bank Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>20.</td>
        <td>BUS-4172</td>
        <td>Operations Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>21.</td>
        <td> BUS-3155</td>
        <td> Marketing Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>22.</td>
        <td>BUS-2234</td>
        <td> Auditing and Taxation</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>23.</td>
        <td>BUS-3241</td>
        <td>Financial Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>24.</td>
        <td>BUS-3242</td>
        <td> Insurance and Risk Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>25.</td>
        <td>BUS-3273</td>
        <td>Supply Chain Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>26.</td>
        <td>BUS-4171</td>
        <td> Project Management</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>27.</td>
        <td>BUS-4123</td>
        <td>Strategic Management</td>
        <td> 03 </td>
        </tr>
    <tr>
    <td colspan="3"style="text-align:center;"><b>Total</b></td>
    <td>81</td>
    </tr>

    </table>
    </br></br></br>




    <table>
    <caption>
  <h5 style="text-align:left">
  iii. Elective Courses/ Major Area Courses </br>
Accounting and Information System: Students have to study following six courses in the major area; three credits each, total 6x3= 18 credits. </br>
</h5></caption>
    <tr>

        <th style="width:10px;">SI.No</td>
        <th style="width:10px;">Course Code</td>
        <th style="width:100px;">Title of the Courses</td>
        <th style="width:100px;">Credits</td>
        </tr>

        <tr>
        <td>1.</td>
        <td>BUS-3237  </td>
        <td>Advanced Financial Accounting</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>2.</td>
        <td>BUS-4137</td>
        <td>Advanced Auditing</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>3.</td>
        <td>BUS-4138</td>
        <td>Corporate Taxation</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>4.</td>
        <td>BUS-3238</td>
        <td>Advanced Cost Accounting</td>
        <td> 03 </td>
        </tr>

        <tr>
        <td>5.</td>
        <td>BUS-4139</td>
        <td>Advanced Management Accounting</td>
        <td> 03 </td>
        </tr>
        <tr>
        <td>6.</td>
        <td>BUS-3239</td>
        <td>Accounting Theory</td>
        <td> 03 </td>
        </tr>

        <table>
        <caption>
      <h5 style="text-align:left">
      Finance and Banking: Students have to study following six courses in the major area; three credits each, total 6x3= 18 credits. </br>
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3247</td>
            <td>Financial Markets and Institutions</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3248</td>
            <td>Credit Management</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3249</td>
            <td>Investment Theory</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4147</td>
            <td>Islamic Banking & Finance</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4148</td>
            <td>Corporate Finance</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4149</td>
            <td>Central Banking </td>
            <td> 03 </td>
            </tr>



        </table>


        </br>
        <table>
        <caption>
      <h5 style="text-align:left">
      Human Resource Management: Students have to study following six courses in the major area;three credits each, total 6x3= 18 credits.
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3227 </td>
            <td>Human Resource Planning</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3228</td>
            <td>Compensation Management</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3229</td>
            <td>Industrial Relations</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4127</td>
            <td>International Human Resource Management</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4128</td>
            <td>Leadership Development</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4129</td>
            <td>Human Resource Management Practices in Bangladesh </td>
            <td> 03 </td>
            </tr>



        </table>





        </br>
        <table>
        <caption>
      <h5 style="text-align:left">
      Marketing: Students have to study following six courses in the major area; three creditseach, total 6x3= 18 credits.</br>
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3257</td>
            <td>Services Marketing</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3258</td>
            <td>International Marketing</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3259</td>
            <td>Consumer Behavior</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4157</td>
            <td>Marketing Communications</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4158 </td>
            <td>Marketing Research </td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4159</td>
            <td>Strategic Marketing </td>
            <td> 03 </td>
            </tr>



        </table>




        </br></br></br></br>
        <table >
        <caption>
      <h5 style="text-align:left">
      Management Information System: Students have to study following six courses in the major area; three credits each, total 6x3= 18 credits. </br>
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3267</td>
            <td>Database Management Systems</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3268</td>
            <td>Systems Analysis and Design</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3269</td>
            <td>Data Communications and Networking</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4167</td>
            <td>Web Design and Development </td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4168</td>
            <td>Computer Based Simulation Systems </td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4169</td>
            <td>Computer Programming</td>
            <td> 03 </td>
            </tr>



        </table>




        <table>
        <caption>
      <h5 style="text-align:left">
      Supply Chain Management: Students have to study following six courses in the major area;three credits each, total 6x3= 18 credits. </br>
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3277</td>
            <td>Supply Chain Planning</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3278</td>
            <td>Supply Chain Inventory Management</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3279</td>
            <td>Supplier Relationship Management</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4177</td>
            <td>Warehouse Management</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4178</td>
            <td>Transportation and Distribution Management</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4179</td>
            <td>Supply Chain Information System</td>
            <td> 03 </td>
            </tr>



        </table>




        <table>
        <caption>
      <h5 style="text-align:left">
      Entrepreneurship Development: Students have to study following six courses in the major area; three credits each, total 6x3= 18 credits. </br>
    </h5></caption>
        <tr>

            <th style="width:10px;">SI.No</td>
            <th style="width:10px;">Course Code</td>
            <th style="width:100px;">Title of the Courses</td>
            <th style="width:100px;">Credits</td>
            </tr>

            <tr>
            <td>1.</td>
            <td>BUS-3287</td>
            <td>Business Plan Preparation</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>2.</td>
            <td>BUS-3288</td>
            <td>New Product Development</td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>3.</td>
            <td>BUS-3289</td>
            <td>Social Entrepreneurship for Emerging Markets</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>4.</td>
            <td>BUS-4187</td>
            <td>Environmental Entrepreneurship </td>
            <td> 03 </td>
            </tr>

            <tr>
            <td>5.</td>
            <td>BUS-4188</td>
            <td>Management of Organizational Change and Innovation</td>
            <td> 03 </td>
            </tr>
            <tr>
            <td>6.</td>
            <td>BUS-4189</td>
            <td>Digital Entrepreneurship</td>
            <td> 03 </td>
            </tr>



        </table>
        </br></br>
      <h5 style="text-align:left">
      &nbsp&nbsp&nbsp &nbsp&nbsp&nbspiv.&nbsp&nbsp Internship/Research Project</h5>
     <p> 6 credits, report will be submitted by the student based on the thesis work / internship and &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp  have  to face defense board after submission of report.</P>
      </br>



        </br></br></br></br></br></br></br></br></br></br></br>
        <h4 style="text-align:left">
        Semester-wise Distribution of the Courses</h4>
        <caption>

        <h5 style="text-align:center">BBA Program</h5>
        <h5 style="text-align:center">Semester wise distribution of the courses</h5>
        </caption>

        <table>
        <tr>

            <th style="width:10px;">Year</td>
            <th style="width:10px;">Semester</td>
            <th style="width:100px;">Course Code</td>
            <th style="width:100px;">Course Title</td>
            <th style="width:100px;">Credit</td>
            </tr>

            <tr>

            <td rowspan="16"><b>1<sup>st</sup></br>Year<b></td>
            <td rowspan="7"><b>1<sup>st</sup></br></b></td>
            <td>GED-1131</td>
            <td> Basic English</td>
            <td>02</td>
            </tr>


            <tr>
            <td>BUS-1111</td>
            <td>Introduction to Business</td>
            <td>03</td>
            </tr>

            <tr>


            <td>BUS-1122 </td>
            <td>Principles of Management</td>
            <td>03</td>
            </tr>

            <tr>


            <td>GED-1122</td>
            <td>Basic Computer Applications</td>
            <td>02</td>
            </tr>

            <tr>


            <td>BUS-1133</td>
            <td>Principles of Accounting</td>
            <td>03</td>
            </tr>

            <tr>


            <td>GED-1101 </td>
            <td>Bangla Language and Literature</td>
            <td>03</td>
            </tr>

            <tr>


            <td>GED-1117</td>
            <td>History of the Emergence of Bangladesh</td>
            <td>03</td>
            </tr>

            <tr>

            <td></td>
            <td></td>
            <td></td>
            <td>17</td>
            </tr>

            <tr>


            <td rowspan="8"><b>2<sup>nd</sup></b></td>
            <td>BUS-1251</td>
            <td>Principles of Marketing </td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-1212</td>
            <td>Business Communication</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED 1231</td>
            <td>Functional English</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED-2181</td>
            <td> Introduction to Economics</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED-1291</td>
            <td>Introduction to Sociology</td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-1273</td>
            <td>Business Mathematics</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED-1216</td>
            <td> Fundamentals of Psychology</td>
            <td>03</td>
            </tr>

            <tr>



            <td></td>
            <td></td>
            <td>17</td>

            </tr>







            <tr>

            <td rowspan="16"><b>2<sup>nd</sup></br>Year</b></td>
            <td rowspan="7"><b><br>3<sup>rd</sup></br></b></td>
            <td>GED-1261</td>
            <td>Sustainable Development</td>
            <td>02</td>
            </tr>


            <tr>
            <td>BUS-2141</td>
            <td> Principles of Finance</td>
            <td>03</td>
            </tr>

            <tr>


            <td>BUS-2162</td>
            <td>Fundamentals of MIS</td>
            <td>03</td>
            </tr>

            <tr>


            <td>GED-1145</td>
            <td> Bangladesh Studies</td>
            <td>02</td>
            </tr>

            <tr>


            <td>BUS-2133</td>
            <td> Intermediate Accounting</td>
            <td>03</td>
            </tr>

            <tr>


            <td>BUS-2114 </td>
            <td>International Business</td>
            <td>03</td>
            </tr>

            <tr>


            <td>GED-2115</td>
            <td> Macro Economics</td>
            <td>03</td>
            </tr>

            <tr>

            <td></td>
            <td></td>
            <td></td>
            <td>18</td>
            </tr>

            <tr>

            <td rowspan="8"><b>4<sup>th</sup></b> </td>


            <td>BUS-2211 </td>
            <td>Entrepreneurship Development</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED-3211</td>
            <td> Smart Village Studies</td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-2222</td>
            <td>Organizational Behavior</td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-2273 </td>
            <td>Mathematics for Business Decisions </td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-2234 </td>
            <td>Auditing and Taxation</td>
            <td>03</td>
            </tr>

            <tr>



            <td>BUS-2215 </td>
            <td>Business Law</td>
            <td>03</td>
            </tr>

            <tr>



            <td>GED-2193 </td>
            <td>Tourism and Hospitality Management</td>
            <td>03</td>
            </tr>

            <tr>



            <td></td>
            <td></td>
            <td>20</td>

            </tr>



            <tr>
            <td rowspan="6"><b>3<sup>rd</sup></br>Year<b></td>
            <td rowspan="6"><b>5<sup>th</sup></b> </td>
            <td>BUS-3131</td>
            <td>Cost and Management Accounting </td>
            <td>02</td>
            </tr>


            <tr>
            <td>BUS-3172</td>
            <td>Business Statistics</td>
            <td>03</td>
            </tr>

            <tr>
            <td>GED-3114</td>
            <td>Development Studies</td>
            <td>03</td>
            </tr>
            <tr>
            <td>BUS-3163 </td>
            <td>Digital Business and E-commerce</td>
            <td>03</td>
            </tr>
            <tr>
            <td>BUS-3144</td>
            <td> Bank Management</td>
            <td>03</td>
            </tr>

            <tr>
            <td>GED-4251</td>
            <td>Professional Practices and Ethics</td>
            <td>03</td>
            </tr>










        </table>
        </br></br></br></br></br></br></br></br>

        <table>
         <tr>
            <td rowspan="11">           </td>
            <td rowspan="3">            </td>
            <td>BUS-3155</td>
            <td>Marketing Management </td>
            <td>03</td>
            </tr>


            <tr>
            <td>BUS-3126</td>
            <td>Human Resource Management</td>
            <td>03</td>
            </tr>

            <tr>
            <td colspan="2"style="text-align:center;"><b>Total</b></td>

            <td>22</td>
            </tr>

            <tr>
            <td rowspan="8"><b>6<sup>th</sup></b></td>
            <td>GED-3213</td>
            <td>Research Methodology </td>
            <td>02</td>
            </tr>

            <tr>
            <td>BUS-3241 </td>
            <td>Financial Managemen</td>
            <td>03</td>
            </tr>

            <tr>
            <td>BUS-3242</td>
            <td>Insurance and Risk Managemen</td>
            <td>03</td>
            </tr>

            <tr>
            <td>BUS-3273</td>
            <td>Supply Chain Management </td>
            <td>03</td>
            </tr>

            <tr>
            <td>Major 1</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT </td>
            <td>03</td>
            </tr>

            <tr>
            <td>Major 2</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT</td>
            <td>03</td>
            </tr>

            <tr>
            <td>Major 3</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT</td>
            <td>03</td>
            </tr>

            <tr>
            <td colspan="2"style="text-align:center;"><b>Total</b></td>


            <td>20</td>
            </tr>

            <tr>
            <td rowspan="9"><b>4<sup>th</sup></br>Year</b></td>
            <td rowspan="8"><b>7<sup>th</sup></b></td>

            <td>BUS-4171 </td>
            <td>Project Management </td>

            <td>02</td>
            </tr>
            <tr>
            <td>GED-4112</td>
            <td> Advanced Research Methodology  </td>
            <td>02</td>
            </tr>

            <tr>
            <td>BUS-4172</td>
            <td>Operations Management</td>
            <td>03</td>
            </tr>

            <tr>
            <td>BUS-4123</td>
            <td>Strategic Management</td>
            <td>03</td>
            </tr>


            <tr>
            <td>Major 4</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT </td>
            <td>03</td>
            </tr>

            <tr>
            <td>Major 5</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT</td>
            <td>03</td>
            </tr>

            <tr>
            <td>Major 6</td>
            <td>AIS/F&B/HRM/MIS/MKT/SCM/ENT</td>
            <td>03</td>
            </tr>

            <tr>
            <td colspan="2"style="text-align:center;"><b>Total</b></td>

            <td>20</td>
            </tr>

            <tr>
            <td><b>8<sup>th</sup><b> </td>
            <td>BUS-4299</td>
            <td>Internship/Research Project</td>
             <td>06</td>
            </tr>

            <tr>
            <td colspan="4"style="text-align:center;"><b>Total</b></td>
            <td>140</td>
            </tr>










        </table>

    </table>
</br>
    <h4>Methods of determining the course code: </h4>
<p>
The course code of the Department of Business Administration starts with BUS, then first digit indicates the year where the course is assigned second digit indicates the semester. The third digit is the stream of the course where, Business Core Courses=1, Management and HRM=2, Accounting=3, Finance and Banking=4, Marketing=5, MIS=6, SCM/OM/Others/Analytical=7, ENT=8 and GED courses code starts with GED and then first digit indicates the year where the course is assigned, second digit indicates the semester. After this, the third digit is the Departmental Code 1. Finally the forth digit is the course number.

</p>

  `;

/**
 * @description Generate an `html` page with a populated table
 * @param {String} table
 * @returns {String}
 */
const createHtml = (table) => `
  <html>
    <head>
      <style>
        table {
          height:100%;
          width: 100%;
        }
        tr {
          text-align: left;

        }
        td{
          text-align: left;

          padding:1px;
          border: 1px solid black;
          border-collapse: collapse;


        }
        table,tr,th {
          padding: 5px;
          border: 1px solid black;
          border-collapse: collapse;

        }

        }
      </style>
    </head>

    <body>
      ${table}
    </body>
  </html>
`;

/**
 * @description this method takes in a path as a string & returns true/false
 * as to if the specified file path exists in the system or not.
 * @param {String} filePath
 * @returns {Boolean}
 */
const doesFileExist = (filePath) => {
    try {
        fs.statSync(filePath); // get information of the specified file path.
        return true;
    } catch (error) {
        return false;
    }
};

try {
    /* Check if the file for `html` build exists in system or not */
    if (doesFileExist(buildPathHtml)) {
        console.log("Deleting old build file");
        /* If the file exists delete the file from system */
        fs.unlinkSync(buildPathHtml);
    }
    /* generate rows */
    const rows = data.map(createRow).join("");
    /* generate table */
    const table = createTable(rows);

    /* generate html */
    const html = createHtml(table);
    /* write the generated html to file */
    fs.writeFileSync(buildPathHtml, html);
    console.log("Succesfully created an HTML table");
} catch (error) {
    console.log("Error generating table", error);
}
