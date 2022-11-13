import React, { useEffect, useState } from "react";
import { Input } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

export default function MaterialUIPickers({ props, type, startDate }) {
    const [selectedDate, setSelectedDate] = useState(
        props.startDate
    );

    const [minstartDate, setMinStartDate] = useState(new Date());

    useEffect(() => {
        if (type === "checkIn") {
            props.handleStartDate(selectedDate);
        }
        else {
            props.handleEndDate(selectedDate);
        }

    }, [selectedDate, props, type])

    useEffect(() => {
        if (type === "checkOut") {
            setMinStartDate(startDate);
        }
    }, [startDate, props, type])


    const renderInput = (props) => (
        <Input
            type="text"
            onClick={props.onClick}
            value={props.value}
            onChange={props.onChange}
            style={{
                position: "absolute",
                top: "7px",
                left: "20px",
                opacity: 0,
                cursor: "pointer",
                width: "85%"
            }}
        />
    );

    return (
        <DatePicker
            disableToolbar
            autoOk={true}
            label="Basic example"
            value={selectedDate}
            onChange={setSelectedDate}
            minDate={(type === "checkOut") ? minstartDate : new Date()}
            TextFieldComponent={renderInput}
        />
    );
}