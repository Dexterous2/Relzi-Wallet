import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { addData, removeData } from "@/redux/feature/order";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ResponseToast from "../toast/Toast";
import Link from "next/link";

export function CartSheet({ ordersData, setOrdersData }) {
  const [cartLength, setCartLength] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const selector = useSelector((order) => order.orders);
  const dispatch = useDispatch();


  const handelFilter = async (e) => {
    const filterData = Array.isArray(ordersData) ? ordersData.filter((id) => id.id !== e) : [];
    dispatch(removeData());
    setOrdersData(filterData);
    ResponseToast({ message: "Order remove successfully" })
  };

  useEffect(() => {
    const totalPrice = Array.isArray(ordersData) ? selector?.data?.reduce((acc, curr) => acc + curr.price, 0) : 0;
    setTotalPrice(totalPrice);
  }, [selector?.data]);

  useEffect(() => {
    setCartLength(selector?.data?.length);
  }, [selector?.data]);

  useEffect(() => {
    dispatch(addData(ordersData));
  }, [ordersData]);

  return (
    <Sheet className="sm:max-w--full">
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="border-0 relative flex justify-center items-center cursor-pointer bg-transparent"
        >
          <BsCart2 className="text-[2rem] bg-transparent text-primary-color" />
          <p className="text-[red] font-bold absolute top-[-0.5rem] left--2 text-[1rem] z-10">
            {cartLength}
          </p>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className={"border-b-[1px] pb-3"}>
          <SheetTitle>Add to cart</SheetTitle>
          <SheetDescription>
            Ready to make it yours? Just click 'Add to Cart' to start your
            journey.
          </SheetDescription>
        </SheetHeader>

        <div className="border--2 border-[yellow] grid gap-4 py-4 h-[70vh] overflow-hidden overflow-y-auto">
          {selector?.data?.map((item) => (
            <div
              className="border--2 border-[green] grid grid-cols-4 gap-4 box_shadow_primary p-2"
              key={item.id}
            >
              <div className="border--2 border-[red] h-fit h--[4.5rem] col-span-4 p-1">
                <div className="flex justify-between">
                  <div>
                    <h5 className="font-bold mb-0 pb-0"> {item?.title} </h5>
                    <small className="mt-0 pt-0"> {item?.type} </small>
                  </div>
                  <div
                    className="mt-1 cursor-pointer"
                    onClick={() => handelFilter(item.id)}
                  >
                    <MdDelete className="text-base" />
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <h6 className="text-sm font-medium mb-0 pb-0"> Rooms </h6>
                  <small className="font-bold text-sm"> {item.qty} </small>
                </div>
                <div className="border-t-[1px] flex flex-col justify-center pt-2">
                  <h6 className="text-sm font-medium mb-0 pb-0">
                    {" "}
                    Description{" "}
                  </h6>
                  <small className="mt-0 pt-0">{item.desc}</small>
                </div>
                <div className="border-t-[1px] flex flex-col justify-center items-end pt-2">
                  <h6 className="text-sm font-bold mb-0 pb-0"> price </h6>
                  <small className="text-sm font-semibold mt-0 pt-0">
                    {item.price}/$
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border--2 border-[green] grid grid-cols-4 gap-4 box_shadow_primary p-2 my-3">
          <div className="border--2 border-[red] h-fit  h--[4.5rem] col-span-4 p-1">
            <div className="border--t-[1px] flex flex--col justify-between items-end pt-2">
              <h6 className="text-sm font-bold mb-0 pb-0"> Total </h6>
              <small className="text-sm font-semibold mt-0 pt-0">
                ${totalPrice}
              </small>
            </div>
          </div>
        </div>

        <SheetFooter className={"gap-2"}>
          <SheetClose asChild>
            <Button type="">Cancel</Button>
          </SheetClose>
          <Link href={"/check-out"}>
            <SheetClose asChild>
              <Button type="">Check out</Button>
            </SheetClose>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
