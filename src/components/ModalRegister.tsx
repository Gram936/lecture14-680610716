import { useState } from "react";

//STEP 1 - 1.0. : การกำหนด Type ด้วย TypeScript (type RegisterForm)
//STEP 2 - 2.0. : ข้อมูล Array สำหรับ dropdown (plans)

export default function ModalRegister() {
  // STEP 1 - 1.1. : การสร้าง State สำหรับเก็บข้อมูลฟอร์ม (useState)
  // STEP 5 : Form Submission + โดยมีระบบ Checkbox ยอมรับเงื่อนไข + Form Validation
  // STEP 5 - 5.1. : ระบบยอมรับเงื่อนไขก่อนกดปุ่ม (useState)
  // STEP 1 - 1.2. : ฟังก์ชันอัปเดตข้อมูลแบบไดนามิก (updateForm)
  // STEP 4 : Total Payment (realtime)
  // STEP 4 - 4.1. : ฟังก์ชันคำนวณราคา (computeTotalPayment)
  // STEP 5 : Form Submission + โดยมีระบบ Checkbox ยอมรับเงื่อนไข + Form Validation
  // STEP 5 - 5.3. : การตรวจสอบข้อมูลก่อนส่ง (registerBtnOnClick)
  return (
    <>
      <div
        className="modal fade"
        id="modalregister"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="modalregisterLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register CMU Marathon 🏃‍♂️</h5>
              {/* STEP 6 : useState คุมการเปิด/ปิด modal เอง */}
              {/* STEP 6 - 6.2. : การสร้างและจัดการ UI Modal */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* STEP 1 : First name & Last name */}
              <div className="d-flex gap-2">
                <div>
                  <label className="form-label">First name</label>
                  {/* STEP 1 - 1.3. : สามารถส่งชื่อฟิลด์และค่าจาก input เมื่อพิมพ์ชื่อ*/}
                  <input className={"form-control"} value={""} />
                  {/* STEP 5 - 5.4. : สำหรับ Bootstrap Form แสดง Invalid first name */}
                </div>
                <div>
                  <label className="form-label">Last name</label>
                  {/* STEP 1 - 1.4. : สามารถส่งชื่อฟิลด์และค่าจาก input เมื่อพิมพ์ชื่อ*/}
                  <input className="form-control" value={""} />
                  {/* STEP 5 - 5.5. : สำหรับ Bootstrap Form แสดง Invalid last name */}
                </div>
              </div>

              {/* STEP 2 : Plan dropdown — เติม .map() วน plans สร้าง <option> (ทุกตัวมี key) */}
              <div className="mt-2">
                <label className="form-label">Plan</label>
                {/* STEP 2 - 2.1 : 2.1 การควบคุม Select element (Controlled Component) & การเรนเดอร์ ตัวเลือก (Option List) */}
                <select className="form-select" value={""}>
                  <option value="">Please select..</option>
                  <option value="funrun">Fun run 5.5 Km (500 THB)</option>
                  <option value="mini">Mini Marathon 10 Km (800 THB)</option>
                  <option value="half">Half Marathon 21 Km (1,200 THB)</option>
                  <option value="full">
                    Full Marathon 42.195 Km (1,500 THB)
                  </option>
                </select>
                {/* STEP 5 - 5.6. : สำหรับ Bootstrap Form แสดง Invalid plan */}
              </div>

              {/* STEP 3 : Gender radio — ผูก checked / onChange กับ form.gender */}
              <div className="mt-2">
                <label className="form-label">Gender</label>
                <div>
                  {/*  STEP 3 - 3.1 : การเช็กสถานะการเลือก (checked) & การอัปเดตค่าเมื่อมีการคลิก (onChange) */}
                  <input className="me-2 form-check-input" type="radio" />
                  Male 👨
                  <input className="mx-2 form-check-input" type="radio" />
                  Female 👩
                  {/* STEP 5 - 5.7. : สำหรับ Conditional Rendering แยกต่างหาก (เช่น Radio button)*/}
                </div>
              </div>

              {/* STEP 4 : Total Payment (realtime) */}
              {/* STEP 4 - 4.2. : การแสดงผลบน UI (Real-time Rendering) */}
            </div>

            <div className="modal-footer">
              {/* STEP 5 : Form Submission + โดยมีระบบ Checkbox ยอมรับเงื่อนไข + Form Validation */}
              {/* STEP 5 - 5.2. : ระบบยอมรับเงื่อนไขก่อนกดปุ่ม (disabled) */}
              {/* Terms and conditions */}
              <div>
                <input className="me-2 form-check-input" type="checkbox" />I
                agree to the terms and conditions
              </div>
              {/* Register Button */}
              <button className="btn btn-success my-2">Register</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="modal-backdrop fade show"></div> */}
    </>
  );
}
