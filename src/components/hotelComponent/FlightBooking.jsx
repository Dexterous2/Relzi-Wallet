import Image from "next/image";
import React, { useState } from "react";
import SelectFlight from "../modal's/SelectFlight/SelectFlight";
import { usePathname, useRouter } from "next/navigation";
import { AlertDialogPri } from "../dialogbox/dialogBox";
import Button from "../button/Button";

const FlightBooking = () => {
  const [isFlightBooking, setIsFlightBooking] = useState(false);

  const pathName = usePathname();
  const pathNameStart = pathName.startsWith("/plan-a-trip");

  const router = useRouter();

  return (
    <div className="border--2 border-[orange] w-full xl:col-span-5 2xl:col-span-5 flex flex-col items-end">
      {pathNameStart === true ? (
        <Button
          name={"Skip"}
          className={"max-w-[8rem] mr-5 mb-2"}
          onClick={() => router.push("/plan-a-trip?type=car")}
        />
      ) : (
        ""
      )}

      <div className="w-full xl:col-span-5 2xl:col-span-5 flex flex-col gap-3 mb-5 overflow-auto px-4 py-2 h-[80vh]">
        {Array.from({ length: 20 })?.map((_item, i) => (
          <div
            className="w-full box_shadow_primary flex justify-between items-center py-4 px-4 rounded-xl bg-white flex-wrap gap-4 sm:items-start active:scale-[0.998] cursor-pointer transition-all"
            key={i}
            onClick={() => setIsFlightBooking(true)}
          >
            <div className="flex flex-col items-start">
              <h5 className="font-semibold">8:35am - 6:10pm</h5>
              <p>Dubai (DXB) - New York (JFK)</p>
              <span className="flex items-center">
                <Image
                  src={"/image/main/Turkish-Airlines-symbol.png"}
                  width={25}
                  height={25}
                />
                <p>Turkish Airlines</p>
              </span>
            </div>
            <div>
              <p>18h 35m (1 stop)</p>
              <p>2h 30m in Istanbul (IST)</p>
            </div>
            <div className="flex items-end flex-col sm:w-fit w-full ">
              <p className="font-semibold">$915</p>
              <p>Roundtrip per traveler</p>
            </div>
          </div>
        ))}

        {isFlightBooking && <SelectFlight isOpen={setIsFlightBooking} />}
      </div>
    </div>
  );
};

export default FlightBooking;
