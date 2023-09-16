import { exit, warning } from "@/assests/images";
import Image from "next/image";

interface Props {
  endCard?: boolean;
  iconText: string;
  text: string;
  buttonText: string;
}

export const SessionCard = ({ endCard, iconText, text, buttonText }: Props) => {
  return (
    <div className="inline-flex flex-col items-start justify-center gap-[32px] p-[24px] relative bg-[color:var(--surfacedefault)] shadow rounded-[8px] w-1/4">
      <div className="flex flex-col w-full items-start gap-[8px] relative flex-[0_0_auto]">
        <div className="flex items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[24px] h-[24px]">
            {!endCard && (
              <Image className=" w-[17px] h-[17px]" alt="Vector" src={exit} />
            )}
            {endCard && (
              <Image
                className="absolute w-[17px] h-[17px] top-[4px] left-[4px]"
                alt="warning"
                src={warning}
              />
            )}
          </div>
          <div className="relative flex-1 mt-[-1.00px] [font-family:var(--desktop-heading-6-semibold-20px-font-family)] font-[number:var(--desktop-heading-6-semibold-20px-font-weight)] text-[color:var(--text-and-iconhigh-emphasis)] text-[length:var(--desktop-heading-6-semibold-20px-font-size)] tracking-[var(--desktop-heading-6-semibold-20px-letter-spacing)] leading-[var(--desktop-heading-6-semibold-20px-line-height)] [font-style:var(--desktop-heading-6-semibold-20px-font-style)]">
            {iconText}
          </div>
        </div>
        <p className="relative self-stretch [font-family:var(--desktop-body-2-regular-14px-font-family)] font-[number:var(--desktop-body-2-regular-14px-font-weight)] text-[color:var(--text-and-icondisabled)] text-[length:var(--desktop-body-2-regular-14px-font-size)] tracking-[var(--desktop-body-2-regular-14px-letter-spacing)] leading-[var(--desktop-body-2-regular-14px-line-height)] [font-style:var(--desktop-body-2-regular-14px-font-style)]">
          {text}
        </p>
      </div>
      <div className="flex w-[294px] items-center justify-end gap-[16px] relative flex-[0_0_auto]">
        <button className="border border-[#FFF] w-[50%] py-[17px] rounded-[8px] text-[16px] font-bold leading-normal">
          Dont Leave
        </button>
        <button className="bg-[#FF7700] w-[50%] py-[17px] rounded-[8px] text-[16px] font-bold leading-normal">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
