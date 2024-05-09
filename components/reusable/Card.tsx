import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import {DeleteConfirmation} from "./DeleteConfirmation";
type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hideprice?: boolean;
};
const Card = ({ event, hasOrderLink, hideprice }: CardProps) => {
  // sessionClaims 通常包含了与当前用户会话相关的一些声明信息（claims）
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  // compare
  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px] ">
      {/* card images */}
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 "></Link>

      {/* am i the event creator? */}
      {isEventCreator && !hideprice && (
        // edit click
        <div className="absolute right-2 top-2 flex flex-col gap-2 rounded-xl bg-white p-3 shadow-sm transition-all ">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width="20"
              height="20"
            />
          </Link>
          <DeleteConfirmation eventId={event._id}/>
        </div>
      )}
      <div
       
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
        {/* not my tickets then shows all informations */}
        {!hideprice && (
          <div className="flex gap-2">
            {/* prices of event shows */}
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? "Free" : `${event.price}`}
            </span>
            {/* category  */}
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        )}
        {/*p-medium-16  */}
        <p className=" p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        {/* limit in 2 lines ....  */}
        <Link  href={`/events/${event._id}`}>
        <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p> 
        </Link>
        {/* name */}
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>
          {/* "Events_Organized"; can be ordered */}
          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                alt="search"
                width="10"
                height="10"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
