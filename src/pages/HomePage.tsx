import ModalRegister from "../components/ModalRegister";
export default function HomePage() {
  //STEP 6 : คุมการเปิด/ปิด modal เอง (useState)
  //STEP 6 - 6.1. : useState คุมการแสดง modal เริ่มที่ false (ปิดอยู่)
  return (
    <div className="col-12 mt-4 p-0">
      <div className="container text-center">
        <h2> Wellcome To CMU Marathon</h2>
        <div>
          <img src="/marathonrun.png" alt="Logo CMU Marathon" />
        </div>
        <button
          type="button"
          className="m-4 btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalregister"
        >
          Register
        </button>
      </div>
      <ModalRegister />
    </div>
  );
}
