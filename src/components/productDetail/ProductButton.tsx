"use client";
import { IButton } from "../UI/Button";
type ProductButtonProps = {
  ref_link: string;
};
export default function ProductButton({ ref_link }: ProductButtonProps) {
  async function handleClick() {
    if (ref_link !== "") {
      window.open(`http://localhost:3000/ref?target=${btoa(ref_link)}`);
    }
  }
  return (
    <div className="flex items-center mt-4 mb-4">
      <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
        <IButton label="Mua ngay" handleClick={handleClick} />
      </div>
    </div>
  );
}
