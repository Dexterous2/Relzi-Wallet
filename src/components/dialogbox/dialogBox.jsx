import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { addData } from "@/redux/feature/order";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useDispatch } from "react-redux";

export function AlertDialogPri({
  btn_name,
  title,
  desc,
  path_name,
  className,
  addToCart,
}) {
  const router = useRouter();
  const params = useSearchParams();
  const pathName = usePathname();
  const searchParam = params.toString();


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className={className}>
        <Button variant="outline" className='bg-primary-color text-[#fff] w-full rounded-full' onClick={addToCart}>{btn_name}</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <h4 className="text-xl font-bold">{title}</h4>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          {pathName === "/car-detail" ? (
            <>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=hotel")}
              >
                {" "}
                Hotel Booking{""}
              </AlertDialogCancel>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=flight")}
              >
                {" "}
                Flight Booking{" "}
              </AlertDialogCancel>
            </>
          ) : pathName + "?" + searchParam === "/search?type=flight" ? (
            <>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=hotel")}
              >
                Hotel Booking
              </AlertDialogCancel>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=car")}
              >
                Car Booking
              </AlertDialogCancel>
            </>
          ) : pathName.split("/")[1] === "search" || "plan-a-trip" ? (
            <>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=flight")}
              >
                {" "}
                Flight Booking{" "}
              </AlertDialogCancel>
              <AlertDialogCancel
                onClick={() => router.push("/search?type=car")}
              >
                Car Booking
              </AlertDialogCancel>
            </>
          ) : (
            ""
          )}

          <Link href={'/check-out'}>
            <AlertDialogAction>
              {" "}
              Check out{" "}
            </AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
