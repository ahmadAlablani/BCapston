"use clent";

import {Img, Text, Button, Input, Heading} from "src/components";
import Link from "next/link";
import React from "react";

export default function LoginOnePage() {
  return (
    <div className="flex w-full items-start bg-blue_gray-900_01 p-[38px] md:flex-col sm:p-5">
      <div className="flex w-[48%] items-start justify-center gap-4 md:w-full md:flex-col">
        <Heading size="headings" as="h1" className="font-poppins text-[20px] font-semibold text-black-900_03">
          MotoMatch
        </Heading>
        <div className="mt-[262px] flex flex-1 flex-col items-start gap-[110px] self-end md:gap-[82px] md:self-stretch sm:gap-[54px]">
          <Heading size="headings" as="h2" className="font-poppins text-[50px] font-semibold md:text-[46px] sm:text-[40px]">
            Log In
          </Heading>
          <div className="flex flex-col items-start gap-1.5 self-stretch">
            <Text size="textxl" as="p" className="font-poppins text-[16px] font-normal">
              If you don't have an account register
            </Text>
            <Text size="textxl" as="p" className="font-poppins text-[16px] font-normal text-black-900_03">
              <span className="text-white-a700">You can&nbsp;</span>
              <span className="text-black-900_03">&nbsp;&nbsp;</span>
              <span className="font-semibold text-indigo-500">Register here !</span>
            </Text>
          </div>
        </div>
      </div>
      <div className="mt-[150px] flex flex-1 flex-col items-center self-center px-14 md:self-stretch md:px-5">
        <Link href="#" className="w-[116px] self-start md:ml-0 md:text-[28px] sm:text-[26px]">
          <Heading size="textxl" as="h2" className="font-poppins text-[30px] font-medium">
            Log In
          </Heading>
        </Link>
        <div className="mt-6 flex w-[72%] flex-col items-end md:w-full">
          <input
            type="email"
            name="userName"
            placeholder="Enter email or user name"
            className="w-[84%] rounded-lg font-poppins"
          />
          <div className="mt-[38px] flex flex-col items-end gap-[18px] self-stretch">
            <input
              type="password"
              name="password"
              placeholder="Password"
              suffix={
                <img
                  src="img_Invisible_1.svg"
                  width={16}
                  height={16}
                  alt="Invisible 1"
                  className="my-0.5 h-[16px] w-[16px] object-contain"
                />
              }
              className="w-[84%] gap-4 rounded-lg font-poppins"
            />
            <Text size="texts" as="p" className="font-poppins text-[13px] font-normal text-gray-400_03">
  Forgot password ?
</Text>
</div>

<Button size="xl" className="mt-11 min-w-[368px] rounded-lg px-[34px] font-poppins font-medium sm:px-5">
  Login
</Button>

<Link href="#" className="mr-[118px] mt-[52px] md:mr-0">
  <Text size="textxl" as="p" className="font-poppins text-[16px] font-medium text-gray-400_03">
    or continue with
  </Text>
</Link>

<div className="mt-11 flex">
  <img
    src="img_Facebook_white_2700.png"
    width={40}
    height={40}
    alt="Facebook"
    className="h-[40px] object-cover"
  />
  <img
    src="img_favorite_blue_gray_900.svg"
    width={40}
    height={40}
    alt="Favorite"
    className="ml-5 h-[40px]"
  />
  <img
    src="img_google.svg"
    width={40}
    height={40}
    alt="Google"
    className="ml-[18px] h-[40px]"
  />

          </div>
        </div>
      </div>
    </div>
  );
}