import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPPatternPri({className}) {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} className={className}>
      <InputOTPGroup className='flex gap-2'>
        <InputOTPSlot index={0} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={1} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={2} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={3} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={4} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={5} className='border-2 border-[#fff] max-sm:w-[2.5rem] max-sm:h-[2.5rem] w-[3rem] h-[3rem] rounded-full' />
      </InputOTPGroup>
    </InputOTP>
  )
}





{/* <InputOTPSlot index={0} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={1} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={2} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={3} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={4} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' />
        <InputOTPSlot index={5} className='border-2 border-[#fff] w-[3rem] h-[3rem] rounded-full' /> */}
