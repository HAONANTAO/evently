"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var image_1 = require("next/image");
var react_datepicker_1 = require("react-datepicker");
var button_1 = require("@/components/ui/button");
require("react-datepicker/dist/react-datepicker.css");
var checkbox_1 = require("@/components/ui/checkbox");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var validator_1 = require("../../lib/validator");
var data_1 = require("@/data");
var Dropdown_1 = require("./Dropdown");
var textarea_1 = require("../ui/textarea");
var FileUploader_1 = require("./FileUploader");
// type EventFormProps = {
//   userId: string;
//   type: "Create" | " Update";
// };
var EventForm = function (_a) {
    var userId = _a.userId, type = _a.type;
    var _b = react_1.useState([]), files = _b[0], setFiles = _b[1];
    //date picker
    var _c = react_1.useState(new Date()), startDate = _c[0], setStartDate = _c[1];
    // const initialValues =eventDefaultValues;
    // 1. Define your form.
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(validator_1.eventFormSchema),
        defaultValues: data_1.eventDefaultValues
    });
    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (react_1["default"].createElement(form_1.Form, __assign({}, form),
        react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col gap-5 space-y-8" },
            react_1["default"].createElement("div", { className: "flex flex-col gap-5 md:flex-row" },
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "title", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormLabel, null, "Title"),
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Event Title", className: "input-field" }, field))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "categoryId", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormLabel, null, "Category"),
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement(Dropdown_1["default"], { onChangeHandler: field.onChange, value: field.value })),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } })),
            react_1["default"].createElement("div", { className: "flex flex-col gap-5 md:flex-row" },
                " ",
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "description", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormLabel, null, "Description"),
                            react_1["default"].createElement(form_1.FormControl, { className: "h-72" },
                                react_1["default"].createElement(textarea_1.Textarea, __assign({ placeholder: "Description", className: "textarea round-2xl" }, field))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "imageUrl", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormControl, { className: "h-72" },
                                react_1["default"].createElement(FileUploader_1.FileUploader, { onFieldChange: field.onChange, imageUrl: field.value, setFiles: setFiles })),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } })),
            react_1["default"].createElement("div", { className: "flex flex-col gap-5 md:flex-row" },
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "location", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormLabel, null, "Location"),
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement("div", { className: "flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2" },
                                    react_1["default"].createElement(image_1["default"], { src: "/assets/icons/location-grey.svg", alt: "location", width: "24", height: "24" }),
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Event Location or Online", className: "input-field" }, field)))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } })),
            react_1["default"].createElement("div", { className: "flex flex-col gap-5 md:flex-row" },
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "startDateTime", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement("div", { className: "flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2" },
                                    react_1["default"].createElement(image_1["default"], { src: "/assets/icons/calendar.svg", alt: "calendar", width: 24, height: 24, className: "filter-grey" }),
                                    react_1["default"].createElement("p", { className: "ml-3 whitespace-nowrap text-grey-600" }, "Start Date:"),
                                    react_1["default"].createElement(react_datepicker_1["default"], { selected: field.value, onChange: function (date) { return field.onChange(date); }, showTimeSelect: true, timeInputLabel: "Time:", dateFormat: "MM/dd/yyyy h:mm aa", wrapperClassName: "datePicker" }))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "endDateTime", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement("div", { className: "flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2" },
                                    react_1["default"].createElement(image_1["default"], { src: "/assets/icons/calendar.svg", alt: "calendar", width: 24, height: 24, className: "filter-grey" }),
                                    react_1["default"].createElement("p", { className: "ml-3 whitespace-nowrap text-grey-600" }, "End Date:"),
                                    react_1["default"].createElement(react_datepicker_1["default"], { selected: field.value, onChange: function (date) { return field.onChange(date); }, showTimeSelect: true, timeInputLabel: "Time:", dateFormat: "MM/dd/yyyy h:mm aa", wrapperClassName: "datePicker" }))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } })),
            react_1["default"].createElement("div", { className: "flex flex-col gap-5 md:flex-row" },
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "price", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement("div", { className: "flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2" },
                                    react_1["default"].createElement(image_1["default"], { src: "/assets/icons/dollar.svg", alt: "dollar", width: 24, height: 24, className: "filter-grey" }),
                                    react_1["default"].createElement(input_1.Input, __assign({ type: "number", placeholder: "Price", className: "p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" }, field)),
                                    react_1["default"].createElement(form_1.FormField, { control: form.control, name: "isFree", render: function (_a) {
                                            var field = _a.field;
                                            return (react_1["default"].createElement(form_1.FormItem, null,
                                                react_1["default"].createElement(form_1.FormControl, null,
                                                    react_1["default"].createElement("div", { className: "flex items-center" },
                                                        react_1["default"].createElement("label", { htmlFor: "isFree", className: "whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" }, "Free Ticket"),
                                                        react_1["default"].createElement(checkbox_1.Checkbox, { onCheckedChange: field.onChange, id: "isFree", className: "mr-2 h-5 w-5 border-2 border-primary-500" }))),
                                                react_1["default"].createElement(form_1.FormMessage, null)));
                                        } }))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } }),
                react_1["default"].createElement(form_1.FormField, { control: form.control, name: "url", render: function (_a) {
                        var field = _a.field;
                        return (react_1["default"].createElement(form_1.FormItem, { className: "w-full" },
                            react_1["default"].createElement(form_1.FormControl, null,
                                react_1["default"].createElement("div", { className: "flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-100 px-4 py-2" },
                                    react_1["default"].createElement(image_1["default"], { src: "/assets/icons/link.svg", alt: "link", width: "24", height: "24" }),
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "URL", className: "input-field" }, field)))),
                            react_1["default"].createElement(form_1.FormMessage, null)));
                    } })),
            react_1["default"].createElement(button_1.Button, { type: "submit", className: "button col-span-2 w-full", size: "lg", disabled: form.formState.isSubmitting }, form.formState.isSubmitting ? "Submitting ..." : type + " Event"))));
};
exports["default"] = EventForm;
