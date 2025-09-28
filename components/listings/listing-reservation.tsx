"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/calendar";
import Button from "../button";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border-[1px] border-neutral-200">
      <div className="flex flex-row gap-1 items-center p-4">
        <h4 className="text-2xl font-semibold">${price}</h4>
        <p className="text-neutral-600 font-light">per night</p>
      </div>
      <hr />
      <Calendar
        onChange={(value) => onChangeDate(value.selection)}
        value={dateRange}
        disabledDates={disabledDates}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <h4>Total</h4>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default ListingReservation;
