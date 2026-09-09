import type { Registrant } from "../libs/Registrant";

// STEP 9 : component แสดงผลอย่างเดียว (presentational) — รับข้อมูล 1 คนผ่าน props
export default function UserRegisterCard({
  registrant,
}: {
  registrant: Registrant;
}) {
  // STEP 9 : แปลงค่าเพศเป็นข้อความ
  //    registrant.gender === "male"   -> "👨 Male"
  //    registrant.gender === "female" -> "👩 Female"
  return <div className="card p-3"></div>;
}
